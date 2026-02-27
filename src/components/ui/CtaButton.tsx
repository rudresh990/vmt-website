'use client';
import { useRouter } from 'next/navigation';
export default function CtaButton() {
  const router = useRouter();
  return (
    <div className="flex justify-center mb-[1rem]">
      <button
        className="btn btn-primary"
        onClick={() => router.push('/software-development-cost-estimator')}
      >
        Estimate Cost
      </button>
    </div>
  );
}
