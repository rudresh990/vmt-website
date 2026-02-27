import Link from 'next/link';
export const metadata = {
  title: 'Message Sent Successfully | Void Matrix Technology',
  description:
    'Your message has been successfully sent to Void Matrix Technology. Our team will contact you shortly.',
};

export default function success() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from green-50 to white px-6">
      <div className="p-10 max-w-xl text-center">
        <div className="text-green-600 text-6xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Message Sent Successfully</h1>
        <p className="mb-8">
          Thank you for contacting Void Matrix Technology.
          <br />
          Our team will review your message and respond within 24 hours.
        </p>
        <div className="mb-4">
          <p className="mb-2">
            Follow us on LinkedIn for technology insights, product updates, and structured
            engineering case studies.
          </p>
          <a
            href="https://www.linkedin.com/company/void-matrix-technology"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-7 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
    2.761 2.239 5 5 5h14c2.761 0 5-2.239 
    5-5v-14c0-2.761-2.239-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.268c-.966 
    0-1.75-.784-1.75-1.75s.784-1.75 
    1.75-1.75 1.75.784 1.75 1.75-.784 
    1.75-1.75 1.75zm13.5 
    11.268h-3v-5.604c0-1.337-.027-3.06-1.865-3.06-1.867 
    0-2.154 1.459-2.154 2.967v5.697h-3v-10h2.881v1.367h.041c.401-.76 
    1.381-1.56 2.842-1.56 3.039 0 3.6 2 
    3.6 4.59v5.603z"
              />
            </svg>
            Visit Our LinkedIn
          </a>
        </div>
        <Link href="/" className="inline-block text-[(--text-body)]">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
