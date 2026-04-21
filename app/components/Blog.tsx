'use client';

import Image from 'next/image';

const posts = [
  { id: 1, title: 'The Rise of Digital Fashion', image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600', featured: true },
  { id: 2, title: 'Minimalism Meets Bold', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, title: 'Sustainable Fashion', image: 'https://images.pexels.com/photos/2962173/pexels-photo-2962173.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, title: 'Spring Styling Tips', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, title: 'Color Trends 2024', image: 'https://images.pexels.com/photos/2130268/pexels-photo-2130268.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, title: 'Fashion Forward', image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-stone-900 mb-2">A LOOK AT FASHION</h2>
          <p className="text-stone-600 text-lg">TURN TOWARDS</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Featured Post - Large Left */}
          <div className="md:col-span-2 relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover filter grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Small Posts Stack */}
          <div className="space-y-4">
            {posts.slice(1, 3).map((post) => (
              <div key={post.id} className="relative h-28 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - 3 Small Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.slice(3).map((post) => (
            <div key={post.id} className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
