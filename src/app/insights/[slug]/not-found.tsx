import Link from 'next/link';
import { TechnicalGrid } from '@/components/insights/TechnicalGrid';

export default function InsightNotFound() {
  return (
    <main className="bg-slate-950 min-h-screen flex items-center justify-center relative">
      <TechnicalGrid opacity={0.015} />
      <div className="text-center px-6 relative z-10">
        <span className="font-mono text-[11px] text-orange-500 uppercase tracking-[0.2em] block mb-6">INSIGHTS / ERROR</span>
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-300 mb-4">Insight Not Found</h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">The insight you are looking for does not exist or is no longer published.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/insights" className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors">View All Insights</Link>
          <Link href="/" className="px-7 py-3 border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-white font-medium rounded transition-colors">Go Home</Link>
        </div>
      </div>
    </main>
  );
}