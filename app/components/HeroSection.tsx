"use client";

import { Eye, ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "./Animations";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen bg-yellow-brand overflow-hidden flex flex-col"
        >
            {/* ── SVG Grain Filter (hidden) ── */}
            <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                    <filter id="grain-filter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                            result="noise"
                        />
                        <feColorMatrix
                            type="saturate"
                            values="0"
                            in="noise"
                            result="monoNoise"
                        />
                        <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
                    </filter>
                </defs>
            </svg>

            {/* ── Nav Bar ── */}
            <FadeIn>
                <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">
                        Graphic Designer
                    </span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase hidden sm:block">
                        Work Archieve
                    </span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase font-bold">
                        Minakshi Banerjee
                    </span>
                </nav>
            </FadeIn>

            {/* ── Swoosh / Wave Graphic ── */}
            <div className="swoosh-container pointer-events-none">
                <svg
                    viewBox="0 0 1200 700"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="swoosh-grain">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="1.5"
                                numOctaves="4"
                                seed="2"
                                stitchTiles="stitch"
                                result="noise"
                            />
                            <feColorMatrix
                                type="saturate"
                                values="0"
                                in="noise"
                                result="monoNoise"
                            />
                            <feComposite
                                in="monoNoise"
                                in2="SourceGraphic"
                                operator="in"
                                result="clippedNoise"
                            />
                            <feBlend
                                in="SourceGraphic"
                                in2="clippedNoise"
                                mode="screen"
                                result="grainy"
                            />
                        </filter>
                    </defs>

                    <path
                        d="
              M 580 720
              C 540 600, 420 400, 380 320
              C 340 240, 360 160, 440 120
              C 520 80, 640 100, 720 140
              C 800 180, 860 240, 920 280
              C 1000 340, 1100 360, 1250 340
            "
                        stroke="#1a1a1a"
                        strokeWidth="160"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#swoosh-grain)"
                    />
                    <path
                        d="
              M 600 730
              C 570 640, 480 480, 440 380
              C 400 280, 420 200, 480 160
            "
                        stroke="#1a1a1a"
                        strokeWidth="80"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.3"
                        filter="url(#swoosh-grain)"
                    />
                </svg>
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 flex-1 flex flex-col justify-between px-8 md:px-16 pb-10">
                <FadeInRight delay={0.3}>
                    <div className="flex justify-end mt-8 md:mt-12">
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-black leading-none tracking-tight">
                            VOL. 02
                        </h2>
                    </div>
                </FadeInRight>

                <div className="flex items-end justify-between mt-auto">
                    <FadeInLeft delay={0.5}>
                        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] text-black leading-[0.9] tracking-tight uppercase">
                            Creative
                            <br />
                            Portfolio
                        </h1>
                    </FadeInLeft>

                    <FadeIn delay={0.7}>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center">
                                <Eye className="w-5 h-5 md:w-7 md:h-7 text-black" />
                            </div>
                            <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={2.5} />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
