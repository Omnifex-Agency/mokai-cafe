"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const items = [
    {
        title: "Matcha Bar",
        desc: "Ceremonial grade matcha sourced directly from Uji, Japan.",
        image: "/matcha.png",
        color: "#7A8B68",
        link: "/menu"
    },
    {
        title: "All-Day Breakfast",
        desc: "From fluffy pancakes to savory miso mushroom toast.",
        image: "/coffee.png", // Placeholder
        color: "#E8DCC4",
        link: "/menu"
    },
    {
        title: "Asian Fusion Plates",
        desc: "Where French technique meets bold Asian flavors.",
        image: "/hero.png", // Placeholder
        color: "#CED7C0",
        link: "/menu"
    },
    {
        title: "Specialty Coffee",
        desc: " ethically sourced beans roasted to perfection.",
        image: "/coffee.png",
        color: "#A67B5B",
        link: "/menu"
    }
];

export default function FeaturedItems() {
    return (
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center mb-16 gap-3">
                <span className="text-xs uppercase tracking-[0.1em] font-semibold text-mocha">Curated For You</span>
                <h2 className="text-4xl text-center font-heading text-dark-black">Signature Experiences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col h-full group"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="h-[250px] relative flex items-center justify-center p-4 transition-transform duration-500 hover:scale-105" style={{ backgroundColor: item.color }}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-1 text-dark-black">
                            <h3 className="text-xl font-heading mb-2">{item.title}</h3>
                            <p className="text-[0.95rem] text-neutral-700 mb-6 font-body leading-relaxed">{item.desc}</p>
                            <Link href={item.link} className="mt-auto font-semibold flex items-center gap-2 text-sm transition-all group-hover:gap-3 group-hover:text-mocha">
                                See Menu <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
