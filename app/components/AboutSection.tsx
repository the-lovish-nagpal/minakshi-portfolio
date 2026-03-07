"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "./Animations";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen overflow-hidden flex flex-col"
            style={{
                background: "linear-gradient(160deg, #ffffff 0%, #f9f9f5 60%, #f0eee0 100%)",
            }}
        >
            {/* ── Nav Bar ── */}
            <FadeIn>
                <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">
                        Portfolio Vol.2
                    </span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase hidden sm:block">
                        Work Archieve
                    </span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">
                        Creative Designer
                    </span>
                </nav>
            </FadeIn>

            <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 px-8 md:px-16 py-12 md:py-20">
                {/* Section number */}
                <FadeInLeft className="hidden md:flex flex-col justify-center">
                    <span className="font-display text-6xl lg:text-8xl text-black leading-none">02</span>
                </FadeInLeft>

                {/* Photo */}
                <FadeIn delay={0.2} className="w-full md:w-[300px] lg:w-[360px] flex-shrink-0 flex items-center">
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[540px] shadow-2xl overflow-hidden">
                        <Image
                            src="/images/minakshi-about.jpg"
                            alt="Minakshi Banerjee"
                            fill
                            sizes="(max-width: 768px) 100vw, 360px"
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                        />
                    </div>
                </FadeIn>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center">
                    <FadeInLeft className="md:hidden">
                        <span className="font-display text-5xl text-black leading-none mb-4">02</span>
                    </FadeInLeft>

                    <FadeInRight delay={0.3}>
                        <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black leading-[0.9] tracking-tight uppercase">
                            About<br />Me
                        </h2>
                    </FadeInRight>

                    <FadeIn delay={0.4}>
                        <div className="flex justify-end mt-2 mb-6">
                            <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={2.5} />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <p className="font-display text-base md:text-lg lg:text-xl text-black tracking-wide uppercase leading-snug">
                            Creative by nature.<br />Strategic by mind.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="mt-6 text-sm md:text-base text-black/80 leading-relaxed max-w-lg font-body" style={{ textAlign: "justify" }}>
                            With over 1 year of experience, I specialise in branding, digital
                            content, and visual communication. My work blends aesthetics with
                            clarity to help brands connect with their audiences. I thrive in
                            both collaborative and independent environments, always striving to
                            craft design solutions that are not just beautiful — but effective.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
