"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { MOKAI_DATA } from "@/data/mokai";

export default function Footer() {
    return (
        <footer className="bg-warm-grey pt-20 pb-5 mt-auto">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-16">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-bold tracking-tight font-heading">{MOKAI_DATA.name}</h2>
                        <p className="text-neutral-600 max-w-[300px]">
                            A slice of Tokyo in Bandra. Specialty coffee, asian fusion, and
                            immaculate vibes.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Instagram" className="flex justify-center items-center w-10 h-10 rounded-full border border-black/10 transition-all hover:bg-dark-black hover:text-white hover:border-dark-black">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="flex justify-center items-center w-10 h-10 rounded-full border border-black/10 transition-all hover:bg-dark-black hover:text-white hover:border-dark-black">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg mb-6 font-heading font-semibold">Explore</h3>
                        <ul className="list-none flex flex-col gap-3">
                            <li className="hover:text-mocha transition-colors"><Link href="/">Home</Link></li>
                            <li className="hover:text-mocha transition-colors"><Link href="/menu">Menu</Link></li>
                            <li className="hover:text-mocha transition-colors"><Link href="/about">About Us</Link></li>
                            <li className="hover:text-mocha transition-colors"><Link href="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg mb-2 font-heading font-semibold">Visit Us</h3>
                        <div className="flex gap-3 text-neutral-600 items-start">
                            <MapPin size={18} className="shrink-0 mt-1" />
                            <p>{MOKAI_DATA.location.address}</p>
                        </div>
                        <div className="flex gap-3 text-neutral-600 items-start">
                            <Phone size={18} className="shrink-0 mt-1" />
                            <p>{MOKAI_DATA.contact.phone}</p>
                        </div>
                        <div className="flex gap-3 text-neutral-600 items-start">
                            <Mail size={18} className="shrink-0 mt-1" />
                            <p>{MOKAI_DATA.contact.email}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/5 pt-5 text-center text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} Mokai Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
