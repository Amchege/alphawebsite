import { Metadata } from 'next';
import { GetStartedClient } from './GetStartedClient';

export const metadata: Metadata = {
  title: 'Start Your Project | Alpha Tec Solutions',
  description:
    'Tell us about your business challenge. We build custom software systems that automate operations and solve real problems.',
  openGraph: {
    title: 'Start Your Project | Alpha Tec Solutions',
    description:
      'Tell us about your business challenge. We build custom software systems that automate operations.',
    type: 'website',
    url: 'https://alphatecsolutions.com/get-started',
  },
  alternates: {
    canonical: 'https://alphatecsolutions.com/get-started',
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}