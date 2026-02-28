"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (you could tie this to actual image loading in the future)
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Optional: scroll to top on reload to ensure clean animation sequence
            window.scrollTo(0, 0);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-yellow-brand"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Subtle grain overlay for the preloader too */}
                    <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

                    <div className="overflow-hidden">
                        <motion.h1
                            className="font-display text-4xl sm:text-6xl md:text-8xl text-black uppercase tracking-tight"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        >
                            Minakshi
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            className="font-display text-4xl sm:text-6xl md:text-8xl text-black uppercase tracking-tight"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        >
                            Banerjee
                        </motion.h1>
                    </div>

                    <motion.div
                        className="mt-8 text-sm font-display tracking-widest text-black/60 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        Loading Portfolio Vol. 2
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
