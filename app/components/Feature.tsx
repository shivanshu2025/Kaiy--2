'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OurStorySection() {
  return (
    <section className="relative w-full min-h-screen bg-[#DCDCDC] flex flex-col items-center justify-start overflow-hidden px-4 md:px-6 py-12 md:py-20 font-serif text-[#2D3627]">
      
      {/* --- TOP HEADER AREA --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
        
        {/* Vertical Text: OUR STORY (Hidden on small mobile for better spacing) */}
        <div className="hidden sm:flex gap-2 md:gap-4 select-none opacity-40 md:opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <span 
              key={i} 
              className="uppercase text-[9px] md:text-[12px] font-bold tracking-[0.2em] [writing-mode:vertical-lr] rotate-180"
            >
              Who We Are
            </span>
          ))}
        </div>

        {/* Main Heading & Barcode */}
        <div className="relative flex-1 w-full">
          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] font-black uppercase leading-[0.85] md:leading-[0.9] tracking-tighter text-left">
           Flexible solutions designed for <br />  real business growth.
          </h2>
        </div>
      </div>

      {/* --- MAIN CONTENT VIDEO AREA --- */}
      <div className="relative z-10 w-full max-w-6xl px-2 sm:px-0">
        
        {/* Large Rounded Video Container - Responsive aspect ratio */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-[30px] sm:rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border-4 md:border-8 border-white/10">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale-[20%] brightness-90"
          >
            <source src="/video/vide.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Play / Watch Now Sticker - Scaled for different screens */}
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6 md:-bottom-12 md:-left-12 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 z-30"
        >
          <div className="relative w-full h-full rounded-full p-1 shadow-2xl border-2 md:border-4 border-white/20 flex items-center justify-center">
            {/* Peeling effect corner */}
            <div className="absolute bottom-2 left-2 w-6 h-6 md:w-12 md:h-12 bg-white/30 rounded-full blur-sm" />
            
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="stickerPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[9px] md:text-[10px] font-bold fill-white/90 uppercase tracking-[2px]">
                <textPath xlinkHref="#stickerPath">
                  Explore Now • Get Started •
                </textPath>
              </text>
            </svg>
            
          </div>
        </motion.div>
      </div>

      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none select-none">
         <span className="text-[25vw] md:text-[20vw] font-black leading-none">Kaiyō</span>
      </div>

    </section>
  );
}