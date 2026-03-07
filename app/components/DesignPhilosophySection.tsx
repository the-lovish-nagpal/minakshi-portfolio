"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "./Animations";

export default function DesignPhilosophySection() {
    return (
        <section
            id="design-philosophy"
            className="relative w-full min-h-screen overflow-hidden flex flex-col"
            style={{
                background: "linear-gradient(160deg, #fff 0%, #f9f9f5 60%, #f0eee0 100%)",
            }}
        >
            <FadeIn>
                <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">Portfolio Vol.2</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase hidden sm:block">Work Archieve</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">Creative Designer</span>
                </nav>
            </FadeIn>

            <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-8 md:px-16 py-10 md:py-16 gap-8 lg:gap-12">
                <FadeInLeft className="lg:w-[35%] flex items-center">
                    <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1] tracking-tight uppercase">
                        Design is not just what it looks like and feels like. Design is how it works.
                    </blockquote>
                </FadeInLeft>

                <FadeIn delay={0.2} className="lg:w-[30%] flex items-stretch">
                    <div className="relative w-full min-h-[350px] md:min-h-[450px] rounded-sm shadow-lg overflow-hidden" style={{ backgroundColor: "#e8e4dc" }}>
                        <Image
                            src="/images/wellness-city-brochure.jpg"
                            alt="The Wellness City - PLPB Brochure Design"
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                    </div>
                </FadeIn>

                <div className="lg:w-[35%] flex flex-col justify-between gap-6">
                    <FadeInRight delay={0.3}>
                        <h2 className="font-display text-3xl md:text-4xl text-black uppercase tracking-tight">
                            Design<br />Philosophy
                        </h2>
                        <ArrowDownRight className="w-8 h-8 text-black mt-2" strokeWidth={2.5} />
                    </FadeInRight>

                    <FadeIn delay={0.4}>
                        <div className="w-32 h-40 md:w-40 md:h-48 rounded-sm shadow-md self-end overflow-hidden relative">
                            <Image
                                src="/images/minakshi-about.jpg"
                                alt="Minakshi Banerjee"
                                fill
                                sizes="160px"
                                style={{ objectFit: "cover", objectPosition: "top center" }}
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <p className="text-sm md:text-base text-black/80 font-body leading-relaxed italic" style={{ textAlign: "justify" }}>
                            I believe good design is more than visuals — it&apos;s about solving
                            problems, enhancing experiences, and creating impact.
                        </p>
                    </FadeIn>

                    <FadeInRight delay={0.6}>
                        <span className="font-display text-5xl md:text-7xl text-black leading-none self-end">07</span>
                    </FadeInRight>
                </div>
            </div>
        </section>
    );
}
