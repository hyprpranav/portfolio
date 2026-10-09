import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { Project } from '../data/projects';
import { SafeImage } from './SafeImage';
import { ProjectBlueprintVisual } from './ProjectBlueprintVisual';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featured = false,
}) => {
  const primaryImage = project.imagePaths && project.imagePaths.length > 0 ? project.imagePaths[0] : '';

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col bg-white overflow-hidden ${
        featured
          ? 'border-charcoal-200 hover:border-engineering-500/80 hover:shadow-lg'
          : 'border-charcoal-200 hover:border-charcoal-300 hover:shadow-md'
      }`}
    >
      {/* Visual Header (Photo or Blueprint) */}
      <div className={`relative w-full overflow-hidden border-b border-charcoal-200/80 bg-charcoal-50 ${
        featured ? 'aspect-16/10 sm:aspect-2/1' : 'aspect-16/9'
      }`}>
        <SafeImage
          src={primaryImage}
          alt={project.title}
          aspectRatioClass={featured ? 'aspect-16/10' : 'aspect-16/9'}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          fallback={
            <ProjectBlueprintVisual
              projectId={project.id}
              category={project.category}
              title={project.title}
            />
          }
        />

        {/* Category & Status Overlays */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/95 text-charcoal-800 shadow-xs backdrop-blur-xs border border-charcoal-200">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-charcoal-900/90 text-white backdrop-blur-xs">
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-bold font-mono text-charcoal-900 group-hover:text-engineering-700 transition-colors leading-tight ${
              featured ? 'text-lg sm:text-xl' : 'text-base'
            }`}>
              {project.title}
            </h3>
            <div className="p-1 rounded-md text-charcoal-400 group-hover:text-engineering-600 group-hover:bg-engineering-50 transition-colors flex-shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech tags footer */}
        <div className="pt-5 mt-5 border-t border-charcoal-100 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 4 : 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-700 text-[11px] font-mono"
              >
                <Cpu className="w-3 h-3 text-charcoal-400" />
                <span>{tech}</span>
              </span>
            ))}
            {project.technologies.length > (featured ? 4 : 3) && (
              <span className="px-1.5 py-0.5 rounded bg-charcoal-50 text-charcoal-400 text-[10px] font-mono">
                +{project.technologies.length - (featured ? 4 : 3)}
              </span>
            )}
          </div>

          <button
            type="button"
            className="w-full py-2 px-3 rounded-lg text-xs font-mono font-semibold text-charcoal-700 bg-charcoal-50 hover:bg-charcoal-900 hover:text-white transition-colors text-center border border-charcoal-200"
          >
            View Technical Specification
          </button>
        </div>
      </div>
    </div>
  );
};
