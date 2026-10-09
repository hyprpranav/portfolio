import React, { useState } from 'react';
import { Cpu, Code, Globe, Activity, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(skillCategories[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'embedded-iot':
        return <Cpu className="w-4 h-4" />;
      case 'programming':
        return <Code className="w-4 h-4" />;
      case 'web-dev':
        return <Globe className="w-4 h-4" />;
      case 'simulation':
        return <Activity className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const selectedCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-[#fafbfc] border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              02 // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Technical Skills & Tooling
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500 max-w-sm">
            Applied competencies across microcontrollers, system buses, simulation engines, and modern frontend tools.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill Categories">
          {skillCategories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                id={`tab-${category.id}`}
                onClick={() => setActiveCategoryId(category.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
                  isActive
                    ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                    : 'bg-white text-charcoal-700 border-charcoal-200 hover:border-charcoal-300 hover:bg-charcoal-50'
                }`}
              >
                <span className={isActive ? 'text-engineering-400' : 'text-charcoal-400'}>
                  {getCategoryIcon(category.id)}
                </span>
                <span>{category.name}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                  isActive ? 'bg-charcoal-800 text-engineering-300' : 'bg-charcoal-100 text-charcoal-600'
                }`}>
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div
          id={`panel-${selectedCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedCategory.id}`}
          className="bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-8 shadow-xs"
        >
          {/* Category Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-charcoal-100 gap-2">
            <div>
              <h3 className="text-xl font-bold text-charcoal-900 font-mono flex items-center space-x-2">
                <span>{selectedCategory.name}</span>
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                {selectedCategory.description}
              </p>
            </div>
            <div className="text-[11px] font-mono text-engineering-700 bg-engineering-50 border border-engineering-200 px-3 py-1 rounded-md self-start sm:self-auto">
              VERIFIED APPLIED COMPETENCY
            </div>
          </div>

          {/* Skill Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-xl border transition-all duration-200 group flex items-start space-x-3.5 ${
                  skill.highlight
                    ? 'bg-[#fcfdfd] border-charcoal-200 hover:border-engineering-500/70 hover:shadow-2xs'
                    : 'bg-white border-charcoal-200 hover:border-charcoal-300'
                }`}
              >
                <div className={`mt-0.5 p-1 rounded-md flex-shrink-0 ${
                  skill.highlight ? 'text-engineering-600 bg-engineering-50' : 'text-charcoal-400 bg-charcoal-50'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-charcoal-900 font-mono tracking-tight">
                      {skill.name}
                    </h4>
                    {skill.highlight && (
                      <span className="text-[9px] font-mono uppercase tracking-wider text-engineering-700 bg-engineering-50 px-1.5 py-0.5 rounded font-semibold">
                        CORE
                      </span>
                    )}
                  </div>
                  {skill.description && (
                    <p className="text-xs text-charcoal-500 mt-1 leading-snug">
                      {skill.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Summary Metric Ribbon */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-charcoal-200 text-center">
            <span className="block text-2xl font-bold font-mono text-charcoal-900">4</span>
            <span className="text-[11px] font-mono text-charcoal-500 uppercase">Languages</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-charcoal-200 text-center">
            <span className="block text-2xl font-bold font-mono text-charcoal-900">9</span>
            <span className="text-[11px] font-mono text-charcoal-500 uppercase">Embedded & IoT Techs</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-charcoal-200 text-center">
            <span className="block text-2xl font-bold font-mono text-charcoal-900">5</span>
            <span className="text-[11px] font-mono text-charcoal-500 uppercase">Simulations & EDA</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-charcoal-200 text-center">
            <span className="block text-2xl font-bold font-mono text-charcoal-900">6</span>
            <span className="text-[11px] font-mono text-charcoal-500 uppercase">Tooling Suites</span>
          </div>
        </div>

      </div>
    </section>
  );
};
