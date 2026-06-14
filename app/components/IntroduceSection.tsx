"use client";

import Image from "next/image";
import { FadeIn, FadeInLeft, FadeInRight } from "./Animations";

export default function IntroduceSection() {
    return (
        <section
            id="introduce"
            className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col py-10 md:py-16"
        >
            <div className="grain-overlay" />

            {/* ── Top label ── */}
            <FadeIn>
                <div className="relative z-10 px-8 md:px-16">
                    <span className="font-display text-sm md:text-base tracking-wider text-yellow-brand uppercase">
                        Portfolio Vol.2
                    </span>
                </div>
            </FadeIn>

            {/* ── Main Content ── */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-12 px-8 md:px-16 mt-6 md:mt-10">
                {/* Left column — text */}
                <div className="flex-1 flex flex-col justify-between">
                    <FadeInLeft delay={0.2}>
                        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-brand leading-[0.95] tracking-tight uppercase">
                            Minakshi
                            <br />
                            Banerjee
                        </h2>
                    </FadeInLeft>

                    <FadeInLeft delay={0.4}>
                        <div className="mt-8 md:mt-12">
                            <span className="font-display text-3xl md:text-5xl text-yellow-brand block leading-none">
                                01
                            </span>
                            <h3 className="font-display text-2xl md:text-4xl text-yellow-brand uppercase mt-1 tracking-wide">
                                Introduce
                            </h3>
                        </div>
                    </FadeInLeft>

                    <FadeIn delay={0.5}>
                        <p className="mt-6 md:mt-8 text-yellow-brand/90 text-sm md:text-base leading-relaxed max-w-xl font-body" style={{ textAlign: "justify" }}>
                            I am a passionate Graphic Designer with two years of professional
                            experience creating visually engaging and brand-consistent designs
                            across digital and print media. My work combines creativity with
                            strategic thinking to communicate messages effectively and elevate
                            brand identity. Over the past year, I&apos;ve developed strong skills in
                            Adobe Creative Suite—including Photoshop, Illustrator, and
                            InDesign—while collaborating on projects that range from marketing
                            materials and social media graphics to logo design and visual
                            branding. I&apos;m dedicated to continuous learning, staying current with
                            design trends, and delivering high-quality creative solutions that
                            make an impact.
                        </p>
                    </FadeIn>
                </div>

                {/* Right column — photo */}
                <FadeInRight delay={0.3} className="w-full md:w-[380px] lg:w-[440px] flex-shrink-0">
                    <div className="relative w-full h-[400px] md:h-full border-2 border-yellow-brand/30 p-1">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/images/minakshi-introduce.jpg"
                                alt="Minakshi Banerjee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 440px"
                                style={{ objectFit: "cover", objectPosition: "top center" }}
                            />
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </section>
    );
}
