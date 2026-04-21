'use client';

export default function Marquee() {
 const text = ' - DESIGN • INNOVATE • DOMINATE • - CRAFTING DIGITAL EXPERIENCES - WEBSITES THAT SELL - MODERN WEBSITES FOR MODERN BRANDS • -';

  return (
    <section className="bg-stone-900 text-white py-6 overflow-hidden">
      <div className="flex whitespace-nowrap text-2xl font-bold animate-scroll">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mr-12">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        } 
      `}</style>
    </section>
  );
}
