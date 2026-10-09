import React from 'react';
import { Calendar, Globe, Users, Code, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const eventCoordination = experienceData.filter((e) => e.type === 'Technical Event & Web Development');
  const leadership = experienceData.filter((e) => e.type === 'Student Leadership');

  return (
    <section id="experience" className="py-20 bg-white border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              05 // EVENT COORDINATION & LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Technical Experience & Leadership
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500 max-w-sm">
            Proven track record organizing large-scale student hackathons and building dedicated responsive web platforms.
          </p>
        </div>

        {/* 2-Column Split: Event Web & Coordination | Student Club Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Technical Event Organizer & Web Developer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-charcoal-100">
              <Code className="w-4 h-4 text-engineering-600" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal-900">
                Technical Event Coordination & Website Development
              </h3>
            </div>

            <div className="space-y-4">
              {eventCoordination.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl border border-charcoal-200 bg-[#fafbfc] hover:border-engineering-500/50 hover:bg-white transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold font-mono text-charcoal-900">
                        {item.eventName}
                      </h4>
                      <p className="text-xs font-mono text-engineering-700 font-semibold">
                        {item.role}
                      </p>
                    </div>

                    {item.year && (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-100 text-charcoal-600">
                        <Calendar className="w-3 h-3" />
                        <span>{item.year}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed mt-2">
                    {item.contribution}
                  </p>

                  {item.websiteUrl && (
                    <div className="mt-3 pt-2">
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-mono text-engineering-700 hover:underline"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Visit Event Portal</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Student Leadership & Clubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-charcoal-100">
              <Users className="w-4 h-4 text-engineering-600" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal-900">
                Student Club Office-Bearer Roles
              </h3>
            </div>

            <div className="space-y-4">
              {leadership.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl border border-charcoal-200 bg-white hover:border-charcoal-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-engineering-50 text-engineering-800 border border-engineering-200 font-semibold uppercase">
                      {item.role}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-mono text-charcoal-900 mb-1">
                    {item.eventName}
                  </h4>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.contribution}
                  </p>
                </div>
              ))}

              {/* Engineering Ethos Card */}
              <div className="p-5 rounded-xl bg-charcoal-900 text-white space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-engineering-400 font-bold block">
                  COLLABORATIVE APPROACH
                </span>
                <p className="text-xs leading-relaxed text-charcoal-300">
                  Combining hardware design with community-driven peer learning and hackathon organization to cultivate high-impact engineering student teams.
                </p>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-engineering-300 pt-1">
                  <span>Student Innovation Initiatives</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
