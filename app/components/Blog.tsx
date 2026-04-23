'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  { id: 1, title: 'The Rise of Digital Fashion', image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800', featured: true },
  { id: 2, title: 'Minimalism Meets Bold', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, title: 'Sustainable Fashion', image: 'https://images.pexels.com/photos/2962173/pexels-photo-2962173.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, title: 'Spring Styling Tips', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, title: 'Color Trends 2026', image: 'https://images.pexels.com/photos/2130268/pexels-photo-2130268.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, title: 'Fashion Forward', image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function BlogSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#E9E9E7] text-[#2f4f3f]">

      {/* Background Marquee Text for 'Amazing' Factor */}
      <div className="absolute top-10 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
        <motion.h1
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] font-black uppercase"
        >
          Launch Your Business with a Ready Website
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 border-l-4 border-[#2f4f3f] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">
            Ready-Made Websites
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
              Build Launch Sell
            </p>
            <div className="h-[2px] w-20 bg-black/10"></div>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Featured Large Post */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -15 }}
            className="md:col-span-2 relative h-[500px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl"
          >
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-10 left-10 text-white">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Featured Story</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{posts[0].title}</h3>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="flex flex-col gap-8">
            {posts.slice(1, 3).map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="relative flex-1 min-h-[235px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-black text-xs font-bold px-6 py-2 rounded-full transform scale-50 group-hover:scale-100 transition-transform">VIEW POST</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM ROW GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {posts.slice(3).map((post) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-4 shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:rotate-2 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-gray-500 transition-colors">
                {post.title}
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Read More — 04 Min</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
}