'use client';

import { useState } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Basic Black', price: '$120', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Gem Happy Clouds', price: '$250', image: 'https://images.pexels.com/photos/3787517/pexels-photo-3787517.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Viz Reverie Glamor', price: '$180', image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Statement Vibe', price: '$220', image: 'https://images.pexels.com/photos/2130268/pexels-photo-2130268.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Cosmic Cobalt', price: '$200', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Iconic Casualty', price: '$160', image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'Premium Select', price: '$190', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Luxury Essence', price: '$280', image: 'https://images.pexels.com/photos/2962173/pexels-photo-2962173.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-900 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-2">OUR COLLECTION</h2>
          <p className="text-green-100 text-lg">FOR YOU</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          {['New Arrival', 'Best Sellers', 'Sale'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                activeTab === tab.toLowerCase()
                  ? 'bg-orange-500 text-white'
                  : 'bg-green-800 text-green-100 hover:bg-green-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative h-56 bg-stone-300 rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-xl transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-white font-semibold mb-1">{product.name}</h3>
              <p className="text-green-200 text-sm">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
