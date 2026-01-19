"use client";

import { Star } from "lucide-react";
import { MOKAI_DATA } from "@/data/mokai";
import { motion } from "framer-motion";

export default function Reviews() {
    return (
        <section className="py-20 bg-rice-paper">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Authority Strip */}
                <div className="flex justify-center gap-10 flex-wrap mb-20 border-b border-gray-200 pb-10">
                    <div className="text-center">
                        <span className="block text-2xl font-bold font-heading">4.3 ★</span>
                        <span className="text-sm uppercase tracking-[0.05em] text-gray-500">Google Reviews</span>
                    </div>
                    <div className="hidden md:block w-[1px] h-10 bg-gray-200"></div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold font-heading">Trending</span>
                        <span className="text-sm uppercase tracking-[0.05em] text-gray-500">on Zomato</span>
                    </div>
                    <div className="hidden md:block w-[1px] h-10 bg-gray-200"></div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold font-heading">Featured</span>
                        <span className="text-sm uppercase tracking-[0.05em] text-gray-500">Best Matcha in Mumbai</span>
                    </div>
                </div>

                <div className="mb-16 text-center flex flex-col items-center">
                    <span className="text-sm uppercase tracking-[0.15em] text-neutral-700 font-bold mb-2">Words from our Community</span>
                    <h2 className="text-4xl text-black font-heading">Loved by Bandra</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOKAI_DATA.reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-warm-grey p-10 rounded-[2px] flex flex-col items-center text-center shadow-sm"
                        >
                            <div className="flex gap-1 mb-5 text-mocha">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 1} />
                                ))}
                            </div>
                            <p className="font-heading italic mb-6 text-xl leading-relaxed text-dark-black">
                                &quot;{review.text}&quot;
                            </p>
                            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                                — {review.user}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
