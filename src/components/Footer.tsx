import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal-950 text-white border-t border-charcoal-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-charcoal-900">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center font-mono font-bold text-xs text-white">
                HP
              </div>
              <span className="font-mono font-bold text-base tracking-tight text-white">
                HARISH PRANAV S
              </span>
            </div>

            <p className="text-xs text-charcoal-400 max-w-sm leading-relaxed">
              Electronics and Communication Engineering Student specializing in Embedded Systems, IoT architecture, and multidisciplinary project development.
            </p>

            <div className="flex items-center space-x-2 pt-2 text-[11px] font-mono text-charcoal-500">
              <Cpu className="w-3.5 h-3.5 text-engineering-500" />
              <span>M. Kumarasamy College of Engineering, Karur</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-bold block mb-4">
              Sections
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-bold block">
              Profiles & Direct Contact
            </span>

            <div className="flex flex-wrap gap-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-400 hover:text-white transition-colors border border-charcoal-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-400 hover:text-white transition-colors border border-charcoal-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-400 hover:text-white transition-colors border border-charcoal-800"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-400 hover:text-white transition-colors border border-charcoal-800"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] font-mono text-charcoal-500">
              harishpranavs259@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Credits & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Harish Pranav S.</span>
            <span>•</span>
            <span className="text-charcoal-400">All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-charcoal-400 hidden sm:inline">
              Built with React, TypeScript & Vite
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-300 hover:text-white transition-colors border border-charcoal-800"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-engineering-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
