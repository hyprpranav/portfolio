import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#fafbfc] border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              06 // ACADEMIC RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Education
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500">
            UNDERGRADUATE CURRICULUM
          </div>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-charcoal-100">
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-charcoal-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <GraduationCap className="w-6 h-6 text-engineering-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold font-mono text-charcoal-900">
                  {educationData.institution}
                </h3>
                <p className="text-sm font-semibold text-engineering-800 font-mono">
                  {educationData.degree}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-500 pt-1">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{educationData.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{educationData.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA metric badge */}
            <div className="p-3 sm:p-4 rounded-xl bg-engineering-50 border border-engineering-200 text-right sm:text-center self-start sm:self-auto">
              <div className="flex items-center space-x-1 text-[11px] font-mono text-engineering-800 font-semibold uppercase justify-end sm:justify-center">
                <Award className="w-3.5 h-3.5" />
                <span>CUMULATIVE GPA</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-engineering-900 mt-0.5">
                {educationData.cgpa}
              </div>
            </div>

          </div>

          {/* Highlights */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold mb-3">
              Academic & Applied Highlights
            </h4>
            <div className="space-y-2">
              {educationData.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal-600">
                  <CheckCircle2 className="w-4 h-4 text-engineering-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
