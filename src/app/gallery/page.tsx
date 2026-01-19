"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 20 }, (_, i) => `/gallery/img${i + 1}.jpg`);

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function GalleryPage() {
    const [index, setIndex] = useState<number | null>(null);

    const nextImage = useCallback(() => {
        if (index === null) return;
        setIndex((index + 1) % images.length);
    }, [index]);

    const prevImage = useCallback(() => {
        if (index === null) return;
        setIndex((index - 1 + images.length) % images.length);
    }, [index]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (index === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setIndex(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index, nextImage, prevImage]);

    return (
        <main className="pt-[120px] pb-20 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-[60px]">
                    <h1 className="text-4xl font-heading mb-4">Vibes</h1>
                    <p className="text-lg text-neutral-600">A look inside Mokai.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative h-[300px] rounded-md overflow-hidden cursor-pointer group"
                            onClick={() => setIndex(i)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${i}`}
                                fill
                                className="object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium border border-white px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {index !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 col-span-full z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
                            onClick={() => setIndex(null)}
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 sm:block hidden"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 sm:block hidden"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={index}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[index]}
                                alt={`Gallery View ${index}`}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />

                            {/* Mobile Navigation overlay (invisible touch targets or visible small arrows) */}
                            <div className="absolute inset-0 flex sm:hidden">
                                <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); prevImage(); }} />
                                <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); }} /> {/* Center tap does nothing or toggle controls */}
                                <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); nextImage(); }} />
                            </div>
                        </motion.div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-medium">
                            {index + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
