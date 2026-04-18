export default function verifiedPage() {
  return (
    <div className="text-center justify-center  min-h-screen mt-25">
      <div className="text-green-600 text-6xl mb-6 inline-block">✓</div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Email Verified</h1>
        <p className="mt-2">You can now login.</p>
        <a href="/login" className="btn-primary mt-4 inline-block p-2 rounded-3xl">
          Go to Login
        </a>
      </div>
    </div>
  );
}
