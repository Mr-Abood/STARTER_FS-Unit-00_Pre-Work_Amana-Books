// src/app/page.tsx
'use client';

import BookGrid from './components/BookGrid';
import Image from 'next/image';
import { books } from './data/books';

export default function HomePage() {
  // Simple cart handler for demo purposes
  const handleAddToCart = (bookId: string) => {
    console.log(`Added book ${bookId} to cart`);
    // Here you would typically dispatch to a cart state or call an API
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="relative overflow-hidden rounded-lg mb-12 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-10 flex flex-col md:flex-row items-center gap-8 text-white">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">Welcome to the Amana Bookstore!</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Your one-stop shop for the best books. Discover new worlds and adventures — curated picks and great prices.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="#books" className="inline-block bg-white bg-opacity-90 text-teal-700 font-semibold px-5 py-2 rounded-md shadow hover:bg-opacity-100 transition">Shop Now</a>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <Image
              src="/images/books.png"
              alt="Books"
              width={350}
              height={350}
              className="mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <BookGrid books={books} onAddToCart={handleAddToCart} />
    </div>
  );
}
