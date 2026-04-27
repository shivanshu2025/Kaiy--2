'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  name: string;
  desc: string;
  screenshot: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Lal Sweets Ecom Website',
    desc: 'Modern sweets store with responsive design for smooth shopping.',
    screenshot:
      'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
  },
  {
    id: 2,
    name: 'Kirtilals : Luxury Website',
    desc: 'Premium diamond-jewellery store with elegant UX for luxury buyers.',
    screenshot:
      'https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
  },
  {
    id: 3,
    name: 'Tradescribe: Trading Platform',
    desc: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
    screenshot:
      'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
  },
  {
    id: 4,
    name: 'Murzban Website',
    desc: 'Elegant and clean website showcasing interior design and architecture portfolio.',
    screenshot:
      'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
  },
  {
    id: 5,
    name: 'Greenfeels: Sustainable Ecom',
    desc: 'Eco-conscious e-commerce platform promoting sustainable products.',
    screenshot:
      'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
  },
  {
    id: 6,
    name: 'Momentz Ecom Website',
    desc: 'A sophisticated online store for premium watches and luxury accessories.',
    screenshot:
      'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: 'https://2vportfolio.vercel.app/',
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

type PortfolioCardProps = Omit<Project, 'id'>;

function PortfolioCard({ name, desc, screenshot, link }: PortfolioCardProps) {
  return (
    <Link href={link} target="_blank" rel="noreferrer" className="block h-full">
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4 }}
        className="group flex h-full cursor-pointer flex-col rounded-3xl border border-gray-100 p-6 text-gray-600 shadow-sm hover:shadow-lg"
      >
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-[#E9E9E7]">
          <Image
            src={screenshot}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0 flex-grow space-y-2">
          <h3 className="text-xl font-semibold text-[#1F2A1F] transition-colors group-hover:text-[#2F3E2F]">
            {name}
          </h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-[#E9E9E7] px-4 py-24 text-[#1F2A1F] sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl text-center md:text-left">
              <div className="mb-4">
                <span className="rounded-full border border-gray-300 bg-[#EDEDEB] px-6 py-2.5 text-sm font-medium">
                  Social Presence
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Dream It. We Build It. <br className="hidden sm:inline" /> Digitally
              </h2>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                href="/portfolio"
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-[#2f4f3f] hover:text-white"
              >
                View all
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
