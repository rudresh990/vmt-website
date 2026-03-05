import Calculator from '@/components/calculator/Calculator';

import type { Metadata } from 'next';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Software Development Cost Estimator for Web, SaaS & MVP Projects | Void Matrix Tech',
  description:
    'Estimate website and custom software development costs in India using Void Matrix Technology’s interactive pricing calculator.',
  path: '/software-development-cost-estimator',
});

export default function EstimatePage() {
  return <Calculator />;
}
