import React from 'react';

export interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'icon-dark' | 'icon-light';
  size?: 'sm' | 'md' | 'lg' | 'custom';
  className?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  alt = 'RKA EDITZ Official Logo',
}) => {
  // Mapping of official brand assets
  const logoSrcs = {
    'dark': '/brand/logo-editz-black-trimmed.png',
    'light': '/brand/logo-editz-white-trimmed.png',
    'icon-dark': '/brand/logo-icon-black-trimmed.png',
    'icon-light': '/brand/logo-icon-white-trimmed.png',
  };

  // Preset size dimensions preserving authentic proportions
  const sizeClasses = {
    sm: variant.startsWith('icon') ? 'h-7 w-auto' : 'h-7 w-auto',
    md: variant.startsWith('icon') ? 'h-9 w-auto' : 'h-8 sm:h-9 w-auto',
    lg: variant.startsWith('icon') ? 'h-12 w-auto' : 'h-11 sm:h-12 w-auto',
    custom: '',
  };

  const src = logoSrcs[variant] || logoSrcs['dark'];
  const appliedSize = sizeClasses[size];

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      className={`inline-block object-contain select-none transition-transform duration-200 ${appliedSize} ${className}`}
    />
  );
};

