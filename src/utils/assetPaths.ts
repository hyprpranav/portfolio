/**
 * Utility functions for resolving and encoding static asset paths.
 * Ensures consistent handling of paths with spaces (e.g., "My Essentials")
 * and works across development and production on Vercel.
 */

export function encodeAssetPath(path: string): string {
  if (!path) return '';
  
  // Clean up any double slashes or backslashes
  const normalized = path.replace(/\\/g, '/');
  
  // Split by '/' so we only encode segments, preserving directory slashes
  const segments = normalized.split('/');
  const encodedSegments = segments.map((seg) => {
    // If segment already starts with drive letter or protocol, keep it
    if (seg.includes(':')) return seg;
    return encodeURIComponent(seg);
  });

  const encoded = encodedSegments.join('/');
  return encoded.startsWith('/') ? encoded : `/${encoded}`;
}

export const ASSET_FOLDERS = {
  ESSENTIALS: '/images/My Essentials',
  PROJECTS: '/images/My Projects',
  CERTIFICATES: '/images/My Certificates',
  ACHIEVEMENTS: '/images/My Achievements',
  EVENTS: '/images/My Events',
} as const;

export const DEFAULT_PROFILE_IMAGE = `${ASSET_FOLDERS.ESSENTIALS}/profile.jpg`;
export const RESUME_PATH = '/resume.pdf';
