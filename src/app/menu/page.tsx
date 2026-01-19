"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MOKAI_DATA } from "@/data/mokai";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
    name: string;
    price: string;
    description: string;
    tags: string[];
};

type SubCategoryData = {
    [subCategory: string]: MenuItem[];
};

type MenuData = {
    [mainCategory: string]: SubCategoryData;
};

// Cast to correct type since we updated the data file structure
const MENU_DATA = MOKAI_DATA.menu as unknown as MenuData;
const CATEGORIES = Object.keys(MENU_DATA);

const FILTERS = ["All", "Vegan", "GF", "Bestseller"];

function MenuContent() {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam && CATEGORIES.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    // Get current main category data (Map of subcats -> items)
    const currentSubCats = MENU_DATA[activeCategory] || {};

    return (
        <main className="pt-36 min-h-screen bg-rice-paper pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="block text-sm uppercase tracking-[0.15em] text-mocha font-bold mb-4">Taste of Tokyo in Bandra</span>
                    <h1 className="text-4xl md:text-5xl font-heading text-dark-black">The Menu</h1>
                </div>

                {/* Category Navigation (Horizontal Scroll) */}
                <div className="flex overflow-x-auto gap-8 pb-4 mb-10 justify-start md:justify-center border-b border-gray-100 no-scrollbar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                // Optional: update URL? No, lets keep it simple.
                            }}
                            className={`pb-2 text-[1.1rem] whitespace-nowrap transition-all duration-300 border-b-2 
                                ${activeCategory === cat
                                    ? 'text-dark-black border-mocha font-heading font-bold'
                                    : 'text-neutral-400 border-transparent font-body hover:text-neutral-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-3 mb-16 flex-wrap">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 rounded-full border text-xs uppercase tracking-[0.05em] transition-all duration-200
                                ${activeFilter === filter
                                    ? 'bg-dark-black text-white border-dark-black'
                                    : 'bg-transparent text-neutral-500 border-gray-200 hover:border-gray-400'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="flex flex-col gap-16"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Iterate over Sub Categories */}
                            {Object.entries(currentSubCats).map(([subCatName, items]) => {
                                // Filter items in this subcategory
                                const visibleItems = items.filter(item => {
                                    if (activeFilter === "All") return true;
                                    // Handle logic for tags. Some tags might be abbreviations in data but filters are full words?
                                    // User filters: "All", "Vegan", "GF", "Bestseller"
                                    // Data tags: "Vegan", "GF", "Bestseller", "Veg", "Non-Veg", "New", "Weekend"
                                    return item.tags && item.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()); // Simple case insensitive match
                                });

                                if (visibleItems.length === 0) return null;

                                return (
                                    <div key={subCatName} className="mb-12 last:mb-0">
                                        <h2 className="text-2xl font-heading text-mocha mb-8 pl-2 border-l-4 border-mocha">{subCatName}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                            {visibleItems.map((item) => {
                                                if (item.price === "Info") {
                                                    return (
                                                        <div key={item.name} className="col-span-1 md:col-span-2 -mt-4 mb-2 pb-4 border-b border-gray-100 flex flex-col gap-1">
                                                            <span className="text-xs font-bold tracking-wider text-mocha uppercase">{item.name}</span>
                                                            <p className="text-sm text-neutral-500 italic">{item.description}</p>
                                                        </div>
                                                    );
                                                }
                                                return (
                                                    <div key={item.name} className="pb-6 border-b border-gray-100 flex flex-col gap-2 break-inside-avoid">
                                                        <div className="flex justify-between items-baseline">
                                                            <h3 className="text-xl font-heading text-dark-black">{item.name}</h3>
                                                            <span className="font-semibold text-mocha text-[1.1rem] whitespace-nowrap ml-4">{item.price}</span>
                                                        </div>
                                                        <p className="text-neutral-600 text-[0.95rem] leading-relaxed">{item.description}</p>
                                                        {item.tags && item.tags.length > 0 && (
                                                            <div className="flex gap-2 mt-2 flex-wrap">
                                                                {item.tags.map(tag => (
                                                                    <span key={tag} className="text-[0.65rem] text-neutral-400 uppercase tracking-[0.05em] border border-gray-100 px-1.5 py-0.5 rounded">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Empty State Logic Check */}
                            {Object.entries(currentSubCats).every(([_, items]) =>
                                items.filter(item => activeFilter === "All" || item.tags?.some(t => t.toLowerCase() === activeFilter.toLowerCase())).length === 0
                            ) && (
                                    <div className="text-center py-16 text-neutral-400">
                                        <p>No items found for filter "{activeFilter}" in {activeCategory}.</p>
                                    </div>
                                )}

                        </motion.div>
                    </AnimatePresence>
                </motion.div>


            </div>
        </main>
    );
}

export default function MenuPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-rice-paper pt-36 text-center">Loading menu...</div>}>
            <MenuContent />
        </Suspense>
    );
}
