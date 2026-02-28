"use client";

import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "./Animations";

export default function CreativeProcessSection() {
    const steps = [
        { title: "Discovery", desc: "Understand the brand, goals, and audience" },
        { title: "Research", desc: "Market trends and visual benchmarking" },
        { title: "Ideation", desc: "Brainstorming concepts and creative directions" },
        { title: "Design", desc: "Bringing ideas to life with tools" },
        { title: "Feedback", desc: "Refining based on collaboration" },
        { title: "Delivery", desc: "High-quality files, ready-to-use assets, and documentation" },
    ];

    return (
        <section
            id="creative-process"
            className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col"
        >
            <div className="grain-overlay" />

            <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                {/* Left — photo grid */}
                <FadeInLeft className="md:w-[55%] p-4 md:p-6">
                    <div className="grid grid-cols-3 gap-2 h-[300px] md:h-[55vh]">
                        <div className="col-span-1 row-span-2 photo-placeholder photo-placeholder-dark rounded-sm">
                            <span className="text-xs px-2">Project Photo 1</span>
                        </div>
                        <div className="col-span-1 photo-placeholder photo-placeholder-dark rounded-sm">
                            <span className="text-xs px-2">Photo 2</span>
                        </div>
                        <div className="col-span-1 row-span-2 photo-placeholder photo-placeholder-dark rounded-sm">
                            <span className="text-xs px-2">Photo 3</span>
                        </div>
                        <div className="col-span-1 photo-placeholder photo-placeholder-dark rounded-sm">
                            <span className="text-xs px-2">Photo 4</span>
                        </div>
                    </div>
                </FadeInLeft>

                <FadeInRight delay={0.2} className="md:w-[45%] p-4 md:p-6 flex items-stretch">
                    <div className="photo-placeholder photo-placeholder-dark w-full rounded-sm min-h-[250px] md:min-h-0">
                        <span className="px-4">Brand Showcase<br />Image</span>
                    </div>
                </FadeInRight>
            </div>

            {/* Bottom — process steps */}
            <div className="relative z-10 px-8 md:px-16 pb-8 md:pb-12">
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
                    {steps.map((step, i) => (
                        <StaggerItem key={i}>
                            <h4 className="font-display text-sm md:text-base text-yellow-brand uppercase tracking-wide">
                                {step.title}
                            </h4>
                            <p className="text-yellow-brand/70 text-xs md:text-sm mt-1 font-body leading-snug" style={{ textAlign: "justify" }}>
                                {step.desc}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.3}>
                    <div className="flex items-end justify-between">
                        <div className="flex items-baseline gap-4">
                            <span className="font-display text-4xl md:text-6xl text-yellow-brand leading-none">04</span>
                            <div>
                                <span className="font-display text-lg md:text-2xl text-yellow-brand uppercase block">My</span>
                                <span className="font-display text-lg md:text-2xl text-yellow-brand uppercase block">Creative</span>
                            </div>
                        </div>
                        <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-yellow-brand leading-[0.85] tracking-tight uppercase text-right">
                            Process
                        </h2>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
