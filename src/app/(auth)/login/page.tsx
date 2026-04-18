'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // 🔹 Validation
  const validateEmail = (email: string) => {
    if (!emailRegex.test(email)) {
      return 'Enter a valid email';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password || password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };

  // 🔹 Handle input
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // 🔹 Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === 'email_not_verified') {
          router.push(`/verify-email?email=${encodeURIComponent(form.email)}`);
          return;
        }
      }

      if (res.ok) {
        // redirect based on roles
        console.log(data);
        if (data.role === 'SUPERADMIN') {
          router.push('/admin');
          return;
        }
        router.push('/dashboard');
      } else {
        alert(data.error || 'Invalid credentials');
      }
    } catch (err) {
      alert('Something went wrong');
      console.error(err);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="contact-form w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center uppercase">Login</h2>

        {/* Email */}
        <label>
          Email
          <input
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => setErrors({ ...errors, email: validateEmail(form.email) })}
            required
          />
        </label>
        {errors.email && <p className="form-error">{errors.email}</p>}

        {/* Password */}
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            onBlur={() => setErrors({ ...errors, password: validatePassword(form.password) })}
            required
          />
        </label>
        {errors.password && <p className="form-error">{errors.password}</p>}

        {/* Honeypot (anti-bot) */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <button type="submit" className="btn btn-primary mt-4 w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
