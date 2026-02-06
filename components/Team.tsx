import React from 'react';

const teamMembers = [
  {
    name: 'Peter-Nelson Isaiah',
    role: 'Head of Creative',
    image: '/team/peter-nelson.jpg',
    twitter: 'https://x.com/creatinn',
    linkedin: 'https://www.linkedin.com/company/creatinn/',
  },
];

export default function Team() {
  return (
    <section className="relative z-30 bg-white py-20" id="team">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[rgb(27,29,30)] mb-4">
            Meet the creative mind<br/> behind our <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium">success</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A passionate designer and developer dedicated to bringing your vision to life
          </p>
        </div>

        <div className="flex justify-center">
        <div className="max-w-sm">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-slate-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{member.role}</p>
                <div className="flex gap-3">
                  <a 
                    href={member.twitter}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a 
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
