import React from 'react';
import { Cpu, Wifi, Lightbulb, Users, Compass, Award, Languages } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const getFocusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-engineering-600" />;
      case 1:
        return <Wifi className="w-5 h-5 text-engineering-600" />;
      case 2:
        return <Lightbulb className="w-5 h-5 text-engineering-600" />;
      case 3:
        return <Users className="w-5 h-5 text-engineering-600" />;
      default:
        return <Cpu className="w-5 h-5 text-engineering-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              01 // BACKGROUND & FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              About Me
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500">
            M. KUMARASAMY COLLEGE OF ENGINEERING // KARUR
          </div>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
              Bridging Hardware Architecture & Intelligent Systems
            </h3>
            <p className="text-charcoal-600 leading-relaxed text-base">
              {profileData.aboutText}
            </p>
            <div className="p-4 rounded-xl bg-charcoal-50 border border-charcoal-200 text-xs font-mono text-charcoal-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-charcoal-500">DISCIPLINE:</span>
                <span className="font-semibold text-charcoal-900">Electronics & Communication Engineering</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal-500">LOCATION:</span>
                <span className="font-semibold text-charcoal-900">Karur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal-500">DEGREE TENURE:</span>
                <span className="font-semibold text-charcoal-900">2024 – 2028</span>
              </div>
            </div>
          </div>

          {/* 4 Focus Areas */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.focusAreas.map((area, idx) => (
              <div
                key={area.title}
                className="p-5 rounded-xl bg-[#fafbfc] border border-charcoal-200 hover:border-engineering-500/60 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-charcoal-200 flex items-center justify-center mb-4 group-hover:bg-engineering-50 transition-colors shadow-2xs">
                  {getFocusIcon(idx)}
                </div>
                <h4 className="text-base font-bold text-charcoal-900 mb-2 font-mono">
                  {area.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Restrained Tertiary Sections: Areas of Interest, Strengths, Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-charcoal-200">
          
          {/* Areas of Interest */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-4 h-4 text-engineering-600" />
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-charcoal-900">
                Areas of Interest
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profileData.areasOfInterest.map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded-md bg-charcoal-100 text-charcoal-800 text-xs font-mono border border-charcoal-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-4 h-4 text-engineering-600" />
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-charcoal-900">
                Professional Strengths
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profileData.professionalStrengths.map((strength) => (
                <span
                  key={strength}
                  className="px-2.5 py-1 rounded-md bg-white text-charcoal-800 text-xs font-medium border border-charcoal-300"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Languages className="w-4 h-4 text-engineering-600" />
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-charcoal-900">
                Languages
              </h4>
            </div>
            <div className="space-y-2">
              {profileData.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-50 border border-charcoal-200 text-xs font-mono"
                >
                  <span className="font-semibold text-charcoal-900">{lang.language}</span>
                  <span className="text-engineering-700 bg-engineering-50 px-2 py-0.5 rounded border border-engineering-200">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
