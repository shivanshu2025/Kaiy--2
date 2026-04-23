'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function EleganceBanner() {
  const ref = useRef(null);

  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const textX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);

  return (
    <section className="bg-[#E9E9E7] py-16 px-4 flex justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden bg-[#2f4f3f] flex flex-col md:flex-row items-center px-6 md:px-12 py-10 transition-all duration-500 hover:shadow-2xl"
      >
        {/* LEFT TEXT */}
        <motion.div
          style={{ x: textX }}
          className="md:w-1/2 text-white space-y-5"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
            ELEGANCE IN EVERY <br /> THREAD
          </h2>

          <p className="text-xs md:text-sm text-gray-200 max-w-sm uppercase tracking-wide">
            Especially suitable for a brand or collection that focuses on
            intricate details, quality, and a timeless sense of style.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          
          {/* Yellow Circle */}
          <div className="absolute w-52 h-52 md:w-72 md:h-72 bg-yellow-600 rounded-full right-4 md:right-12" />

          {/* Model Image */}
          <motion.div
            style={{ x: imageX }}
            className="relative z-10"
          >
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/programmer-using-laptop-illustration-svg-download-png-11934869.png"
              alt="Model"
              width={250}
              height={350}
              className="object-contain"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}