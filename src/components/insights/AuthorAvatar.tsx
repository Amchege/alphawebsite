'use client';

import React, { useState } from 'react';

interface AuthorAvatarProps {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AuthorAvatar({ name, image, size = 'md' }: AuthorAvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const sizes = {
    sm: 'w-8 h-8 text-[11px]',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
  };

  // Skip Image component entirely for local paths — go straight to initials fallback
  const isLocalPath = image && image.startsWith('/');

  if (!image || isLocalPath) {
    return (
      <div
        className={`${sizes[size]} rounded-full bg-blue-950 border border-blue-500/30 flex items-center justify-center shrink-0`}
      >
        <span className="text-blue-400 font-semibold">{initials}</span>
      </div>
    );
  }

  const imgSizes = { sm: 32, md: 40, lg: 56 };

  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden bg-slate-800 border border-slate-700 shrink-0`}
    >
      <img
        src={image}
        alt={name}
        width={imgSizes[size]}
        height={imgSizes[size]}
        className="object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
}