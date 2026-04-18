'use client';

import { useState } from 'react';

type ContactFormProps = {
  estimateContext?: Record<string, string> | null;
};

export default function ContactForm({ estimateContext }: ContactFormProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validatePhone = (value: string) => {
    if (!phoneRegex.test(value)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (value: string) => {
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);

    setIsSubmitting(true);

    if (!isPhoneValid || !isEmailValid) {
      e.preventDefault();
    }
  };

  return (
    <form action="/api/contact" method="post" className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required placeholder="Full name" />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)}
        />
      </label>

      {emailError && <p className="form-error">{emailError}</p>}

      <label>
        Mobile Number
        <input
          type="tel"
          name="phone"
          required
          placeholder="10-digit mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          onBlur={() => validatePhone(phone)}
          maxLength={10}
        />
      </label>

      {phoneError && <p className="form-error">{phoneError}</p>}

      <label>
        Message
        <textarea name="message" rows={4} placeholder="Tell us about your goals or questions" />
      </label>

      {/* HP */}
      <label className="absolute top-auto w-px h-px overflow-hidden pointer-events-none">
        Company
        <input type="text" maxLength={50} name="company" tabIndex={-1} autoComplete="off" />
      </label>

      {estimateContext &&
        Object.entries(estimateContext).map(([key, value]) => (
          <input type="hidden" key={key} name={key} value={value ?? ''} />
        ))}

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        Send message
      </button>
    </form>
  );
}
