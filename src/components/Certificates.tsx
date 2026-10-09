import React, { useState } from 'react';
import { Award, Calendar, X, Eye } from 'lucide-react';
import { certificatesData, certificateCategories, Certificate, CertificateCategory } from '../data/certificates';
import { SafeImage } from './SafeImage';

export const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory | 'All'>('All');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = certificatesData.filter((c) => {
    if (activeCategory === 'All') return true;
    return c.category === activeCategory;
  });

  return (
    <section id="certificates" className="py-20 bg-white border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              07 // CREDENTIALS & RECOGNITION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Certifications & Training
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-charcoal-500 max-w-sm">
            Structured records of completed hackathons, technical bootcamps, and collegiate workshops.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              activeCategory === 'All'
                ? 'bg-charcoal-900 text-white border-charcoal-900 font-semibold shadow-xs'
                : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-charcoal-300'
            }`}
          >
            All Certifications ({certificatesData.length})
          </button>

          {certificateCategories.map((cat) => {
            const count = certificatesData.filter((c) => c.category === cat).length;
            if (count === 0) return null;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  activeCategory === cat
                    ? 'bg-charcoal-900 text-white border-charcoal-900 font-semibold shadow-xs'
                    : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-charcoal-300'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl border border-charcoal-200 hover:border-engineering-500/70 hover:shadow-md transition-all duration-200 bg-white overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Banner */}
              <div className="relative aspect-4/3 w-full bg-charcoal-50 border-b border-charcoal-100 overflow-hidden">
                <SafeImage
                  src={cert.imagePath}
                  alt={cert.title}
                  aspectRatioClass="aspect-4/3"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  fallback={
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center select-none">
                      <div className="w-12 h-12 rounded-xl bg-engineering-50 border border-engineering-200 flex items-center justify-center mb-2">
                        <Award className="w-6 h-6 text-engineering-600" />
                      </div>
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase tracking-wider">
                        CERTIFICATE // {cert.category.toUpperCase()}
                      </span>
                      <p className="text-xs font-mono text-charcoal-600 font-semibold mt-1 max-w-[200px] truncate">
                        {cert.issuer}
                      </p>
                    </div>
                  }
                />

                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/95 text-charcoal-800 shadow-xs border border-charcoal-200">
                    {cert.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 rounded bg-charcoal-900/90 text-white text-[11px] font-mono flex items-center space-x-1 backdrop-blur-xs">
                    <Eye className="w-3 h-3" />
                    <span>Enlarge</span>
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-400 mb-1">
                    <span>{cert.issuer}</span>
                    {cert.year && (
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.year}</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold font-mono text-charcoal-900 group-hover:text-engineering-700 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-charcoal-100 text-[11px] font-mono text-engineering-700 font-semibold flex items-center justify-between">
                  <span>PREVIEW CREDENTIAL</span>
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullsize Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />
          <div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 z-10 border border-charcoal-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-charcoal-100 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-engineering-700 font-semibold">
                  {selectedCert.category}
                </span>
                <h3 className="font-mono font-bold text-charcoal-900 text-lg">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-charcoal-500 font-mono">
                  {selectedCert.issuer} {selectedCert.year ? `• ${selectedCert.year}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-md text-charcoal-400 hover:text-charcoal-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-charcoal-200 aspect-4/3 bg-charcoal-50 max-h-[500px]">
              <SafeImage
                src={selectedCert.imagePath}
                alt={selectedCert.title}
                aspectRatioClass="aspect-4/3"
                className="w-full h-full object-contain"
                fallback={
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center">
                    <Award className="w-14 h-14 text-engineering-600 mb-3" />
                    <h4 className="font-mono font-bold text-base text-charcoal-900">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs text-charcoal-500 mt-2 max-w-sm">
                      {selectedCert.description}
                    </p>
                    <p className="text-[11px] font-mono text-charcoal-400 mt-4 bg-charcoal-100 px-3 py-1 rounded">
                      Place document asset in: {selectedCert.imagePath}
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
