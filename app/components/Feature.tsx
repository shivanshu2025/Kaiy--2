'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OurStorySection() {
  // Parallax effect for the background text
  const { scrollYProgress } = useScroll();
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="relative w-full min-h-screen bg-[#E9E9E7] flex flex-col items-center justify-start overflow-hidden px-4 md:px-6 py-12 md:py-20 font-serif text-[#2D3627]">
      
      {/* 1. BACKGROUND ACCENTS - Animated Parallax */}
      <motion.div 
        style={{ x: backgroundX }}
        className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none select-none z-0 whitespace-nowrap"
      >
         <span className="text-[25vw] md:text-[20vw] font-black leading-none uppercase tracking-tighter">
           Kaiyō 
         </span>
      </motion.div>

      {/* 2. TOP HEADER AREA */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
        
        {/* Vertical Labels - Staggered fade in */}
        <div className="hidden sm:flex gap-2 md:gap-4 select-none opacity-40 md:opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="uppercase text-[10px] md:text-[12px] font-bold tracking-[0.2em] [writing-mode:vertical-lr] rotate-180"
            >
              Who We Are
            </motion.span>
          ))}
        </div>

        {/* Tagline - Reveal animation */}
        <div className="relative flex-1 w-full max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-left"
          >
            Built for The Bold.
          </motion.h2>

          {/* Barcode Sticker - Interactive Tilt */}
          <motion.div 
            initial={{ rotate: -5, scale: 0.9 }}
            whileInView={{ scale: 1 }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.1, 
              boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute -bottom-6 right-2 md:right-10 bg-black text-white p-2 md:p-3 shadow-2xl rounded-sm flex flex-col items-center z-30 cursor-pointer"
          >
            <span className="font-mono tracking-[-1px] text-lg md:text-2xl leading-none">|||| || | |||| || ||| | ||</span>
            <span className="font-mono text-[7px] md:text-[10px] mt-1 opacity-70 tracking-widest uppercase">Project Kaiyō Access</span>
          </motion.div>
        </div>
      </div>

      {/* 3. MAIN CONTENT VIDEO AREA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl px-2 sm:px-0"
      >
        
        {/* Video Container - Cinematic Scale on Hover */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-[30px] sm:rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border-4 md:border-8 border-white/10 group cursor-none"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale-[20%] brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          >
            <source src="/video/vide.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Circular Explore Sticker - Bouncy Movement */}
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0] 
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6 md:-bottom-14 md:-left-12 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 z-30"
        >
          <div className="relative w-full h-full rounded-full p-1 shadow-2xl border-2 md:border-4 border-white/20 flex items-center justify-center cursor-pointer group">
            <div className="absolute bottom-2 left-2 w-8 h-8 md:w-14 md:h-14 bg-white/20 rounded-full blur-md group-hover:bg-white/40 transition-colors" />
            
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_15s_linear_infinite]">
              <path id="stickerPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[10px] md:text-[9px] font-bold fill-white uppercase tracking-[2px]">
                <textPath xlinkHref="#stickerPath">
                  Explore Now • Get Started • 
                </textPath>
              </text>
            </svg>
          
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}