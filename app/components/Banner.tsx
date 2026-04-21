'use client';

import Image from 'next/image';

export default function PromoBanner() {
  return (
    <section className="bg-green-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              ELEGANCE IN<br />EVERY <span className="text-orange-400">THREAD</span>
            </h2>
            <p className="text-lg text-green-100 max-w-md">
              Experience the perfect blend of craftsmanship and contemporary design. Our exclusive collection is now available.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elegance"
              fill
              className="object-cover"
            />
            {/* Orange Badge */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
