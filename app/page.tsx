'use client';

import Hero from '@/app/components/Hero';
import Marquee from '@/app/components/Marquee';
import Feature from '@/app/components/Feature';
import Collection from '@/app/components/Collection';
import Blog from '@/app/components/Blog';
import Banner from '@/app/components/Banner';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="bg-stone-50">
      <Navbar />
      <Hero />
      <Marquee />
      <Feature />
      <Collection />
      <Blog />
      <Banner />
      <Footer />
    </main>
  );
}
