'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Insight, Category } from '@/lib/insights/types';
import {
  generateTableOfContents,
  formatDate,
  trackEvent,
} from '@/lib/insights/utils';
import { MonospaceLabel } from '@/components/insights/MonospaceLabel';
import { TechnicalGrid } from '@/components/insights/TechnicalGrid';
import { GlowingLine } from '@/components/insights/GlowingLine';
import { ReadingProgress } from '@/components/insights/ReadingProgress';
import { TableOfContents } from '@/components/insights/TableOfContents';
import { ArticleContent } from '@/components/insights/ArticleContent';
import { SocialShare } from '@/components/insights/SocialShare';
import { RelatedSolutions } from '@/components/insights/RelatedSolutions';
import { InsightCard } from '@/components/insights/InsightCard';
import { InsightCTA } from '@/components/insights/InsightCTA';
import { CoverImage } from '@/components/insights/CoverImage';
import { AuthorAvatar } from '@/components/insights/AuthorAvatar';

interface Props {
  article: Insight;
  relatedInsights: Insight[];
  category?: Category;
  breadcrumbs: { name: string; url: string }[];
}

export function ArticlePageClient({
  article,
  relatedInsights,
  category,
  breadcrumbs,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const tocItems = useMemo(
    () => generateTableOfContents(article.content),
    [article.content]
  );

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('article-content');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(
        Math.min(Math.max((scrolled / total) * 100, 0), 100)
      );
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  const articleUrl = `https://alphatecsolutions.com/insights/${article.slug}`;

  return (
    <main className="bg-slate-950 min-h-screen">
      <ReadingProgress progress={progress} />

      <header className="relative pt-32 pb-10 lg:pt-40 lg:pb-14 overflow-hidden">
        <TechnicalGrid opacity={0.015} />

        {/* Ambient glow — increased */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Decorative dots — issue #9 */}
        <div
          className="absolute bottom-[10%] right-[5%] w-36 h-36 opacity-[0.025] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[13px] text-slate-500">
              {breadcrumbs.map((crumb, i) => (
                <li
                  key={crumb.url}
                  className="flex items-center gap-2"
                >
                  {i > 0 && (
                    <span className="text-slate-700">/</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.url}
                      className="hover:text-slate-300 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-4xl">
            <MonospaceLabel className="block mb-5">
              {category?.name ||
                article.category.replace(/-/g, ' ')}
            </MonospaceLabel>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6 drop-shadow-sm">
              {article.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <AuthorAvatar
                  name={article.author.name}
                  image={article.author.image}
                />
                <div>
                  <p className="text-slate-300 font-medium text-[14px]">
                    {article.author.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[13px]">
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
                {article.updatedAt &&
                  article.updatedAt !== article.publishedAt && (
                    <>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-500">
                        Updated{' '}
                        {formatDate(article.updatedAt)}
                      </span>
                    </>
                  )}
                <span className="text-slate-700">·</span>
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        <GlowingLine
          className="absolute bottom-0 left-0 right-0"
          color="blue"
        />
      </header>

      {/* Cover image — with gradient fallback */}
      {article.coverImage && (
        <div className="container mx-auto px-6 lg:px-12 mb-14">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-slate-800/80">
             <CoverImage slug={article.slug} src={article.coverImage.src} alt={article.coverImage.alt} category={article.category} sizes="(max-width: 1200px) 100vw, 1024px" priority />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14 max-w-6xl mx-auto">
          <article id="article-content">
            <ArticleContent
              content={article.content}
              slug={article.slug}
            />

            <div className="mt-14 pt-8 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <MonospaceLabel className="mb-0 sm:mb-0">
                  SHARE THIS INSIGHT
                </MonospaceLabel>
                <SocialShare
                  url={articleUrl}
                  title={article.title}
                />
              </div>
            </div>

            {article.relatedSolutions.length > 0 && (
              <div className="mt-14">
                <RelatedSolutions
                  solutionSlugs={article.relatedSolutions}
                />
              </div>
            )}

            {article.relatedProjects.length > 0 && (
              <div className="mt-14">
                <h3 className="font-mono text-[10px] text-orange-500 uppercase tracking-[0.15em] mb-5">
                  Related Projects
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {article.relatedProjects.map((projSlug) => (
                    <Link
                      key={projSlug}
                      href={`/projects/${projSlug}?source=insight-related`}
                      className="group relative p-5 border border-slate-800/80 rounded-lg hover:border-blue-500/40 transition-all duration-500 bg-slate-900/50 hover:bg-slate-900/70"
                    >
                      <h4 className="text-white font-medium mb-1.5 group-hover:text-blue-400 transition-colors text-[15px] capitalize">
                        {projSlug.replace(/-/g, ' ')}
                      </h4>
                      <span className="text-[13px] text-orange-500 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                        View Project
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {tocItems.length > 0 && (
                <TableOfContents
                  items={tocItems}
                  activeSection={activeSection}
                />
              )}

              <div className="p-5 border border-slate-800/80 rounded-lg bg-slate-900/50">
                <h4 className="font-mono text-[10px] text-orange-500 uppercase tracking-[0.15em] mb-4">
                  Written By
                </h4>
                <div className="flex items-center gap-3 mb-3">
                  <AuthorAvatar
                    name={article.author.name}
                    image={article.author.image}
                  />
                  <div>
                    <p className="text-white font-medium text-[14px]">
                      {article.author.name}
                    </p>
                    <p className="text-[13px] text-slate-500">
                      {article.author.role}
                    </p>
                  </div>
                </div>
                {article.author.bio && (
                  <p className="text-[13px] text-slate-500 mt-3 leading-relaxed">
                    {article.author.bio}
                  </p>
                )}
                <div className="flex gap-3 mt-4">
                  {article.author.linkedin && (
                    <a
                      href={article.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-400 transition-colors"
                      aria-label={`${article.author.name} on LinkedIn`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {article.author.github && (
                    <a
                      href={article.author.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label={`${article.author.name} on GitHub`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-20 lg:py-28 bg-slate-900/20 border-t border-slate-800/50">
          <div className="container mx-auto px-6 lg:px-12">
            <MonospaceLabel className="block mb-4">
              CONTINUE READING
            </MonospaceLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Related Insights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {relatedInsights.map((a) => (
                <InsightCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <InsightCTA />
    </main>
  );
}