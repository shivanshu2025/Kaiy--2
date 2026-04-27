import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



const socialIcons = [FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter];

export default function Footer() {
  return (
    <footer className="bg-[#E9E9E7] px-6 py-16 text-[#2d2d2d] md:px-16">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Subscribe for News Letters
          </h3>

          <div className="flex max-w-sm flex-col overflow-hidden rounded-full border border-gray-400 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
            />
            <button className="rounded-full bg-[#2f4f3f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#666660]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 border-t border-gray-300" />

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <h2 className="text-2xl font-extrabold text-[#2f4f3f]">Kaiy{"\u014d"}</h2>

        <div className="flex gap-4">
          {socialIcons.map((Icon, i) => (
            <div
              key={i}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition hover:bg-[#2f4f3f] hover:text-white"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
