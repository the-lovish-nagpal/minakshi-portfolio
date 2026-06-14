"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, ScaleIn } from "./Animations";

export default function ClientsSection() {
    return (
        <section id="clients" className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col">
            <div className="grain-overlay" />

            <FadeIn>
                <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
                    <span className="font-display text-sm md:text-base tracking-wider text-white/60 uppercase">Portfolio Vol.2</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-white/60 uppercase hidden sm:block">Work Archieve</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-white/60 uppercase">Creative Designer</span>
                </nav>
            </FadeIn>

            <div className="relative z-10 flex-1 flex flex-col px-8 md:px-16 py-8 md:py-12">
                <div className="flex items-start justify-between mb-8">
                    <FadeInLeft>
                        <span className="font-display text-5xl md:text-7xl text-white/40 leading-none">16</span>
                    </FadeInLeft>
                    <FadeIn delay={0.2}>
                        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight uppercase text-center flex-1">
                            Clients &<br />Collaborations
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8 flex-1">
                    {["/images/client-1.jpg", "/images/client-2.jpg", "/images/client-3.jpg", "/images/client-4.jpg", "/images/client-5.jpg"].map((src, i) => (
                        <ScaleIn key={i} delay={(i + 1) * 0.15}>
                            <div className="aspect-square rounded-lg shadow-lg relative overflow-hidden">
                                <Image src={src} alt={`Client Work ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 20vw" style={{ objectFit: "cover" }} />
                            </div>
                        </ScaleIn>
                    ))}
                </div>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <div className="max-w-md">
                            <p className="text-white/80 text-sm md:text-base font-body leading-relaxed mb-4" style={{ textAlign: "justify" }}>
                                I&apos;ve worked with startups, agencies, and independent brands from
                                various industries, including fashion, YouTube tech, hospitality,
                                and education. Some clients include:
                            </p>
                            <h3 className="font-display text-lg md:text-xl text-red-400 uppercase tracking-wide">
                                Startups, Agencies, and<br />Independent Brands
                            </h3>
                        </div>
                        <ArrowDownRight className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
