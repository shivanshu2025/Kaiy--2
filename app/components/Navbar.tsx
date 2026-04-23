'use client';

import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Build', href: '#' },
    { name: 'Collection', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const linkVariants = {
    closed: { y: 10, opacity: 0 },
    opened: { y: 0, opacity: 1 },
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E9E9E7] backdrop-blur-xl border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Reduced from h-20 to h-16 for a smaller nav feel */}
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex-shrink-0 relative group">
              <div className="absolute -inset-1.5 bg-stone-100/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0" />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/images/kaiyologo.png" 
                alt="Kaiyō Logo" 
                className="h-12 w-auto object-contain relative z-10" // Balanced "Normal" size
              />
            </Link>
            <span className="hidden sm:block text-lg font-extralight tracking-[0.2em] uppercase text-stone-900">
              Kaiyō
            </span>
          </div>

          {/* Desktop Navigation - Small & Pop Animation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }} // The "Pop" effect
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link 
                  href={link.href}
                  className="relative px-4 py-2 text-xs font-semibold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors group z-10"
                >
                  {/* Bubble effect background */}
                  <span className="absolute inset-0 bg-stone-100/80 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            {[ { Icon: Search }, { Icon: ShoppingBag, badge: true } ].map(({ Icon, badge }, index) => (
              <motion.button 
                key={index}
                whileHover={{ scale: 1.15 }} // Icon Pop
                whileTap={{ scale: 0.9 }}
                className="p-2.5 text-stone-700 relative group z-10"
              >
                <span className="absolute inset-0 bg-stone-100/80 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                <Icon size={20} strokeWidth={1.5} />
                {badge && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full ring-2 ring-white" />
                )}
              </motion.button>
            ))}

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden p-2.5 text-stone-700 relative z-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="flex flex-col gap-2 pb-6 pt-2"
                initial="closed"
                animate="opened"
                transition={{ staggerChildren: 0.08 }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link 
                      href={link.href} 
                      className="block text-sm font-medium text-stone-800 px-4 py-3 rounded-lg hover:bg-stone-50 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}