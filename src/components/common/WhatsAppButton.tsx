'use client';
import { ImWhatsapp } from 'react-icons/im';

export default function WhatsAppButton() {
  const phone = '919321446746';

  const message = encodeURIComponent(
    'Hi, I want to discuss a project with VoidMatrix Technology.',
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50
      rounded-full p-4 shadow-lg
      hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:border border-green-300
    text-white
      transition-all duration-200"
    >
      <ImWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
    </a>
  );
}
