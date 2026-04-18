'use client';
import { useAuth } from '../lib/client/useAuth';
export default function Dashboard() {
  const { loading } = useAuth();

  if (loading) {
    return <p className="text-center mt-15">Checking auth...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
}
