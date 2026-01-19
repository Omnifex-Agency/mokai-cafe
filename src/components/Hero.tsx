"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-[#FDFCF8] bg-[url('/hero.png')] bg-cover bg-center bg-fixed">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/80 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-[900px] px-5 flex flex-col items-center gap-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-heading font-bold leading-[1.2] tracking-tight drop-shadow-lg text-[2.5rem] md:text-[4rem] text-white"
                >
                    Mokai <span className="italic font-normal">—</span> Where culture, coffee & craft meet.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-body text-[1.1rem] md:text-xl max-w-[600px] opacity-95 leading-relaxed text-[#F4F1EA]"
                >
                    Tucked away in Bandra&apos;s creative heart, Mokai is your slow-living escape.
                    Experience the fusion of specialty coffee and Asian culinary art.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4 mt-8 flex-wrap justify-center"
                >
                    <Link
                        href="/menu"
                        className="font-heading text-lg px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-dark-black transition-all duration-300"
                    >
                        Explore Menu
                    </Link>
                    <Link
                        href="/about"
                        className="font-heading text-lg px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-dark-black transition-all duration-300"
                    >
                        Our Story
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
