"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when scrolled down half a screen
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9000] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-yellow-brand shadow-lg hover:bg-black/80 transition-colors focus:outline-none"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
