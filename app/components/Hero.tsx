'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FashionHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] flex flex-col items-center justify-center overflow-hidden font-serif text-[#2D3627]">
      
      {/* 1. Barcode Sticker (Top Layer) */}
      <div className="absolute top-10 left-10 z-30">
        <div className="bg-black text-white p-2 text-[10px] tracking-widest flex flex-col items-center leading-none">
          <span className="mb-1 font-mono tracking-[-1px] text-lg">|||| || | |||| || ||| | ||</span>
          <span className="font-mono uppercase opacity-70">Project Kaiyō Access: 898 12 7</span>
        </div>
      </div>

      {/* 2. MAIN BACKGROUND TEXT (Lowest Layer - behind everything) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-center opacity-10">
          The future of <br /> 
          startup building <br /> 
          —Kaiyō
        </h1>
      </div>

      {/* 3. Layout Grid (Middle Layer) */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column: Mission Statement */}
        <div className="w-full md:w-1/3 space-y-12 mt-24 md:mt-0 z-20">
          <div className="bg-black text-white p-3 max-w-[320px] transform -rotate-1 shadow-2xl border-r-4 border-[#A84A32]">
            <h2 className="text-xl font-bold mb-2 tracking-tight">Venture Capital Reimagined.</h2>
            <p className="text-sm leading-relaxed uppercase font-medium tracking-tight opacity-80">
              Building a startup is chaotic. Kaiyō provides the structure, style, and scale to turn vision into market dominance.
            </p>
          </div>

          <div className="relative group w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-2">
            <img 
              src="/images/kk.png" 
              alt="Yellow Jacket" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
            <div className="absolute bottom-6 -left-4 bg-[#2D3627] text-white px-4 py-1 text-[10px] font-bold uppercase -rotate-12">
              I create websites and sell them.”
            </div>
          </div>
        </div>

        {/* Center Column: Kaiyō Visual (Above background text, below stickers) */}
        <div className="relative w-full md:w-1/2 flex justify-center pt-20 md:pt-40 z-10">
          <div className="relative group">
             {/* Glow effect behind PNG */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[80%] bg-[#632432] rounded-full mix-blend-multiply opacity-20 blur-[100px] -z-10"></div>
            
            <img 
              src="/images/kaiyologo.png" 
              alt="Kaiyō Logo" 
              className="w-[550px] relative z-10 object-contain grayscale contrast-125 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Rotating Sticker (Top Layer) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute top-10 right-0 md:-right-10 w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform z-30"
          >
            <div className="absolute inset-0 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[9px] font-bold fill-white uppercase tracking-[3px]">
                  <textPath xlinkHref="#circlePath">
                    “I build websites for clients and sell them.”
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="text-white text-3xl font-sans">→</span>
          </motion.div>
        </div>

        {/* Right Column: Growth Stats */}
        <div className="w-full md:w-1/4 flex flex-col items-end text-right space-y-16 mt-16 md:mt-60 z-20">
          <div className="group cursor-default">
            <h3 className="text-7xl font-bold tracking-tighter leading-none group-hover:text-[#A84A32] transition-colors">FAST</h3>
            <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 mt-2">Delivery</p>
          </div>
          <div className="group cursor-default">
            <h3 className="text-7xl font-bold tracking-tighter leading-none group-hover:text-[#A84A32] transition-colors">MODERN</h3>
            <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 mt-2">Design</p>
          </div>
        </div>

      </div>

      {/* 4. Background Texture (Bottom Layer) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
    </section>
  );
}