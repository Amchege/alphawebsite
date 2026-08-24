import Link from 'next/link';

/* ── Data ── */
const solutionLinks = [
  { label: 'Custom Software', href: '/solutions/custom-software' },
  { label: 'Cloud Infrastructure', href: '/solutions/cloud' },
  { label: 'Data & Analytics', href: '/solutions/data-analytics' },
  { label: 'AI & Automation', href: '/solutions/ai-automation' },
];

const resourceLinks = [
  { label: 'Insights & Articles', href: '/insights' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Our Process', href: '/process' },
  { label: 'Documentation', href: '/docs' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

/* ── SVG Icon components (zero dependencies) ── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

/* ── Footer Link component ── */
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center text-sm text-slate-400 transition-colors duration-200 hover:text-white"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-orange-500/60 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

/* ── Section column ── */
function FooterColumn({
  monospaceLabel,
  links,
}: {
  monospaceLabel: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
        {monospaceLabel}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN FOOTER COMPONENT
   ══════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ── Top glowing line ── */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-sm" />
      </div>

      {/* ── Dot-grid decoration (very low opacity) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Main footer content ── */}
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
         {/* ── Brand column (spans 4) ── */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-light-bg.png"
                alt="Alpha Tec Solutions"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming complex challenges into elegant, scalable software
              solutions. Engineering excellence from concept to deployment.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
                { Icon: GitHubIcon, href: '#', label: 'GitHub' },
                { Icon: TwitterIcon, href: '#', label: 'X (Twitter)' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-500 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/60 hover:text-white"
                >
                  <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  {/* Blueprint corner on hover */}
                  <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-orange-500/0 transition-all duration-300 group-hover:border-orange-500/60" />
                  <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-orange-500/0 transition-all duration-300 group-hover:border-orange-500/60" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Solutions column ── */}
          <div className="lg:col-span-2">
            <FooterColumn monospaceLabel="SOLUTIONS" links={solutionLinks} />
          </div>

          {/* ── Resources column ── */}
          <div className="lg:col-span-2">
            <FooterColumn monospaceLabel="RESOURCES" links={resourceLinks} />
          </div>

          {/* ── Company column ── */}
          <div className="lg:col-span-2">
            <FooterColumn monospaceLabel="COMPANY" links={companyLinks} />
          </div>

          {/* ── Contact column (spans 2) ── */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
              CONTACT
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                <a
                  href="mailto:info@alphatecdesigns.co.ke"
                  className="transition-colors hover:text-white"
                >
                  info@alphatecdesigns.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                <a
                  href="tel:+254723641660"
                  className="transition-colors hover:text-white"
                >
                  +254 723 641 660 / 738 641 660
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-slate-800/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Alpha Tec Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
            {/* Micro tagline */}
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-slate-600 uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500/60" />
              Built with precision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}