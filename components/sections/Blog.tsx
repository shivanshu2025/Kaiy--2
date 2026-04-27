'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'The Rise of Digital Fashion',
    image:
      '/images/blogimg/blog1.jpeg',
    featured: true,
  },
  {
    id: 2,
    title: 'Minimalism Meets Bold',
    image:
      '/images/blogimg/blog2.jpeg',
  },
  {
    id: 3,
    title: 'Sustainable Fashion',
    image:
      '/images/blogimg/blog3.jpeg',
  },
  {
    id: 4,
    title: 'Spring Styling Tips',
    image:
      '/images/blogimg/blog4.jpeg',
  },
  {
    id: 5,
    title: 'Color Trends 2026',
    image:
      '/images/blogimg/blog5.jpeg',
  },
  {
    id: 6,
    title: 'Fashion Forward',
    image:
      '/images/blogimg/blog6.jpeg',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-[#E9E9E7] px-4 py-24 text-[#2f4f3f] sm:px-6">
      <div className="pointer-events-none absolute left-0 top-10 whitespace-nowrap opacity-[0.03] select-none">
        <motion.h1
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-[6rem] font-black uppercase sm:text-[10rem] lg:text-[15rem]"
        >
          Launch Your Business with a Ready Website
        </motion.h1>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 border-l-4 border-[#2f4f3f] pl-6"
        >
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl md:text-7xl">
            Ready-Made Websites
          </h2>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              Build Launch Sell
            </p>
            <div className="h-[2px] w-20 bg-black/10" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -15 }}
            className="group relative h-[360px] cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl sm:h-[420px] md:col-span-2 md:h-[500px]"
          >
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              priority={posts[0].featured}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-6 left-6 pr-6 text-white sm:bottom-10 sm:left-10 sm:pr-10">
              <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase backdrop-blur-md">
                Featured Story
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tighter md:text-4xl">
                {posts[0].title}
              </h3>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {posts.slice(1, 3).map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="group relative min-h-[235px] flex-1 cursor-pointer overflow-hidden rounded-[2rem] shadow-lg"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/0" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="transform rounded-full bg-white px-6 py-2 text-xs font-bold text-black transition-transform group-hover:scale-100 scale-50">
                    VIEW POST
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.slice(3).map((post) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 h-64 overflow-hidden rounded-[2rem] shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-lg font-black uppercase tracking-tight transition-colors group-hover:text-gray-500">
                {post.title}
              </h4>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                Read More {"\u2014"} 04 Min
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
