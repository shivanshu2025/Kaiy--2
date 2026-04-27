'use client';

import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Build', href: '/build' },
  { name: ' Customized', href: '/customized' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

type ActionIcon = {
  Icon: typeof Search;
  label: string;
  badge?: boolean;
};

const actionIcons: ActionIcon[] = [
  { Icon: Search, label: 'Search' },
  { Icon: ShoppingBag, label: 'Shopping bag', badge: true },
];

const linkVariants = {
  closed: { y: 10, opacity: 0 },
  opened: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-[#E9E9E7] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="relative flex-shrink-0 group">
              <div className="absolute -inset-1.5 z-0 scale-0 rounded-full bg-stone-100/60 transition-transform duration-300 group-hover:scale-100" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Image
                  src="/images/Kaiyologo.png"
                  alt="Kaiyo Logo"
                  width={48}
                  height={48}
                  sizes="48px"
                  priority
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <span className="hidden text-lg font-extralight uppercase tracking-[0.2em] text-stone-900 sm:block">
              Kaiy{"\u014d"}
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`group relative z-10 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-stone-900 ${
                    pathname === link.href ? 'text-stone-900' : 'text-stone-600'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <span
                    className={`absolute inset-0 -z-10 rounded-full bg-stone-100/80 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${
                      pathname === link.href ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                  />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {actionIcons.map(({ Icon, badge, label }) => (
                <motion.button
                  key={label}
                  type="button"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative z-10 p-2.5 text-stone-700"
                  aria-label={label}
                >
                  <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-stone-100/80 transition-transform duration-300 group-hover:scale-100" />
                  <Icon size={20} strokeWidth={1.5} />
                  {badge && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-600 ring-2 ring-white" />
                  )}
                </motion.button>
              ))}

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-10 p-2.5 text-stone-700 md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
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
                      className={`block rounded-lg px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 ${
                        pathname === link.href ? 'bg-stone-50' : ''
                      }`}
                      aria-current={pathname === link.href ? 'page' : undefined}
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
