"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-rice-paper">
            {/* Editorial Hero */}
            <section className="h-[80vh] relative w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/30" />
                <Image
                    src="/about-hero.png"
                    alt="Mokai Cafe Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="container mx-auto relative z-20 h-full flex flex-col justify-center items-center text-center text-white p-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading max-w-[800px] leading-[1.2] mb-6"
                    >
                        More than a cafe. A space for culture, creativity & calm.
                    </motion.h1>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-[1px] bg-white"
                    />
                </div>
            </section>

            {/* Story Sections */}
            <div className="container max-w-[900px] mx-auto py-24 px-5">

                {/* 1. Origin */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-sm uppercase tracking-[0.15em] text-mocha font-bold block mb-4">The Origin</span>
                    <h2 className="text-2xl font-heading mb-6 text-dark-black">Inspired by Tokyo. Rooted in Bandra.</h2>
                    <p className="text-xl leading-[1.8] text-neutral-600 font-body">
                        Mokai was born from a simple desire: to press pause. Inspired by the listening bars of Shibuya and the minimal aesthetics of Daikanyama, we wanted to bring that sense of intentional living to the chaotic, creative heart of Bandra. We found an old bungalow on Chapel Road and stripped it back to its essence—raw concrete, warm wood, and light.
                    </p>
                </motion.section>

                {/* 2. Philosophy */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-20 grid grid-cols-1 gap-10 items-center"
                >
                    <div className="p-10 bg-warm-grey border-l-4 border-mocha">
                        <h3 className="text-xl font-heading mb-4 text-dark-black">Our Philosophy</h3>
                        <p className="text-[1.1rem] leading-[1.6] text-neutral-600 italic">
                            &quot;We believe coffee is a ritual, not a fuel. Every cup is an opportunity to slow down. We source our matcha from Uji, our beans from Chikmagalur estates, and our ingredients from local organic farms.&quot;
                        </p>
                    </div>
                </motion.section>

                {/* 3. Community */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <span className="text-sm uppercase tracking-[0.15em] text-dark-black font-bold block mb-4">Community</span>
                    <h2 className="text-2xl font-heading mb-6 text-dark-black">Where Creatives Collide</h2>
                    <p className="text-xl leading-[1.8] text-neutral-600 font-body">
                        From script readings to startup meetings, Mokai has become the living room for Bandra&apos;s creative class. We are not just serving coffee; we are curating a vibe where ideas flow as freely as the pour-overs.
                    </p>
                </motion.section>

            </div>
        </main>
    );
}
