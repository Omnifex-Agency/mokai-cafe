"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants: Variants = {
        default: {
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            backgroundColor: "#A67B5B",
            border: "none",
            height: 12,
            width: 12,
            transition: {
                type: "spring",
                mass: 0.2, // Very light and fast
                stiffness: 800,
                damping: 25
            }
        },
        hover: {
            height: 60,
            width: 60,
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            backgroundColor: "rgba(166, 123, 91, 0.1)",
            border: "1px solid #A67B5B",
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
            variants={variants}
            animate={cursorVariant}
        />
    );
}
