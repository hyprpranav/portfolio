import React, { useState, useEffect } from 'react';
import { encodeAssetPath } from '../utils/assetPaths';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  fallback?: React.ReactNode;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = '',
  className = '',
  fallback,
  aspectRatioClass = 'aspect-video',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  if (!src || hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-charcoal-100 border border-charcoal-200 rounded-lg flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full border border-dashed border-charcoal-300 flex items-center justify-center mb-2 text-charcoal-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500">Asset Pending Placement</p>
        <span className="text-[11px] text-charcoal-400 font-mono mt-1 max-w-[200px] truncate">{src}</span>
      </div>
    );
  }

  const encodedSrc = encodeAssetPath(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fallback displayed behind or while loading */}
      {!isLoaded && fallback && (
        <div className="absolute inset-0 z-0">
          {fallback}
        </div>
      )}
      <img
        {...props}
        src={encodedSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
