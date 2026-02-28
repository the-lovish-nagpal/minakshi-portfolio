"use client";

import { FadeIn, FadeInLeft, ScaleIn, StaggerContainer, StaggerItem } from "./Animations";

interface SelectedWorksProps {
    sectionNumber: string;
    category: string;
    bgColor: string;
    textColor?: string;
    projectCount?: number;
}

export default function SelectedWorksSection({
    sectionNumber,
    category,
    bgColor,
    textColor = "#000",
    projectCount = 3,
}: SelectedWorksProps) {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col" style={{ background: bgColor }}>
            {/* Header */}
            <div className="relative z-10 flex items-start justify-between px-8 md:px-16 pt-8 gap-4">
                <FadeInLeft>
                    <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase" style={{ color: textColor }}>
                        Selected Works
                    </h2>
                </FadeInLeft>
                <FadeIn delay={0.2}>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className="font-display text-sm md:text-base tracking-wider uppercase" style={{ color: textColor }}>Portfolio Vol.2</span>
                        <span className="font-display text-sm md:text-base tracking-wider uppercase" style={{ color: textColor }}>Work Archieve</span>
                        <span className="font-display text-4xl md:text-6xl leading-none" style={{ color: textColor }}>{sectionNumber}</span>
                    </div>
                </FadeIn>
            </div>

            {category && (
                <FadeIn>
                    <div className="relative z-10 px-8 md:px-16 mt-2">
                        <span className="font-display text-base md:text-lg tracking-wider uppercase" style={{ color: textColor }}>{category}</span>
                    </div>
                </FadeIn>
            )}

            {/* Works grid */}
            <StaggerContainer className={`relative z-10 flex-1 flex items-center px-4 md:px-8 py-6 md:py-10`}>
                <div className={`w-full grid gap-4 md:gap-6 ${projectCount <= 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"}`}>
                    {Array.from({ length: projectCount }).map((_, i) => (
                        <StaggerItem key={i}>
                            <div
                                className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg photo-placeholder"
                                style={{
                                    background: `linear-gradient(135deg, ${textColor === "#000" ? "#ddd" : "#444"} 0%, ${textColor === "#000" ? "#bbb" : "#333"} 100%)`,
                                    color: textColor === "#000" ? "#888" : "#777",
                                }}
                            >
                                <span className="px-4 text-xs">Work Sample {i + 1}</span>
                            </div>
                        </StaggerItem>
                    ))}
                </div>
            </StaggerContainer>
        </section>
    );
}
