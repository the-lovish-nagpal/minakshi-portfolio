"use client";

import { ArrowDownRight } from "lucide-react";
import { FadeIn, FadeInRight, StaggerContainer, StaggerItem } from "./Animations";

export default function CoreSkillsSection() {
    const skills = [
        "UI Designs",
        "Branding &\nIdentity Design",
        "Digital\nIllustrations",
        "Creative\nDirection",
        "Social Media\nVisuals",
    ];

    return (
        <section
            id="core-skills"
            className="relative w-full min-h-screen overflow-hidden flex flex-col"
            style={{
                background: "linear-gradient(160deg, #fff 0%, #f9f9f5 60%, #f0eee0 100%)",
            }}
        >
            {/* Nav */}
            <FadeIn>
                <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">Portfolio Vol.2</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase hidden sm:block">Work Archieve</span>
                    <span className="font-display text-sm md:text-base tracking-wider text-black uppercase">Creative Designer</span>
                </nav>
            </FadeIn>

            <div className="relative z-10 flex-1 flex flex-col md:flex-row px-8 md:px-16 py-8 md:py-12 gap-8">
                {/* Left side */}
                <div className="flex-1">
                    <FadeIn>
                        <div className="flex items-start justify-between mb-12 md:mb-16">
                            <span className="font-display text-5xl md:text-7xl text-black leading-none">03</span>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
                        {skills.map((skill, i) => (
                            <StaggerItem key={i}>
                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-black uppercase leading-tight tracking-tight whitespace-pre-line">
                                    {skill}
                                </h3>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Right side */}
                <div className="md:w-[45%] flex flex-col items-end justify-between">
                    <FadeInRight delay={0.2}>
                        <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black leading-[0.9] tracking-tight uppercase text-right">
                            Core<br />Skill
                        </h2>
                    </FadeInRight>

                    <FadeIn delay={0.5}>
                        <div className="flex items-center gap-4 mt-auto">
                            <svg viewBox="0 0 200 120" className="w-40 h-24 md:w-56 md:h-32 lg:w-72 lg:h-40" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="60" rx="95" ry="55" />
                                <circle cx="100" cy="60" r="35" fill="white" />
                                <circle cx="100" cy="60" r="12" fill="black" />
                                <path d="M100 30 L106 54 L130 60 L106 66 L100 90 L94 66 L70 60 L94 54 Z" fill="white" />
                            </svg>
                            <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={2.5} />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
