'use client';

import { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5FDF9]">
      <Nav />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="text-center">
          <h1 
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#ef4444' }}
            className="mb-4"
          >
            Error
          </h1>
          <h2 
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#111827' }}
            className="mb-8"
          >
            Something went wrong!
          </h2>
          <p 
            style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3D4A41', maxWidth: '500px' }}
            className="mb-10 mx-auto"
          >
            An unexpected error occurred. Our team has been notified.
          </p>
          <button
            onClick={() => reset()}
            className="primary-button inline-block px-10 py-4"
            style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '15px' }}
          >
            Try Again
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
