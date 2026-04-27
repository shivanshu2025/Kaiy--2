'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, type MouseEvent } from 'react';

export default function EleganceBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);

  return (
    <section className="flex justify-center bg-[#E9E9E7] px-4 py-16">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMousePosition}
        className="relative flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-2xl bg-[#2f4f3f] px-6 py-10 transition-all duration-500 hover:shadow-2xl md:flex-row md:px-12"
      >
        <motion.div style={{ x: textX }} className="w-full space-y-5 text-white md:w-1/2">
          <h2 className="text-3xl font-extrabold leading-tight tracking-wide md:text-5xl">
            ELEGANCE IN EVERY <br /> THREAD
          </h2>

          <p className="max-w-sm text-xs uppercase tracking-wide text-gray-200 md:text-sm">
            Especially suitable for a brand or collection that focuses on
            intricate details, quality, and a timeless sense of style.
          </p>
        </motion.div>

        <div className="relative mt-10 flex w-full items-center justify-center md:mt-0 md:w-1/2">
          <div className="absolute right-4 h-52 w-52 rounded-full bg-yellow-600 md:right-12 md:h-72 md:w-72" />

          <motion.div style={{ x: imageX }} className="relative z-10">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/programmer-using-laptop-illustration-svg-download-png-11934869.png"
              alt="Model"
              width={250}
              height={350}
              sizes="(min-width: 768px) 250px, 200px"
              className="h-auto w-[200px] object-contain md:w-[250px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
