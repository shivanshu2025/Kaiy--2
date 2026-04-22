'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    name: 'Lal Sweets Ecom Website', 
    desc: 'Modern sweets store with responsive design for smooth shopping.', 
    screenshot: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
  { 
    id: 2, 
    name: 'Kirtilals : Luxury Website', 
    desc: 'Premium diamond-jewellery store with elegant UX for luxury buyers.', 
    screenshot: 'https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
  { 
    id: 3, 
    name: 'Tradescribe: Trading Platform', 
    desc: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.', 
    screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
  { 
    id: 4, 
    name: 'Murzban Website', 
    desc: 'Elegant and clean website showcasing interior design and architecture portfolio.', 
    screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
  { 
    id: 5, 
    name: 'Greenfeels: Sustainable Ecom', 
    desc: 'Eco-conscious e-commerce platform promoting sustainable products.', 
    screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
  { 
    id: 6, 
    name: 'Momentz Ecom Website', 
    desc: 'A sophisticated online store for premium watches and luxury accessories.', 
    screenshot: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const PortfolioCard = ({ name, desc, screenshot, link }) => (
  <Link href={link} target="_blank" className="block">
    <motion.div 
      variants={itemVariants} 
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-sm hover:shadow-lg group flex flex-col cursor-pointer"
    >
      <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden mb-6">
        <Image 
          src={screenshot} 
          alt={`${name} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex-grow space-y-2">
        {/* 🔥 changed hover color */}
        <h3 className="text-xl font-semibold text-[#1F2A1F] leading-tight group-hover:text-[#2F3E2F] transition-colors">
          {name}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  </Link>
);

export default function PortfolioSection() {
  return (
    <section className="bg-[#F5F5F3] text-[#1F2A1F] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <div className="flex justify-center">
            <span className="bg-[#EDEDEB] border border-[#D1D5DB] text-sm px-6 py-2.5 rounded-full font-medium text-[#1F2A1F]">
              Social Presence
            </span>
          </div>

          {/* 🔥 Heading color changed */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2A1F] leading-tight max-w-4xl mx-auto">
            Turning Visions Into <br className="hidden sm:inline" /> Digital Reality
          </h2>
        </motion.div>

        {/* Grid */}
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