'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FashionHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#E5E5E5] px-4 font-serif text-[#2D3627] sm:px-6">
      <div className="absolute left-4 top-4 z-30 sm:left-10 sm:top-10">
        <div className="flex flex-col items-center bg-black p-2 text-[10px] leading-none tracking-widest text-white">
          <span className="mb-1 font-mono text-lg tracking-[-1px]">
            |||| || | |||| || ||| | ||
          </span>
          <span className="font-mono uppercase opacity-70">
            Project Kaiy{"\u014d"} Access: 898 12 7
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center">
        <h1 className="text-center text-[10vw] font-black uppercase leading-[0.85] tracking-tighter opacity-10">
          The future of <br />
          startup building <br />
          {"\u2014"}Kaiy{"\u014d"}
        </h1>
      </div>

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
        <div className="z-20 mt-24 w-full max-w-md space-y-10 sm:space-y-12 md:mt-0 md:w-1/3 md:max-w-none">
          <div className="w-full max-w-[320px] -rotate-1 border-r-4 border-[#2f4f3f] bg-black p-3 text-white shadow-2xl">
            <h2 className="mb-2 text-xl font-bold tracking-tight">
              Venture Capital Reimagined.
            </h2>
            <p className="text-sm font-medium uppercase leading-relaxed tracking-tight opacity-80">
              Building a startup is chaotic. Kaiy{"\u014d"} provides the
              structure, style, and scale to turn vision into market dominance.
            </p>
          </div>

          <div className="group relative h-56 w-44 rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <Image
              src="/images/kk.png"
              alt="Yellow Jacket"
              fill
              sizes="176px"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <div className="absolute bottom-6 -left-4 bg-[#2D3627] px-4 py-1 text-[10px] font-bold uppercase text-white -rotate-12">
              I create websites and sell them.{"\u201d"}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center pt-16 sm:pt-20 md:w-1/2 md:pt-40">
          <div className="group relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f4f3f] opacity-20 blur-[100px] mix-blend-multiply" />

            <Image
              src="/images/Kaiyologo.png"
              alt="Kaiyo Logo"
              width={550}
              height={550}
              sizes="(min-width: 768px) 550px, (min-width: 640px) 380px, 280px"
              priority
              className="relative z-10 h-auto w-[280px] object-contain grayscale contrast-125 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:w-[380px] md:w-[550px]"
            />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute right-2 top-6 z-30 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-2 border-white/30 shadow-xl transition-transform hover:scale-110 sm:right-0 sm:top-10 sm:h-28 sm:w-28 md:-right-10 md:h-32 md:w-32"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-full w-full p-2">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="fill-white text-[9px] font-bold uppercase tracking-[3px]">
                  <textPath xlinkHref="#circlePath">
                    {"\u201c"}I build websites for clients and sell them.{"\u201d"}
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="font-sans text-3xl text-white">{"\u2192"}</span>
          </motion.div>
        </div>

        <div className="z-20 mt-12 flex w-full flex-col items-end space-y-10 self-stretch text-right sm:mt-16 sm:space-y-16 md:mt-60 md:w-1/4">
          <div className="group cursor-default">
            <h3 className="text-5xl font-bold leading-none tracking-tighter transition-colors group-hover:text-[#2f4f3f] sm:text-6xl md:text-7xl">
              FAST
            </h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              Delivery
            </p>
          </div>
          <div className="group cursor-default">
            <h3 className="text-5xl font-bold leading-none tracking-tighter transition-colors group-hover:text-[#2f4f3f] sm:text-6xl md:text-7xl">
              MODERN
            </h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              Design
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
    </section>
  );
}
