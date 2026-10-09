import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Globe, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactMethods = [
    {
      label: 'Email',
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      icon: <Mail className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'Send Email',
      canCopy: true,
    },
    {
      label: 'Phone',
      value: profileData.contact.phone,
      href: `tel:${profileData.contact.phone}`,
      icon: <Phone className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'Call Directly',
      canCopy: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/harish-pranav-s-030756364',
      href: profileData.contact.linkedin,
      icon: <Linkedin className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'Connect',
      canCopy: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/hyprpranav',
      href: profileData.contact.github,
      icon: <Github className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'View Repositories',
      canCopy: false,
    },
    {
      label: 'Instagram',
      value: '@p_r_a_n_a_v.kvg',
      href: profileData.contact.instagram,
      icon: <Instagram className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'Follow',
      canCopy: false,
    },
    {
      label: 'Previous Portfolio',
      value: 'hyprpanav.vercel.app',
      href: profileData.contact.existingPortfolio,
      icon: <Globe className="w-5 h-5 text-engineering-600" />,
      actionLabel: 'Visit Site',
      canCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white border-b border-charcoal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-700 font-bold block mb-1">
              08 // DIRECT COMMUNICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-2 text-charcoal-600 text-sm sm:text-base max-w-xl">
              Open to meaningful technical collaborations, engineering projects, internships, and opportunities to learn and build.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-charcoal-500">
            LOCATION: KARUR, TAMIL NADU, INDIA
          </div>
        </div>

        {/* Contact Methods Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="p-6 rounded-2xl border border-charcoal-200 bg-[#fafbfc] hover:border-engineering-500/60 hover:bg-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-charcoal-200 flex items-center justify-center shadow-2xs">
                    {method.icon}
                  </div>
                  <span className="text-[11px] font-mono text-charcoal-400 uppercase font-semibold">
                    {method.label}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-sm text-charcoal-900 break-all select-all">
                  {method.value}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-200/80 flex items-center justify-between gap-2">
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-charcoal-900 hover:text-engineering-700 transition-colors"
                >
                  <span>{method.actionLabel}</span>
                  {method.href.startsWith('http') ? (
                    <ExternalLink className="w-3.5 h-3.5 text-charcoal-400" />
                  ) : (
                    <Send className="w-3.5 h-3.5 text-charcoal-400" />
                  )}
                </a>

                {method.canCopy && (
                  <button
                    type="button"
                    onClick={() => handleCopy(method.value, method.label)}
                    className="p-1.5 rounded-lg border border-charcoal-200 text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
                    title={`Copy ${method.label}`}
                  >
                    {copiedItem === method.label ? (
                      <Check className="w-3.5 h-3.5 text-engineering-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Statement Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-charcoal-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-engineering-400 font-bold block">
              AVAILABILITY FOR INTERNSHIPS & COLLABORATION
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-mono text-white">
              Ready to engineer hardware, IoT prototypes, and software solutions.
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-300 max-w-2xl">
              Currently pursuing B.E. in Electronics & Communication Engineering at M. Kumarasamy College of Engineering (Batch 2024–2028).
            </p>
          </div>

          <a
            href={`mailto:${profileData.contact.email}?subject=Engineering%20Inquiry%20-%20Harish%20Pranav%20S`}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-engineering-600 text-white hover:bg-engineering-500 font-mono text-xs font-semibold shadow-sm transition-all flex-shrink-0 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Initiate Direct Inquiry</span>
          </a>
        </div>

      </div>
    </section>
  );
};
