const text =
  '- DESIGN • INNOVATE • DOMINATE • - CRAFTING DIGITAL EXPERIENCES - WEBSITES THAT SELL - MODERN WEBSITES FOR MODERN BRANDS • -';

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-stone-900 py-6 text-white">
      <div className="marquee-track flex min-w-max whitespace-nowrap text-2xl font-bold">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mr-12">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
