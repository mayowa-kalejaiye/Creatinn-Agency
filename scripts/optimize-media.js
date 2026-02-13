const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const sharp = require('sharp');
const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'optimized');

const IMAGE_EXT = /\.(jpe?g|png|tiff|bmp)$/i;
const VIDEO_EXT = /\.(mp4|mov|avi|mkv|webm|mpg|mpeg)$/i;

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function optimizeImages(files) {
  const results = [];
  await ensureDir(path.join(OUT, 'images'));
  for (const file of files) {
    try {
      const rel = path.relative(PUBLIC, file);
      const outDir = path.join(OUT, 'images', path.dirname(rel));
      await ensureDir(outDir);

      const base = path.basename(file, path.extname(file));
      const metadata = await sharp(file).metadata();
      const srcSize = (await fs.promises.stat(file)).size;

      // produce two sizes: web (max 1200) and mobile (max 800), in both webp and avif
      const sizes = [1200, 800];
      for (const w of sizes) {
        const resizeOpts = metadata.width && metadata.width > w ? { width: w } : {};
        const webpOut = path.join(outDir, `${base}-${w}.webp`);
        const avifOut = path.join(outDir, `${base}-${w}.avif`);

        await sharp(file).resize(resizeOpts).webp({ quality: 80 }).toFile(webpOut);
        await sharp(file).resize(resizeOpts).avif({ quality: 50 }).toFile(avifOut);
      }

      results.push({ file: rel, bytes: srcSize });
    } catch (e) {
      console.error('image error', file, e.message || e);
    }
  }
  return results;
}

function runFFmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath, args, { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error('ffmpeg exited ' + code));
    });
  });
}

async function optimizeVideos(files) {
  const results = [];
  await ensureDir(path.join(OUT, 'videos'));
  for (const file of files) {
    try {
      const rel = path.relative(PUBLIC, file);
      const outDir = path.join(OUT, 'videos', path.dirname(rel));
      await ensureDir(outDir);
      const base = path.basename(file, path.extname(file));
      const mp4Out = path.join(outDir, `${base}-720p.mp4`);
      const webmOut = path.join(outDir, `${base}-720p.webm`);

      // mp4 H.264 (720p, reasonable bitrate)
      await runFFmpeg(['-y', '-i', file, '-c:v', 'libx264', '-preset', 'fast', '-crf', '28', '-vf', 'scale=-2:720', '-c:a', 'aac', '-b:a', '96k', mp4Out]);

      // webm VP9 (720p)
      await runFFmpeg(['-y', '-i', file, '-c:v', 'libvpx-vp9', '-b:v', '1M', '-vf', 'scale=-2:720', '-c:a', 'libopus', '-b:a', '64k', webmOut]);

      const srcSize = (await fs.promises.stat(file)).size;
      results.push({ file: rel, bytes: srcSize });
    } catch (e) {
      console.error('video error', file, e.message || e);
    }
  }
  return results;
}

(async () => {
  try {
    console.log('Scanning public/ for media...');
    const entries = await fg(['**/*.*'], { cwd: PUBLIC, absolute: true, dot: false });

    const imageFiles = entries.filter((p) => IMAGE_EXT.test(p));
    const videoFiles = entries.filter((p) => VIDEO_EXT.test(p));

    // Filter by size thresholds to avoid re-encoding tiny assets
    const bigImages = [];
    for (const f of imageFiles) {
      const s = (await fs.promises.stat(f)).size;
      if (s > 100 * 1024) bigImages.push(f); // >100KB
    }
    const bigVideos = [];
    for (const f of videoFiles) {
      const s = (await fs.promises.stat(f)).size;
      if (s > 500 * 1024) bigVideos.push(f); // >500KB
    }

    console.log(`Found ${bigImages.length} images to optimize and ${bigVideos.length} videos to optimize.`);

    const imageResults = await optimizeImages(bigImages);
    const videoResults = await optimizeVideos(bigVideos);

    console.log('\nOptimization complete. Summary:');
    for (const r of imageResults) console.log('IMAGE:', r.file, Math.round(r.bytes / 1024), 'KB');
    for (const r of videoResults) console.log('VIDEO:', r.file, Math.round(r.bytes / 1024), 'KB');

    console.log('\nOptimized files are in public/optimized/ (images, videos).');
  } catch (e) {
    console.error('fatal', e.message || e);
    process.exit(1);
  }
})();
