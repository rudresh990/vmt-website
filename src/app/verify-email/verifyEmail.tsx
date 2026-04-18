'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get('email') || '';
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isVerifiedError, setIsVerifiedError] = useState(false);

  const MAX_ATTEMPTS = 3;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Validate
  const validateEmail = (email: string) => {
    if (!emailRegex.test(email)) {
      return 'Enter a valid email';
    }
    return '';
  };

  // cooldown timer

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  //  Submit (Resend verification)
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (cooldown > 0) return;

    if (attempts >= MAX_ATTEMPTS) {
      setError('Maximum attempts reached. Try again later.');
      return;
    }

    const emailError = validateEmail(email);
    setError(emailError);

    if (emailError) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Verification email sent. Check your inbox.');
        setError('');
        setCooldown(30);
        setIsVerifiedError(false);
      } else {
        if (data.error === 'Email already verified') {
          setIsVerifiedError(true);
          setError(data.error || 'Email already verified');
        } else {
          setError(data.error || 'Something went wrong');
        }
      }

      setAttempts((prev) => prev + 1);
    } catch {
      setError('Network error');
      setAttempts((prev) => prev + 1);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="contact-form w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center uppercase">Verify Your Email</h2>

        {/* Email */}
        <label>
          Email
          <input
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setError(validateEmail(email))}
            required
          />
        </label>

        {/* Error */}
        {error && <p className="form-error">{error}</p>}

        {/* Success */}
        {message && <p className="text-green-400 mt-2">{message}</p>}

        {cooldown > 0 && (
          <p className="text-xs text-gray-400 mt-2">You can resend in {cooldown}s</p>
        )}

        {/* Attempts */}
        <p className="text-xs text-gray-400 mt-2">Attempts left: {MAX_ATTEMPTS - attempts}</p>

        {isVerifiedError ? (
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="btn btn-primary mt-4 w-full"
          >
            Go to Login
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full"
            disabled={isSubmitting || cooldown > 0}
          >
            {cooldown > 0
              ? `Wait ${cooldown}s`
              : isSubmitting
                ? 'Sending...'
                : 'Resend Verification Email'}
          </button>
        )}
      </form>
    </div>
  );
}
