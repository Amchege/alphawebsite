'use client';

import React from 'react';

const CONTINENT_LABELS = [
  { name: 'North America', color: '#dc2626' },
  { name: 'Europe', color: '#3b82f6' },
  { name: 'Africa', color: '#22c55e' },
  { name: 'Asia', color: '#06b6d4' },
  { name: 'Oceania', color: '#a78bfa' },
  { name: 'Middle East', color: '#f59e0b' },
  { name: 'South America', color: '#f97316' },
];

const POINTERS = [
  { x: 26, y: 17, color: '#dc2626', name: 'New York' },
  { x: 65, y: 13, color: '#3b82f6', name: 'London' },
  { x: 82, y: 26, color: '#f59e0b', name: 'Dubai' },
  { x: 73, y: 36, color: '#22c55e', name: 'Nairobi', primary: true },
  { x: 105, y: 33, color: '#06b6d4', name: 'Singapore' },
  { x: 120, y: 48, color: '#a78bfa', name: 'Sydney' },
];

export { CONTINENT_LABELS };

export function WorldMapDots() {
  return (
    <div className="relative w-full h-full">
      <style>{`
        @keyframes mapPulse {
          0% { r: 0; opacity: 0.7; }
          100% { r: 3; opacity: 0; }
        }
        @keyframes mapPulsePrimary {
          0% { r: 0; opacity: 0.8; }
          100% { r: 4; opacity: 0; }
        }
        @keyframes mapFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <svg
        viewBox="0 0 140 58"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ animation: 'mapFadeIn 1.5s ease-out forwards' }}
      >
        <defs>
          <pattern id="landDots" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(148,163,184,0.14)" />
          </pattern>
          <pattern id="bgDots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.3" fill="rgba(148,163,184,0.03)" />
          </pattern>
        </defs>

        {/* Ocean dots */}
        <rect width="140" height="58" fill="url(#bgDots)" />

        {/* NORTH AMERICA */}
        <g fill="url(#landDots)">
          <rect x="12" y="8" width="24" height="12" rx="5" />
          <rect x="10" y="5" width="22" height="9" rx="4" />
          <rect x="6" y="8" width="8" height="7" rx="3" />
          <rect x="32" y="5" width="10" height="9" rx="3" />
          <rect x="8" y="14" width="10" height="8" rx="3" />
          <rect x="18" y="20" width="12" height="5" rx="2" />
          <rect x="22" y="23" width="8" height="5" rx="2" />
          <rect x="28" y="17" width="5" height="5" rx="2" />
          <rect x="34" y="12" width="6" height="6" rx="2" />
        </g>

        {/* SOUTH AMERICA */}
        <g fill="url(#landDots)">
          <rect x="28" y="28" width="14" height="10" rx="5" />
          <rect x="30" y="36" width="11" height="8" rx="4" />
          <rect x="31" y="42" width="9" height="8" rx="4" />
          <rect x="33" y="48" width="5" height="6" rx="3" />
          <rect x="26" y="32" width="8" height="8" rx="3" />
          <rect x="36" y="30" width="5" height="6" rx="2" />
        </g>

        {/* EUROPE */}
        <g fill="url(#landDots)">
          <rect x="60" y="8" width="14" height="10" rx="3" />
          <rect x="62" y="4" width="8" height="6" rx="2" />
          <rect x="58" y="13" width="6" height="7" rx="2" />
          <rect x="68" y="13" width="6" height="6" rx="2" />
          <rect x="60" y="7" width="4" height="5" rx="2" />
          <rect x="72" y="8" width="5" height="5" rx="2" />
        </g>

        {/* AFRICA */}
        <g fill="url(#landDots)">
          <rect x="62" y="20" width="20" height="10" rx="4" />
          <rect x="60" y="28" width="10" height="10" rx="4" />
          <rect x="76" y="30" width="8" height="10" rx="3" />
          <rect x="66" y="33" width="14" height="8" rx="3" />
          <rect x="66" y="40" width="12" height="10" rx="4" />
          <rect x="69" y="48" width="6" height="5" rx="3" />
          <rect x="62" y="38" width="8" height="6" rx="3" />
        </g>

        {/* MIDDLE EAST */}
        <g fill="url(#landDots)">
          <rect x="78" y="22" width="10" height="6" rx="2" />
          <rect x="80" y="26" width="7" height="7" rx="2" />
          <rect x="82" y="21" width="5" height="4" rx="2" />
        </g>

        {/* ASIA — Russia */}
        <g fill="url(#landDots)">
          <rect x="78" y="4" width="48" height="10" rx="4" />
          <rect x="82" y="2" width="20" height="5" rx="2" />
          <rect x="110" y="3" width="14" height="5" rx="2" />
        </g>

        {/* ASIA — Central/South */}
        <g fill="url(#landDots)">
          <rect x="86" y="14" width="22" height="6" rx="3" />
          <rect x="92" y="20" width="18" height="8" rx="3" />
          <rect x="88" y="26" width="10" height="6" rx="3" />
        </g>

        {/* ASIA — China/East */}
        <g fill="url(#landDots)">
          <rect x="102" y="12" width="18" height="12" rx="4" />
          <rect x="98" y="16" width="8" height="6" rx="2" />
          <rect x="118" y="14" width="7" height="8" rx="2" />
          <rect x="112" y="20" width="8" height="4" rx="2" />
        </g>

        {/* ASIA — India */}
        <g fill="url(#landDots)">
          <rect x="90" y="24" width="10" height="12" rx="4" />
          <rect x="88" y="28" width="5" height="6" rx="2" />
        </g>

        {/* ASIA — SE Asia / Indonesia */}
        <g fill="url(#landDots)">
          <rect x="98" y="28" width="14" height="6" rx="3" />
          <rect x="102" y="32" width="10" height="5" rx="2" />
          <rect x="106" y="35" width="12" height="3" rx="1.5" />
          <rect x="110" y="38" width="6" height="2" rx="1" />
          <rect x="98" y="34" width="4" height="3" rx="1" />
        </g>

        {/* OCEANIA — Australia */}
        <g fill="url(#landDots)">
          <rect x="110" y="42" width="20" height="12" rx="6" />
          <rect x="114" y="46" width="14" height="8" rx="4" />
          <rect x="108" y="48" width="8" height="5" rx="2" />
          <rect x="130" y="50" width="3" height="5" rx="1.5" />
          <rect x="118" y="52" width="5" height="2" rx="1" />
        </g>

        {/* Connection lines from Nairobi */}
        {POINTERS.filter((p) => !p.primary).map((p, i) => (
          <line
            key={p.name}
            x1="73"
            y1="36"
            x2={p.x}
            y2={p.y}
            stroke={p.color}
            strokeWidth="0.15"
            strokeDasharray="0.5 1"
            opacity="0.1"
            style={{ animation: `mapFadeIn 1.5s ease-out ${0.8 + i * 0.2}s both` }}
          />
        ))}

        {/* Pointer dots */}
        {POINTERS.map((p, i) => (
          <g key={p.name} className="pointer-events-none">
            <circle
              cx={p.x}
              cy={p.y}
              fill="none"
              stroke={p.color}
              strokeWidth={p.primary ? 1.2 : 0.7}
              opacity={p.primary ? 0.5 : 0.3}
              style={{
                animation: `${p.primary ? 'mapPulsePrimary' : 'mapPulse'} ${p.primary ? '2.5' : '3'}s ease-out ${i * 0.5}s infinite`,
              }}
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={p.primary ? 1.5 : 1}
              fill={p.color}
              opacity={p.primary ? 0.95 : 0.8}
            />
            {p.primary && (
              <circle
                cx={p.x}
                cy={p.y}
                r={2}
                fill="none"
                stroke={p.color}
                strokeWidth="0.3"
                opacity="0.25"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}