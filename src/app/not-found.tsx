import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl md:text-9xl font-extrabold">404</h1>
      <p className="text-lg mt-4 mb-4 text-(--text-muted) p-3">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link href="/" className="internal-link text-xl!">
        Go back home
      </Link>
    </div>
  );
}
