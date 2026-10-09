import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Cpu, Layers, HelpCircle, Lightbulb, Compass, CheckCircle } from 'lucide-react';
import { Project } from '../data/projects';
import { SafeImage } from './SafeImage';
import { ProjectBlueprintVisual } from './ProjectBlueprintVisual';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.imagePaths && project.imagePaths.length > 0 ? project.imagePaths : [];
  const currentImage = images[activeImageIndex] || '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-charcoal-200 z-10 flex flex-col overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-charcoal-200 flex items-start justify-between bg-charcoal-50/70">
          <div className="space-y-1 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase bg-engineering-50 text-engineering-800 border border-engineering-200">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-200 text-charcoal-700">
                STATUS: {project.status}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold font-mono text-charcoal-900 tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-engineering-600"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Visual Display */}
          <div className="rounded-xl overflow-hidden border border-charcoal-200 bg-charcoal-50">
            <div className="w-full aspect-16/9 sm:aspect-21/9 max-h-[360px]">
              <SafeImage
                src={currentImage}
                alt={`${project.title} diagram`}
                aspectRatioClass="aspect-16/9"
                className="w-full h-full object-cover"
                fallback={
                  <ProjectBlueprintVisual
                    projectId={project.id}
                    category={project.category}
                    title={project.title}
                  />
                }
              />
            </div>

            {/* Multiple image switcher if available */}
            {images.length > 1 && (
              <div className="p-3 bg-white border-t border-charcoal-200 flex items-center space-x-2 overflow-x-auto">
                <span className="text-[11px] font-mono text-charcoal-400 mr-2">GALLERY:</span>
                {images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
                      activeImageIndex === idx
                        ? 'bg-charcoal-900 text-white border-charcoal-900'
                        : 'bg-charcoal-50 text-charcoal-700 border-charcoal-200 hover:bg-charcoal-100'
                    }`}
                  >
                    View 0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Overview Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold">
              <Layers className="w-4 h-4 text-engineering-600" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem Statement & Proposed Solution */}
          {(project.problemStatement || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.problemStatement && (
                <div className="p-5 rounded-xl bg-charcoal-50 border border-charcoal-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-rose-700 font-bold">
                    <HelpCircle className="w-4 h-4 text-rose-600" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-xl bg-engineering-50/50 border border-engineering-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-engineering-800 font-bold">
                    <Lightbulb className="w-4 h-4 text-engineering-700" />
                    <span>Engineering Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Working Principle */}
          {project.workingPrinciple && (
            <div className="p-5 rounded-xl bg-white border border-charcoal-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold">
                <Compass className="w-4 h-4 text-engineering-600" />
                <span>Working Principle & Operation</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                {project.workingPrinciple}
              </p>
            </div>
          )}

          {/* Hardware & Software Components Breakdown */}
          {(project.hardwareComponents || project.softwareComponents) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardwareComponents && project.hardwareComponents.length > 0 && (
                <div className="p-5 rounded-xl border border-charcoal-200 bg-[#fafbfc]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold mb-3 flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-engineering-600" />
                    <span>Hardware Components</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-charcoal-600 font-mono">
                    {project.hardwareComponents.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-engineering-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.softwareComponents && project.softwareComponents.length > 0 && (
                <div className="p-5 rounded-xl border border-charcoal-200 bg-[#fafbfc]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold mb-3 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-engineering-600" />
                    <span>Software & Firmware</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-charcoal-600 font-mono">
                    {project.softwareComponents.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-engineering-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Technologies Stack Tags */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold block">
              Applied Technologies & Tooling
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-charcoal-100 text-charcoal-800 text-xs font-mono border border-charcoal-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repositories and Demos (Strictly only when confirmed, no fabricated links) */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="pt-4 border-t border-charcoal-200 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-charcoal-900 text-white text-xs font-mono hover:bg-charcoal-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-engineering-600 text-white text-xs font-mono hover:bg-engineering-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-charcoal-200 bg-charcoal-50 flex items-center justify-between text-xs font-mono text-charcoal-500">
          <span>PROJECT_ID: {project.id}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-charcoal-300 text-charcoal-800 hover:bg-charcoal-100 font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
