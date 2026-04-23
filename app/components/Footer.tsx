'use client';

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#E9E9E7] text-[#2d2d2d] px-6 md:px-16 py-16">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold uppercase mb-4 text-sm tracking-wide">
            Categories
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Shirt</li>
            <li>Dress</li>
            <li>Pants</li>
            <li>Watches</li>
            <li>Underwear</li>
          </ul>
        </div>

        {/* GENDER */}
        <div>
          <h3 className="font-semibold uppercase mb-4 text-sm tracking-wide">
            By Gender
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Male</li>
            <li>Female</li>
            <li>Unisex</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold uppercase mb-4 text-sm tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>About Us</li>
            <li>Collections</li>
            <li>Term of Us</li>
            <li>Shipping Terms</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="font-semibold uppercase mb-4 text-sm tracking-wide">
            Subscribe for News Letters
          </h3>

          <div className="flex items-center border border-gray-400 rounded-full overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
            />
            <button className="bg-[#2f4f3f] text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-[#666660] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-10"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LOGO */}
        <h2 className="text-2xl font-extrabold text-[#2f4f3f]">
          Kaiyō
        </h2>

        {/* SOCIALS */}
        <div className="flex gap-4">
          {[FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-[#2f4f3f] hover:text-white transition cursor-pointer"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}