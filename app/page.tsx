import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Feature from '@/components/sections/Feature';
import Collection from '@/components/sections/Collection';
import Blog from '@/components/sections/Blog';
import Banner from '@/components/sections/Banner';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

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
