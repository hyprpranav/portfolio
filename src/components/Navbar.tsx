import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavbarProps {
  onOpenResume: () => void;
}

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

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-charcoal-200/80 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand / Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center space-x-2.5 focus:outline-none"
              aria-label="Harish Pranav S Home"
            >
              <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-white font-mono font-bold text-xs group-hover:border-engineering-500 transition-colors">
                HP
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-charcoal-900 text-sm sm:text-base font-mono">
                  HARISH PRANAV S
                </span>
                <span className="text-[10px] text-engineering-700 font-mono tracking-wider uppercase font-semibold">
                  ECE // Embedded Systems
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-charcoal-950 font-semibold bg-charcoal-100/80'
                        : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Resume button & Mobile menu toggle */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono bg-charcoal-900 text-white hover:bg-charcoal-800 transition-all border border-charcoal-800 shadow-sm active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-engineering-400" />
                <span>Resume</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 focus:outline-none focus:ring-2 focus:ring-engineering-600"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Progress Bar */}
        <div
          className="h-[2px] bg-engineering-600 origin-left transition-all duration-75"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col justify-between p-6 z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-200">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-md bg-charcoal-900 flex items-center justify-center text-white font-mono text-xs font-bold">
                    HP
                  </div>
                  <span className="font-mono font-bold text-sm text-charcoal-900">NAVIGATION</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-charcoal-500 hover:text-charcoal-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-charcoal-100 text-charcoal-950 font-semibold'
                          : 'text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-charcoal-400" />
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-charcoal-200">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-semibold bg-charcoal-900 text-white hover:bg-charcoal-800 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-engineering-400" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
