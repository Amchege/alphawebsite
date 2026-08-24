'use client';

import React from 'react';
import { TechnicalGrid } from './TechnicalGrid';

function FlowNode({
  label,
  shortLabel,
  color,
  size = 'md',
  pulse = false,
}: {
  label: string;
  shortLabel: string;
  color: 'blue' | 'orange' | 'green';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
}) {
  const sizes = { sm: 'w-[72px] h-[72px]', md: 'w-20 h-20', lg: 'w-28 h-28' };
  const borderColors = {
    blue: 'border-blue-500/40 hover:border-blue-500/80',
    orange: 'border-orange-500/40 hover:border-orange-500/80',
    green: 'border-green-500/40 hover:border-green-500/80',
  };
  const bgColors = {
    blue: 'bg-blue-950/50',
    orange: 'bg-orange-950/40',
    green: 'bg-green-950/40',
  };
  const textColors = {
    blue: 'text-blue-300',
    orange: 'text-orange-300',
    green: 'text-green-300',
  };
  const labelColors = {
    blue: 'text-blue-400/70',
    orange: 'text-orange-400/70',
    green: 'text-green-400/70',
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`group relative ${sizes[size]} rounded-lg border ${borderColors[color]} ${bgColors[color]} flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${
          pulse ? 'animate-pulse' : ''
        }`}
        style={
          pulse
            ? {
                animation: 'pulseGlow 3s ease-in-out infinite',
              }
            : undefined
        }
      >
        <span
          className={`font-mono text-xs font-medium ${textColors[color]} ${
            size === 'lg' ? 'text-sm' : ''
          }`}
        >
          {shortLabel}
        </span>
        {/* Inner glow on hover */}
        <div
          className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            color === 'blue'
              ? 'shadow-[inset_0_0_24px_rgba(59,130,246,0.12)]'
              : color === 'orange'
              ? 'shadow-[inset_0_0_24px_rgba(249,115,22,0.12)]'
              : 'shadow-[inset_0_0_24px_rgba(34,197,94,0.12)]'
          }`}
        />
      </div>
      <span
        className={`mt-3 font-mono text-[10px] tracking-[0.15em] ${labelColors[color]} whitespace-nowrap`}
      >
        {label}
      </span>
    </div>
  );
}

function Connector({
  color,
}: {
  color:
    | 'blue'
    | 'orange'
    | 'green'
    | 'mixed-blue-orange'
    | 'mixed-blue-green'
    | 'mixed-orange-blue'
    | 'mixed-orange-green';
}) {
  const gradients: Record<string, string> = {
    blue: 'from-blue-500/50 to-blue-500/50',
    orange: 'from-orange-500/50 to-orange-500/50',
    green: 'from-green-500/50 to-green-500/50',
    'mixed-blue-orange': 'from-blue-500/50 to-orange-500/50',
    'mixed-blue-green': 'from-blue-500/50 to-green-500/50',
    'mixed-orange-blue': 'from-orange-500/50 to-blue-500/50',
    'mixed-orange-green': 'from-orange-500/50 to-green-500/50',
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-px h-8 bg-gradient-to-b ${gradients[color]}`}
      />
      <div
        className={`w-2 h-2 border-t border-r rotate-45 -mt-5 ${
          color.includes('orange')
            ? 'border-orange-500/50'
            : color.includes('green')
            ? 'border-green-500/50'
            : 'border-blue-500/50'
        }`}
      />
    </div>
  );
}

export function KnowledgeFlowVisual() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* Inline keyframes — no dependency on tailwind config */}
      <style>{`
        @keyframes flowFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLineMove {
          0%, 100% { top: 8%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          50% { top: 88%; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(249,115,22,0.06); }
          50% { box-shadow: 0 0 48px rgba(249,115,22,0.18), 0 0 12px rgba(249,115,22,0.1); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>

      <TechnicalGrid opacity={0.025} />

      {/* Ambient glow spots — increased from /5 to /18 */}
      <div className="absolute top-[15%] left-[30%] w-36 h-36 bg-blue-500/18 rounded-full blur-3xl" />
      <div className="absolute top-[45%] right-[15%] w-44 h-44 bg-orange-500/18 rounded-full blur-3xl" />
      <div className="absolute bottom-[8%] left-[38%] w-40 h-40 bg-green-500/18 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div style={{ animation: 'flowFadeIn 0.6s ease-out 0.2s both' }}>
          <FlowNode label="QUESTION" shortLabel="Q" color="blue" size="sm" />
        </div>
        <div style={{ animation: 'flowFadeIn 0.4s ease-out 0.5s both' }}>
          <Connector color="mixed-blue-orange" />
        </div>
        <div style={{ animation: 'flowFadeIn 0.6s ease-out 0.7s both' }}>
          <FlowNode
            label="KNOWLEDGE"
            shortLabel="KNOW"
            color="orange"
            size="lg"
            pulse
          />
        </div>
        <div style={{ animation: 'flowFadeIn 0.4s ease-out 1.0s both' }}>
          <Connector color="mixed-orange-blue" />
        </div>
        <div style={{ animation: 'flowFadeIn 0.6s ease-out 1.2s both' }}>
          <FlowNode label="DECISION" shortLabel="DEC" color="blue" size="sm" />
        </div>
        <div style={{ animation: 'flowFadeIn 0.4s ease-out 1.5s both' }}>
          <Connector color="mixed-blue-green" />
        </div>
        <div style={{ animation: 'flowFadeIn 0.6s ease-out 1.7s both' }}>
          <FlowNode label="SOFTWARE" shortLabel="SW" color="green" size="lg" />
        </div>
      </div>

      {/* Floating data points — larger, brighter, floating animation */}
      <div
        className="absolute top-12 right-16 w-2 h-2 bg-orange-500/70 rounded-full"
        style={{ animation: 'floatParticle 3s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-24 left-12 w-1.5 h-1.5 bg-blue-500/60 rounded-full"
        style={{ animation: 'floatParticle 3.5s ease-in-out 1.2s infinite' }}
      />
      <div
        className="absolute top-1/3 left-24 w-2 h-2 bg-blue-500/50 rounded-full"
        style={{ animation: 'floatParticle 4s ease-in-out 0.8s infinite' }}
      />
      <div
        className="absolute bottom-1/3 right-24 w-2.5 h-2.5 bg-green-500/60 rounded-full"
        style={{ animation: 'floatParticle 3.2s ease-in-out 0.6s infinite' }}
      />
      <div
        className="absolute top-[20%] right-[30%] w-1.5 h-1.5 bg-orange-400/60 rounded-full"
        style={{ animation: 'floatParticle 4.5s ease-in-out 1.8s infinite' }}
      />
      <div
        className="absolute bottom-[25%] left-[28%] w-2 h-2 bg-green-400/50 rounded-full"
        style={{ animation: 'floatParticle 3.8s ease-in-out 2.2s infinite' }}
      />
      <div
        className="absolute top-[60%] right-[8%] w-1.5 h-1.5 bg-blue-400/40 rounded-full"
        style={{ animation: 'floatParticle 5s ease-in-out 0.4s infinite' }}
      />

      {/* Horizontal scan line — working keyframe */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
        style={{ animation: 'scanLineMove 8s ease-in-out infinite' }}
      />
    </div>
  );
}