'use client';

import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
              LIVE BOLDLY,<br />DRESS <span className="text-stone-400">BRAVELY</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-md">
              Discover our exclusive collection that celebrates individuality and bold self-expression.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Shop Collection
            </button>
          </div>

          {/* Right */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fashion"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            {/* Play Button */}
            <button className="absolute inset-0 m-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition group-hover:scale-110">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
