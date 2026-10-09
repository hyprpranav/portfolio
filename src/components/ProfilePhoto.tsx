import React, { useState } from 'react';
import { encodeAssetPath } from '../utils/assetPaths';
import { Cpu, Terminal, ShieldCheck } from 'lucide-react';

interface ProfilePhotoProps {
  imagePath?: string;
  className?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  imagePath = 'images/My Essentials/profile.jpg',
  className = ''
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const encodedSrc = encodeAssetPath(imagePath);

  const renderMonogramPlaceholder = () => (
    <div className="w-full h-full bg-[#f8fafc] border-2 border-charcoal-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden select-none shadow-sm hover:border-engineering-500/50 transition-colors duration-300">
      {/* Background technical grid and subtle circuit paths */}
      <div className="absolute inset-0 bg-tech-grid-pattern opacity-70" />
      
      {/* Top technical telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-charcoal-200/80 pb-3">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-engineering-500 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-semibold">
            SYS_ENG // ID: HP-2028
          </span>
        </div>
        <div className="flex items-center space-x-1 text-charcoal-400">
          <Cpu className="w-3.5 h-3.5" />
          <span className="text-[10px] font-mono">ECE</span>
        </div>
      </div>

      {/* Monogram emblem */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 border-2 border-charcoal-700 flex items-center justify-center shadow-lg relative group">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
              HP
            </span>
            <div className="absolute -bottom-2 -right-2 bg-engineering-600 text-white p-1 rounded-md border border-white">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>
          {/* Subtle circuit nodes */}
          <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full border border-engineering-500 bg-white" />
          <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full border-charcoal-400 border bg-white" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-charcoal-900 tracking-tight">
          Harish Pranav S
        </h3>
        <p className="text-xs font-mono text-engineering-700 font-medium mt-1">
          Electronics & Embedded Systems
        </p>
        <p className="text-[11px] text-charcoal-500 mt-2 max-w-[220px]">
          M. Kumarasamy College of Engineering, Karur
        </p>
      </div>

      {/* Bottom status badge */}
      <div className="relative z-10 pt-3 border-t border-charcoal-200/80 flex items-center justify-between text-[10px] font-mono text-charcoal-400">
        <span className="flex items-center space-x-1">
          <Terminal className="w-3 h-3 text-engineering-600" />
          <span>KARUR 10.96°N 78.07°E</span>
        </span>
        <span className="text-charcoal-500">MKCE // ECE</span>
      </div>
    </div>
  );

  return (
    <div className={`relative aspect-square max-w-sm mx-auto sm:max-w-md w-full ${className}`}>
      {/* Real image if available */}
      {!hasError && (
        <img
          src={encodedSrc}
          alt="Harish Pranav S"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover rounded-2xl border-2 border-charcoal-200 shadow-md transition-opacity duration-300 ${
            isLoaded ? 'opacity-100 relative z-20' : 'opacity-0 absolute inset-0'
          }`}
        />
      )}

      {/* High-quality Monogram Placeholder while image is missing or loading */}
      {(!isLoaded || hasError) && (
        <div className="w-full h-full">
          {renderMonogramPlaceholder()}
        </div>
      )}
    </div>
  );
};
