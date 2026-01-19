import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Reviews from "@/components/Reviews";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Preview */}
      <section className="py-24 px-5 text-center flex flex-col items-center bg-rice-paper">
        <h2 className="text-4xl font-heading font-bold mb-6 max-w-[600px] text-dark-black">A Slice of Calm in the Heart of Bandra</h2>
        <p className="text-lg font-body text-neutral-600 mb-10 max-w-[700px] leading-relaxed">
          Mokai Cafe is more than just a coffee shop. It&apos;s a sanctuary inspired by the minimal cafes of Tokyo and Seoul.
          Whether you&apos;re here for our signature Gula Melaka Latte or just to soak in the vibe, you&apos;re always welcome.
        </p>
        <Link
          href="/about"
          className="inline-block border border-dark-black text-dark-black font-heading py-2.5 px-7 text-base hover:bg-dark-black hover:text-white transition-colors duration-300"
        >
          Our Story
        </Link>
      </section>

      <FeaturedItems />

      <Reviews />

      {/* Visit CTA */}
      <section className="bg-mocha text-rice-paper py-20 px-5 text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-heading font-bold mb-5 text-rice-paper">Come Say Hi</h2>
          <p className="mb-8 text-xl opacity-90 font-body">Open every day from 8:00 AM to 11:00 PM</p>
          <Link
            href="/contact"
            className="inline-block bg-rice-paper text-mocha font-heading py-3 px-8 text-base hover:bg-neutral-100 transition-colors duration-300 shadow-md"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </main>
  );
}
