"use client";

import Image from "next/image";
import { FadeIn, FadeInLeft, StaggerContainer, StaggerItem } from "./Animations";

interface SelectedWorksProps {
    sectionNumber: string;
    category: string;
    bgColor: string;
    textColor?: string;
    projectCount?: number;
    images?: string[];
}

export default function SelectedWorksSection({
    sectionNumber,
    category,
    bgColor,
    textColor = "#000",
    projectCount = 3,
    images = [],
}: SelectedWorksProps) {
    const count = images.length > 0 ? images.length : projectCount;
    const catLower = (category || "").toLowerCase();
    const isUIDesign = count <= 3 && catLower.includes("ui") && images.length === 3;

    const isLandscape = catLower.includes("youtube") || catLower.includes("thumbnail");

    return (
        <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col" style={{ background: bgColor }}>
            {/* Header */}
            <div className="relative z-10 flex items-start justify-between px-8 md:px-16 pt-8 gap-4 flex-shrink-0">
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
                <FadeIn className="flex-shrink-0">
                    <div className="relative z-10 px-8 md:px-16 mt-2">
                        <span className="font-display text-base md:text-lg tracking-wider uppercase" style={{ color: textColor }}>{category}</span>
                    </div>
                </FadeIn>
            )}

            {/* Works display */}
            {isUIDesign ? (
                <StaggerContainer className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8 py-4 md:py-8 min-h-0 w-full">
                    {/* Overlapping card layout for UI Designs - matches template */}
                    <div className="w-full relative" style={{ height: "60vh", minHeight: "380px" }}>
                        {/* Left card - behind, to the left */}
                        <StaggerItem className="absolute inset-0">
                            <div
                                className="absolute rounded-lg overflow-hidden"
                                style={{
                                    left: "5%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "38%",
                                    height: "85%",
                                    zIndex: 1,
                                    background: bgColor,
                                }}
                            >
                                <Image
                                    src={images[0]}
                                    alt="Work 1"
                                    fill
                                    sizes="35vw"
                                    style={{ objectFit: "contain", objectPosition: "center center", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
                                />
                            </div>
                        </StaggerItem>

                        {/* Center card - in front, larger, overlapping */}
                        <StaggerItem className="absolute inset-0">
                            <div
                                className="absolute rounded-lg overflow-hidden"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "42%",
                                    height: "98%",
                                    zIndex: 3,
                                    background: bgColor,
                                }}
                            >
                                <Image
                                    src={images[1]}
                                    alt="Work 2"
                                    fill
                                    sizes="40vw"
                                    style={{ objectFit: "contain", objectPosition: "center center", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.3))" }}
                                />
                            </div>
                        </StaggerItem>

                        {/* Right card - behind, to the right */}
                        <StaggerItem className="absolute inset-0">
                            <div
                                className="absolute rounded-lg overflow-hidden"
                                style={{
                                    right: "5%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "38%",
                                    height: "85%",
                                    zIndex: 1,
                                    background: bgColor,
                                }}
                            >
                                <Image
                                    src={images[2]}
                                    alt="Work 3"
                                    fill
                                    sizes="35vw"
                                    style={{ objectFit: "contain", objectPosition: "center center", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
                                />
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            ) : (
                <div id={`grid-${sectionNumber}`} className="relative z-10 flex-1 overflow-y-auto w-full px-4 md:px-8 py-4 md:py-8 custom-scrollbar flex flex-col items-center">
                    <StaggerContainer
                        className="w-full max-w-7xl my-auto flex flex-wrap justify-center gap-4 md:gap-6"
                    >
                        {Array.from({ length: count }).map((_, i) => (
                            <StaggerItem
                                key={i}
                                className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0"
                            >
                                <div className={`${isLandscape ? "aspect-video" : "aspect-[5/6]"} rounded-lg overflow-hidden shadow-lg relative w-full`}>
                                    {images[i] ? (
                                        <Image
                                            src={images[i]}
                                            alt={`Work ${i + 1}`}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                            style={{ objectFit: "cover", objectPosition: "center center" }}
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full photo-placeholder flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${textColor === "#000" ? "#ddd" : "#444"} 0%, ${textColor === "#000" ? "#bbb" : "#333"} 100%)`,
                                                color: textColor === "#000" ? "#888" : "#777",
                                             }}
                                        >
                                            <span className="px-4 text-xs">Work Sample {i + 1}</span>
                                        </div>
                                    )}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            )}
        </section>
    );
}
