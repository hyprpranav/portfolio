import React, { useState } from 'react';
import { Trophy, CheckCircle, Award, Calendar, Image as ImageIcon, X } from 'lucide-react';
import { achievementsData, Achievement, AchievementType } from '../data/achievements';
import { SafeImage } from './SafeImage';

export const Achievements: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | AchievementType>('All');
  const [previewCert, setPreviewCert] = useState<Achievement | null>(null);

  const filteredAchievements = achievementsData.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const getBadgeStyle = (category: AchievementType) => {
    switch (category) {
      case 'Award':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Selection':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Participation':
        return 'bg-charcoal-100 text-charcoal-700 border-charcoal-200';
    }
  };

  const getIcon = (category: AchievementType) => {
    switch (category) {
      case 'Award':
        return <Trophy className="w-4 h-4 text-amber-600" />;
      case 'Selection':
        return <Award className="w-4 h-4 text-emerald-600" />;
      case 'Participation':
        return <CheckCircle className="w-4 h-4 text-charcoal-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-[#fafbfc] border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              04 // VERIFIED COMPETITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Hackathons & Achievements
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500 max-w-sm">
            Distinguishing prize-winning prototypes, institutional selections, and active competitive hackathons.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(['All', 'Award', 'Selection', 'Participation'] as const).map((filter) => {
            const count =
              filter === 'All'
                ? achievementsData.length
                : achievementsData.filter((a) => a.category === filter).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  selectedFilter === filter
                    ? 'bg-charcoal-900 text-white border-charcoal-900 font-semibold shadow-xs'
                    : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-charcoal-300'
                }`}
              >
                <span>{filter === 'All' ? 'All Milestones' : `${filter}s`}</span>
                <span className="ml-1.5 text-[10px] opacity-75 font-normal">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Achievements Timeline / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-charcoal-200 hover:border-charcoal-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold border ${getBadgeStyle(item.category)}`}>
                    {getIcon(item.category)}
                    <span>{item.category.toUpperCase()}</span>
                  </div>

                  {item.year && (
                    <div className="flex items-center space-x-1 text-xs font-mono text-charcoal-400">
                      <Calendar className="w-3 h-3" />
                      <span>{item.year}</span>
                    </div>
                  )}
                </div>

                {/* Title and Organization */}
                <h3 className="text-base font-bold font-mono text-charcoal-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-charcoal-500 mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Optional Certificate Preview Trigger */}
              {item.certificateImagePath && (
                <div className="mt-5 pt-4 border-t border-charcoal-100">
                  <button
                    type="button"
                    onClick={() => setPreviewCert(item)}
                    className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-charcoal-600 hover:text-engineering-700 transition-colors"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm"
            onClick={() => setPreviewCert(null)}
          />
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 z-10 border border-charcoal-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-charcoal-100 pb-3">
              <div>
                <h3 className="font-mono font-bold text-charcoal-900 text-sm">
                  {previewCert.title}
                </h3>
                <p className="text-xs text-charcoal-500 font-mono">
                  {previewCert.organization}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="p-1 rounded-md text-charcoal-400 hover:text-charcoal-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-charcoal-200 aspect-4/3 bg-charcoal-50">
              <SafeImage
                src={previewCert.certificateImagePath}
                alt={`${previewCert.title} Certificate`}
                aspectRatioClass="aspect-4/3"
                className="w-full h-full object-contain"
                fallback={
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center">
                    <Award className="w-12 h-12 text-engineering-600 mb-3" />
                    <h4 className="font-mono font-bold text-sm text-charcoal-900">Certificate Record Verified</h4>
                    <p className="text-xs text-charcoal-500 mt-1 max-w-sm">
                      File pending placement in: <br />
                      <code className="text-charcoal-700 font-mono text-[10px] bg-charcoal-100 px-1 py-0.5 rounded">
                        {previewCert.certificateImagePath}
                      </code>
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
