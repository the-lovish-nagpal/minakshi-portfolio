"use client";

import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "./Animations";

interface CreativeOutputProps {
    sectionNumber: string;
    brandColor?: string;
    outputs: { title: string; desc: string }[];
}

export default function CreativeOutputSection({
    sectionNumber,
    brandColor = "#F5E027",
    outputs,
}: CreativeOutputProps) {
    return (
        <section className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col">
            <div className="grain-overlay" />

            <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                <FadeInLeft className="md:w-[55%] p-4 md:p-6">
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[300px] md:h-[55vh]">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="photo-placeholder photo-placeholder-dark rounded-sm">
                                <span className="text-xs px-1">Work {i}</span>
                            </div>
                        ))}
                    </div>
                </FadeInLeft>

                <FadeInRight delay={0.2} className="md:w-[45%] p-4 md:p-6 flex items-stretch">
                    <div className="photo-placeholder photo-placeholder-dark w-full rounded-sm min-h-[250px] md:min-h-0">
                        <span className="px-4">Brand Logo<br />& Showcase</span>
                    </div>
                </FadeInRight>
            </div>

            <div className="relative z-10 px-8 md:px-16 pb-8 md:pb-12">
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
                    {outputs.map((item, i) => (
                        <StaggerItem key={i}>
                            <h4 className="font-display text-sm md:text-base uppercase tracking-wide" style={{ color: brandColor }}>
                                {item.title}
                            </h4>
                            <p className="text-xs md:text-sm mt-1 font-body leading-snug opacity-80" style={{ color: brandColor, textAlign: "justify" }}>
                                {item.desc}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.3}>
                    <div className="flex items-end justify-between">
                        <div className="flex items-baseline gap-4">
                            <span className="font-display text-4xl md:text-6xl leading-none" style={{ color: brandColor }}>
                                {sectionNumber}
                            </span>
                            <div>
                                <span className="font-display text-lg md:text-2xl uppercase block" style={{ color: brandColor }}>My</span>
                                <span className="font-display text-lg md:text-2xl uppercase block" style={{ color: brandColor }}>Creative</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-right" style={{ color: brandColor }}>
                                Output
                            </h2>
                            <svg viewBox="0 0 200 120" className="w-10 h-6 md:w-14 md:h-8" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="60" rx="95" ry="55" fill={brandColor} />
                                <circle cx="100" cy="60" r="35" fill="black" />
                                <circle cx="100" cy="60" r="12" fill={brandColor} />
                                <path d="M100 30 L106 54 L130 60 L106 66 L100 90 L94 66 L70 60 L94 54 Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
