'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MonospaceLabel } from '@/components/insights/MonospaceLabel';
import { TechnicalGrid } from '@/components/insights/TechnicalGrid';
import { WorldMapDots, CONTINENT_LABELS } from './WorldMapDots';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    start = Date.now();
    requestAnimationFrame(step);
  }, [target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export function GetStartedClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <TechnicalGrid opacity={0.015} />
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-[15%] w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-[13px] text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-300 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">Start a Project</li>
            </ol>
          </nav>
          <MonospaceLabel className="block mb-5">START A PROJECT</MonospaceLabel>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6 max-w-3xl">
            Tell Us About Your
            <br />
            <span className="text-orange-500">Business Challenge</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            We build custom software systems that automate operations, connect
            workflows and solve real problems. Share what you&apos;re working on
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Map Background */}
      <section className="relative pb-8 lg:pb-12">
        {/* Map as full background */}
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.18]">
            <WorldMapDots />
          </div>
          {/* Continent labels — bottom right */}
          <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-12 hidden md:flex flex-col items-end gap-2">
            {CONTINENT_LABELS.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: c.color, opacity: 0.5 }}
                />
                <span
                  className="font-mono text-[8px] tracking-[0.1em] uppercase"
                  style={{ color: c.color, opacity: 0.4 }}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form on top */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-slate-950/20 backdrop-blur-md rounded-2xl border border-slate-700/20 p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-16 lg:py-20">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center">
                  <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Project Submitted
                </h2>
                <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
                  Thanks for reaching out. We&apos;ll review your project
                  details and get back to you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors duration-200"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-2.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-800 text-white rounded focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-colors placeholder:text-slate-600"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-2.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-800 text-white rounded focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-colors placeholder:text-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-2.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-800 text-white rounded focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-colors placeholder:text-slate-600"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-2.5">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-800 text-white rounded focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-colors appearance-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="business-automation">Business Process Automation</option>
                    <option value="management-system">Management System</option>
                    <option value="web-application">Web Application</option>
                    <option value="api-integration">API / System Integration</option>
                    <option value="reporting-dashboard">Reporting & Dashboards</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-2.5">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-800 text-white rounded focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-colors placeholder:text-slate-600 resize-y"
                    placeholder="Describe the problem you're trying to solve, the current process, and what success looks like..."
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium text-[15px] rounded transition-colors duration-200"
                  >
                    Submit Project
                  </button>
                </div>
                <p className="text-slate-600 text-sm pt-2">
                  We&apos;ll respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative pb-24 lg:pb-32 border-t border-slate-800/40">
        <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animation: `mapFadeIn 0.8s ease-out ${i * 0.15}s both` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-mono text-[9px] text-slate-500 uppercase tracking-[0.15em] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}