import React from 'react';

export default function HeroTrustRow() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
      {/* Avatars */}
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-2 border-white" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-red-400 border-2 border-white" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(4)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      </div>

      {/* Trust text */}
      <div className="text-center sm:text-left">
        <div className="text-sm font-semibold text-slate-900">Trusted by 200+ clients</div>
      </div>
    </div>
  );
}
