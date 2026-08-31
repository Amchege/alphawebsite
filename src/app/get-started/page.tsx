import { Metadata } from 'next';
import { GetStartedClient } from './GetStartedClient';

export const metadata: Metadata = {
  title: 'Start Your Project',
  description:
    'Tell us about your business challenge. We build custom software systems that automate operations and solve real problems.',
  openGraph: {
    title: 'Start Your Project',
    description:
      'Tell us about your business challenge. We build custom software systems that automate operations.',
    type: 'website',
    url: 'https://alphatecdesigns.co.ke/get-started',
  },
  alternates: {
    canonical: 'https://alphatecdesigns.co.ke/get-started',
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
