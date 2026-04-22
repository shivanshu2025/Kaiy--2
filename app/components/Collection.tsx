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
      className="text-gray-600 p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg group flex flex-col cursor-pointer"
    >
      <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden mb-6">
        <Image 
          src={screenshot} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex-grow space-y-2">
        <h3 className="text-xl font-semibold text-[#1F2A1F] group-hover:text-[#2F3E2F] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600">
          {desc}
        </p>
      </div>
    </motion.div>
  </Link>
);

export default function PortfolioSection() {
  return (
    <section className="text-gray-600 text-[#1F2A1F] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔥 HEADER WITH RIGHT BUTTON */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left */}
            <div className="text-center md:text-left max-w-3xl">
              <div className="mb-4">
                <span className="bg-[#EDEDEB] border border-gray-300 text-sm px-6 py-2.5 rounded-full font-medium">
                  Social Presence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
               Dream It. We Build It. <br className="hidden sm:inline" /> Digitally
              </h2>
            </div>

            {/* 🔥 Right Side Button */}
            <div className="flex justify-center md:justify-end">
              <Link href="/portfolio">
                <button className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-medium hover:bg-[#1F2A1F] hover:text-white transition-all duration-300">
                  View all
                </button>
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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