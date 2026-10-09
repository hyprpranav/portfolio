import React, { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal, Sparkles } from 'lucide-react';
import { projectsData, projectCategories, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetails } from './ProjectDetails';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Featured projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  // Filtered projects for the gallery
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All Projects' || project.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              03 // ENGINEERING PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 text-charcoal-600 text-sm sm:text-base max-w-xl">
              Engineering ideas developed through electronics, embedded systems, IoT, simulation, and software.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-charcoal-500">
            SHOWCASING {projectsData.length} DOCUMENTED SYSTEMS
          </div>
        </div>

        {/* 1. Featured Projects Horizontal Slider */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-engineering-600" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-charcoal-900">
                Featured Engineering Prototypes
              </h3>
            </div>
            
            {/* Slider navigation buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                className="p-2 rounded-lg border border-charcoal-200 hover:bg-charcoal-100 text-charcoal-600 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                className="p-2 rounded-lg border border-charcoal-200 hover:bg-charcoal-100 text-charcoal-600 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slider track */}
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
            tabIndex={0}
            role="region"
            aria-label="Featured projects carousel"
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="w-[300px] sm:w-[380px] md:w-[440px] flex-shrink-0 snap-start"
              >
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                  featured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Comprehensive Searchable & Filterable Gallery */}
        <div className="pt-8 border-t border-charcoal-200">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-engineering-600" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-charcoal-900">
                All Engineering Projects Gallery
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search projects or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-charcoal-50 border border-charcoal-200 text-charcoal-900 placeholder:text-charcoal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-engineering-600"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Project category filters">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                    isActive
                      ? 'bg-charcoal-900 text-white border-charcoal-900 font-semibold shadow-xs'
                      : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-charcoal-300 hover:bg-charcoal-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-charcoal-50 rounded-2xl border border-dashed border-charcoal-200">
              <p className="text-sm font-mono text-charcoal-600">
                No projects matched your search query or filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Projects');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-mono text-engineering-700 underline underline-offset-4"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  featured={false}
                />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
