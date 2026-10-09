import React from 'react';
import { ArrowRight, FileText, Mail, Cpu, Radio, Zap } from 'lucide-react';
import { profileData } from '../data/profile';
import { ProfilePhoto } from './ProfilePhoto';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden border-b border-charcoal-200/60"
    >
      {/* Background Technical Grid and Circuit Grid */}
      <div className="absolute inset-0 bg-tech-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle Coordinate / Grid Accent Watermarks */}
      <div className="absolute top-28 left-8 hidden xl:block text-[11px] font-mono text-charcoal-400 select-none pointer-events-none space-y-1">
        <div>SYS_COORD: 10°57'36&quot;N 78°04'35&quot;E</div>
        <div>FIELD: ELECTRONICS & EMBEDDED_ENG</div>
        <div>INST: M_KUMARASAMY_COLLEGE_ENG</div>
      </div>
      <div className="absolute bottom-12 right-8 hidden xl:block text-[11px] font-mono text-charcoal-400 select-none pointer-events-none text-right space-y-1">
        <div>CORE: HARDWARE_TELEMETRY // IOT</div>
        <div>STATUS: ACTIVE_RESEARCH_2026</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status chip */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-engineering-50 border border-engineering-200 text-engineering-800 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-engineering-600 animate-pulse" />
              <span>ECE Undergraduate & Embedded Systems Enthusiast</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.08]">
                HARISH PRANAV S
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-charcoal-700 font-semibold tracking-tight">
                Electronics & Communication Engineering
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl">
              {profileData.shortBio}
            </p>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-charcoal-100/90 text-charcoal-700 text-xs font-mono font-medium border border-charcoal-200">
                <Cpu className="w-3.5 h-3.5 text-engineering-600" />
                <span>Embedded Systems</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-charcoal-100/90 text-charcoal-700 text-xs font-mono font-medium border border-charcoal-200">
                <Radio className="w-3.5 h-3.5 text-engineering-600" />
                <span>IoT & Telemetry</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-charcoal-100/90 text-charcoal-700 text-xs font-mono font-medium border border-charcoal-200">
                <Zap className="w-3.5 h-3.5 text-engineering-600" />
                <span>Engineering Simulation</span>
              </span>
            </div>

            {/* Actions: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-charcoal-900 text-white hover:bg-charcoal-800 transition-all font-mono text-sm font-semibold shadow-sm hover:shadow active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-engineering-400" />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-charcoal-900 border border-charcoal-300 hover:bg-charcoal-50 hover:border-charcoal-400 transition-all font-mono text-sm font-semibold shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-charcoal-500" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-1.5 px-3 py-3 text-sm font-mono text-charcoal-600 hover:text-engineering-700 underline underline-offset-4 decoration-charcoal-300 hover:decoration-engineering-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dedicated Profile Photograph / Engineering Monogram Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhoto imagePath={profileData.images.primary} />
          </div>

        </div>
      </div>
    </section>
  );
};
