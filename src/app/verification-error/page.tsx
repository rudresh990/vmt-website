export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-red-600 text-6xl mb-6">X</div>
        <h1 className="text-2xl font-bold text-red-600">Verification Failed</h1>
        <p className="mt-2">Invalid or expired link.</p>
      </div>
    </div>
  );
}
