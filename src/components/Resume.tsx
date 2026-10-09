import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye, ExternalLink, X, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ResumeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ isOpen, onClose }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  const isModalActive = isOpen !== undefined ? isOpen : modalOpen;
  const handleClose = onClose || (() => setModalOpen(false));

  useEffect(() => {
    // Check if resume.pdf is available
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        // If file exists and is not html fallback (Vite SPA)
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && !contentType.includes('text/html')) {
          setPdfAvailable(true);
        } else {
          setPdfAvailable(false);
        }
      })
      .catch(() => setPdfAvailable(false));
  }, []);

  return (
    <>
      {/* On-Page Resume Section */}
      <section id="resume" className="py-20 bg-[#fafbfc] border-b border-charcoal-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-charcoal-200 p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
            {/* Background Blueprint Grid Accent */}
            <div className="absolute inset-0 bg-tech-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-charcoal-900 text-white shadow-sm">
                <FileText className="w-8 h-8 text-engineering-400" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block">
                  CURRICULUM VITAE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
                  Resume
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed pt-1">
                  Explore my academic background, technical skills, engineering projects, and achievements.
                </p>
              </div>

              {/* Verified Competency Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left py-4">
                <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200 text-xs font-mono">
                  <span className="text-charcoal-400 block text-[10px]">PROGRAM</span>
                  <span className="font-semibold text-charcoal-900">B.E. ECE (2024–28)</span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200 text-xs font-mono">
                  <span className="text-charcoal-400 block text-[10px]">FOCUS</span>
                  <span className="font-semibold text-charcoal-900">Embedded & IoT</span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200 text-xs font-mono col-span-2 sm:col-span-1">
                  <span className="text-charcoal-400 block text-[10px]">VERIFIED CGPA</span>
                  <span className="font-semibold text-charcoal-900">7.67 / 10</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-charcoal-900 text-white hover:bg-charcoal-800 transition-all font-mono text-xs font-semibold shadow-sm active:scale-95"
                >
                  <Eye className="w-4 h-4 text-engineering-400" />
                  <span>Preview Resume</span>
                </button>

                {pdfAvailable ? (
                  <a
                    href="/resume.pdf"
                    download="Harish_Pranav_S_Resume.pdf"
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-charcoal-900 border border-charcoal-300 hover:bg-charcoal-50 transition-all font-mono text-xs font-semibold shadow-sm active:scale-95"
                  >
                    <Download className="w-4 h-4 text-engineering-600" />
                    <span>Download Resume PDF</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-charcoal-100 text-charcoal-500 border border-charcoal-200 cursor-pointer font-mono text-xs font-semibold"
                    title="PDF file pending placement in public/resume.pdf"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume (PDF Pending)</span>
                  </button>
                )}
              </div>

              {!pdfAvailable && (
                <p className="text-[11px] font-mono text-charcoal-400 pt-2">
                  Notice: Place the resume document in <code className="text-charcoal-600 bg-charcoal-100 px-1 py-0.5 rounded">public/resume.pdf</code> to activate direct PDF downloads.
                </p>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Accessible Resume Modal Viewer */}
      {isModalActive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div
            className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-charcoal-200 z-10 flex flex-col overflow-hidden my-auto">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-charcoal-200 flex items-center justify-between bg-charcoal-50">
              <div className="flex items-center space-x-2.5">
                <FileText className="w-5 h-5 text-engineering-600" />
                <h3 id="resume-modal-title" className="font-mono font-bold text-charcoal-900 text-base">
                  Harish Pranav S — Resume Preview
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                {pdfAvailable && (
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-200/60 text-xs font-mono flex items-center space-x-1"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-200/60"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#fafbfc]">
              {pdfAvailable ? (
                <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-charcoal-300 shadow-inner bg-white">
                  <iframe
                    src="/resume.pdf#view=FitH"
                    title="Resume PDF Viewer"
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="max-w-xl mx-auto py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 mx-auto flex items-center justify-center">
                    <AlertCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-mono text-charcoal-900">
                      Resume PDF Pending Manual Placement
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      As per project specifications, no fake resume is generated. The portfolio is pre-configured to display the owner's authentic document as soon as it is placed in the designated directory:
                    </p>
                    <div className="p-3 rounded-lg bg-charcoal-100 border border-charcoal-200 font-mono text-xs text-charcoal-800 break-all select-all">
                      public/resume.pdf
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-charcoal-200 text-left space-y-3 text-xs">
                    <span className="font-mono font-bold text-charcoal-900 uppercase block">
                      Quick Verification Checklist:
                    </span>
                    <div className="space-y-1.5 text-charcoal-600 font-mono text-[11px]">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-engineering-600" />
                        <span>Place your official resume named <code>resume.pdf</code> into <code>public/</code></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-engineering-600" />
                        <span>Instant preview and one-click downloads activate automatically</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-engineering-600" />
                        <span>Works seamlessly on local dev server and Vercel production</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-charcoal-200 bg-white flex items-center justify-between">
              <span className="text-xs font-mono text-charcoal-500">
                HARISH PRANAV S // CURRICULUM VITAE
              </span>
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-1.5 rounded-lg bg-charcoal-900 text-white font-mono text-xs font-semibold hover:bg-charcoal-800 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
