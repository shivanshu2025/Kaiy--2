'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: 'Lal Sweets Ecom Website', desc: 'Modern sweets store with responsive design for smooth shopping.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Kirtilals : Luxury Website', desc: 'Premium diamond-jewellery store with elegant UX for luxury buyers.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Tradescribe: Trading Platform', desc: 'Built a sleek journaling platform for tracking trades with Al-backed analytics.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Murzban Website', desc: 'Elegant and clean website showcasing interior design and architecture portfolio.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Greenfeels: Sustainable Ecom', desc: 'Eco-conscious e-commerce platform promoting sustainable products.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Momentz Ecom Website', desc: 'A sophisticated online store for premium watches and luxury accessories.', logo: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=200', screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggers the arrival of children by 0.1 seconds
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const PortfolioCard = ({ name, desc, logo, screenshot }) => (
  <motion.div 
    variants={itemVariants} 
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-shadow hover:shadow-lg group flex flex-col"
  >
    <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden mb-6">
      {/* Screenshot Image with Hover Zoom */}
      <Image 
        src={screenshot} 
        alt={`${name} screenshot`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      
      {/* Centered Logo Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
        <Image 
          src={logo} 
          alt={`${name} logo`}
          width={80} 
          height={20} 
          className="object-contain"
        />
      </div>
    </div>
    
    <div className="flex-grow space-y-2">
      <h3 className="text-xl font-semibold text-gray-900 leading-tight transition-colors group-hover:text-sky-600">{name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed font-normal">{desc}</p>
    </div>
  </motion.div>
);

export default function PortfolioSection() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <div className="flex justify-center">
            <span className="bg-gray-100/70 border border-gray-200 backdrop-blur-sm text-sm px-6 py-2.5 rounded-full font-medium text-gray-800 tracking-wide">
              Social Presence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1B2A] leading-tight tracking-tight max-w-4xl mx-auto">
            Turning Visions Into <br className="hidden sm:inline" /> Digital Reality
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}