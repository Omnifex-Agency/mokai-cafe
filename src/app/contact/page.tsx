"use client";

import { MOKAI_DATA } from "@/data/mokai";
import { MessageCircle, MapPin, Clock, Info } from "lucide-react";
import { Button } from "@mui/material";

export default function ContactPage() {
    return (
        <main className="bg-rice-paper min-h-screen pt-36 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-heading text-dark-black mb-6">Visit Us</h1>
                    <p className="text-xl text-neutral-600 max-w-[600px] mx-auto leading-relaxed">
                        Tucked away in the quiet lanes of Bandra Ranwar. Come for the coffee, stay for the calm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Essential Info */}
                    <div className="flex flex-col gap-10">

                        {/* Address Card */}
                        <div className="p-8 bg-white border border-gray-200 rounded-[2px] shadow-sm">
                            <div className="flex items-center gap-3 mb-5">
                                <MapPin size={24} className="text-mocha" />
                                <h2 className="text-xl font-heading font-bold text-dark-black m-0">Location</h2>
                            </div>
                            <p className="text-[1.1rem] leading-[1.6] text-neutral-800 mb-6">
                                New House, 54, Chapel Rd,<br />
                                Ranwar, Bandra West,<br />
                                Mumbai, Maharashtra 400050
                            </p>
                            <Button
                                href="https://goo.gl/maps/example"
                                target="_blank"
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#111111',
                                    color: '#fff',
                                    fontFamily: 'var(--font-heading)',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    padding: '10px 24px',
                                    '&:hover': {
                                        backgroundColor: '#333'
                                    }
                                }}
                            >
                                Get Directions
                            </Button>
                        </div>

                        {/* Hours & Tips */}
                        <div className="p-8 bg-warm-grey rounded-[2px]">
                            <div className="flex items-center gap-3 mb-5">
                                <Clock size={24} className="text-mocha" />
                                <h2 className="text-xl font-heading font-bold text-dark-black m-0">Hours & Tips</h2>
                            </div>
                            <div className="mb-6">
                                <strong className="block text-sm uppercase tracking-[0.1em] mb-2 font-bold text-neutral-800">Open Daily</strong>
                                <p className="text-[1.1rem] text-dark-black">8:00 AM — 11:00 PM</p>
                            </div>
                            <div className="border-t border-black/10 pt-6">
                                <div className="flex gap-3 items-start">
                                    <Info size={20} className="text-neutral-500 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-sm font-bold mb-1 text-neutral-800">Best Time to Visit</strong>
                                        <p className="text-[0.95rem] text-neutral-600 leading-relaxed max-w-[400px]">
                                            Weekdays between 2 PM - 5 PM differ a quieter vibe perfect for reading. Weekends are lively and popular for brunch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Actions */}
                        <div>
                            <h3 className="text-xl font-heading mb-4 font-bold text-dark-black">Need to reach us?</h3>
                            <div className="flex gap-4 flex-wrap">
                                <Button
                                    href="https://wa.me/919876543210"
                                    variant="outlined"
                                    className="flex-1"
                                    startIcon={<MessageCircle size={18} />}
                                    sx={{
                                        flex: 1,
                                        borderColor: '#111111',
                                        color: '#111111',
                                        fontFamily: 'var(--font-body)',
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: '#111111',
                                            backgroundColor: '#f5f5f5'
                                        }
                                    }}
                                >
                                    WhatsApp
                                </Button>
                                <Button
                                    href="tel:+919876543210"
                                    variant="outlined"
                                    className="flex-1"
                                    sx={{
                                        flex: 1,
                                        borderColor: '#111111',
                                        color: '#111111',
                                        fontFamily: 'var(--font-body)',
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: '#111111',
                                            backgroundColor: '#f5f5f5'
                                        }
                                    }}
                                >
                                    Call Us
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Map */}
                    <div className="h-[600px] sticky top-32">
                        <div className="w-full h-full bg-gray-200 rounded-[2px] overflow-hidden relative">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src="https://maps.google.com/maps?q=Mokai%20Cafe%20Bandra%20West&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                title="Mokai Cafe Map"
                                className="grayscale contrast-125 pointer-events-none md:pointer-events-auto"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
