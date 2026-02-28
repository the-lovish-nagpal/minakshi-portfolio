"use client";

import { FadeIn, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from "./Animations";

export default function ImpactSection() {
    const impacts = [
        { num: "01", text: "Delivered design assets that supported 3 successful product launches" },
        { num: "02", text: "Created over 100+ visual content pieces for social campaigns" },
        { num: "03", text: "Increased user engagement by 40% through redesigned interface" },
        { num: "04", text: "Improved brand recognition with cohesive visual identity" },
    ];

    return (
        <section id="impact" className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col">
            <div className="grain-overlay" />
            <div
                className="absolute top-0 left-1/4 w-1/2 h-32 opacity-20 blur-3xl pointer-events-none z-0"
                style={{ background: "radial-gradient(circle, #ff3333, transparent)" }}
            />

            <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-8 md:px-16 py-10 md:py-16 gap-8">
                {/* Left side */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <FadeInLeft>
                        <div>
                            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-yellow-brand leading-[0.85] tracking-tight uppercase">Impact</h2>
                            <span className="font-display text-5xl md:text-7xl text-yellow-brand/50 ml-4">16</span>
                        </div>
                    </FadeInLeft>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <ScaleIn delay={0.2}>
                            <div className="aspect-square rounded-lg photo-placeholder photo-placeholder-dark">
                                <span className="text-xs px-2">Illustration 1</span>
                            </div>
                        </ScaleIn>
                        <ScaleIn delay={0.3}>
                            <div className="aspect-square rounded-lg photo-placeholder photo-placeholder-dark">
                                <span className="text-xs px-2">Illustration 2</span>
                            </div>
                        </ScaleIn>
                    </div>

                    <StaggerContainer className="mt-8 space-y-4">
                        {impacts.slice(2).map((item) => (
                            <StaggerItem key={item.num}>
                                <div className="flex items-start gap-4">
                                    <span className="font-display text-2xl md:text-3xl text-yellow-brand leading-none">{item.num}</span>
                                    <p className="font-display text-sm md:text-base text-yellow-brand uppercase leading-snug tracking-wide max-w-xs">{item.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Right side */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <StaggerContainer className="space-y-4">
                        {impacts.slice(0, 2).map((item) => (
                            <StaggerItem key={item.num}>
                                <div className="flex items-start gap-4">
                                    <span className="font-display text-2xl md:text-3xl text-yellow-brand leading-none">{item.num}</span>
                                    <p className="font-display text-sm md:text-base text-yellow-brand uppercase leading-snug tracking-wide max-w-xs">{item.text}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <ScaleIn delay={0.4}>
                            <div className="aspect-square rounded-lg photo-placeholder photo-placeholder-dark">
                                <span className="text-xs px-2">Illustration 3</span>
                            </div>
                        </ScaleIn>
                        <ScaleIn delay={0.5}>
                            <div className="aspect-square rounded-lg photo-placeholder photo-placeholder-dark">
                                <span className="text-xs px-2">Illustration 4</span>
                            </div>
                        </ScaleIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <div className="flex items-end justify-between mt-8">
                            <svg viewBox="0 0 200 120" className="w-16 h-10 md:w-20 md:h-12" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="60" rx="95" ry="55" fill="#F5E027" />
                                <circle cx="100" cy="60" r="35" fill="black" />
                                <circle cx="100" cy="60" r="12" fill="#F5E027" />
                                <path d="M100 30 L106 54 L130 60 L106 66 L100 90 L94 66 L70 60 L94 54 Z" fill="black" />
                            </svg>
                            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl text-yellow-brand leading-[0.85] tracking-tight uppercase">& Results</h2>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
