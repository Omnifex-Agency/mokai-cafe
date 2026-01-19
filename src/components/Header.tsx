"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        // Check initial scroll
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Force solid header on pages other than home
    const isHome = pathname === "/";
    const isTransparent = !scrolled && isHome;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTransparent
                ? "bg-white/10 backdrop-blur-md py-3 border-b border-white/10 shadow-sm"
                : "bg-rice-paper/95 backdrop-blur-md shadow-sm py-2"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center justify-between">
                <Link href="/" className={`font-heading text-3xl font-bold tracking-tight z-[1001] transition-colors duration-200 ${isTransparent ? 'text-rice-paper' : 'text-dark-black'}`}>
                    MOKAI
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative font-body font-medium text-[0.95rem] transition-colors duration-200 ${isTransparent
                                ? 'text-rice-paper/85 hover:text-rice-paper'
                                : 'text-neutral-600 hover:text-dark-black'
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-mocha rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 z-[1001]">
                    <button
                        className={`md:hidden block bg-transparent border-none cursor-pointer transition-colors duration-200 ${isTransparent ? 'text-rice-paper' : 'text-dark-black'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 w-screen h-screen bg-rice-paper/98 backdrop-blur-md z-[999] flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-center gap-10">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        className="font-heading text-4xl font-medium text-dark-black active:text-mocha transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
