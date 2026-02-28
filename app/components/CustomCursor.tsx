"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        // Only run on desktop devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a clickable element
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            ) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Don't render cursor on mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-yellow-brand pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-yellow-brand pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    mass: 0.5,
                }}
            />
        </>
    );
}
