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
    const isUIDesign = count <= 3 && category.toLowerCase().includes("ui") && images.length === 3;

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

            {/* Works display */}
            <StaggerContainer className="relative z-10 flex-1 flex items-center px-4 md:px-8 py-6 md:py-10">
                {isUIDesign ? (
                    /* Overlapping card layout for UI Designs - matches template */
                    <div className="w-full relative" style={{ height: "60vh", minHeight: "380px" }}>
                        {/* Left card - behind, to the left */}
                        <StaggerItem>
                            <div
                                className="absolute rounded-lg overflow-hidden shadow-xl"
                                style={{
                                    left: "2%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "34%",
                                    height: "80%",
                                    zIndex: 1,
                                }}
                            >
                                <Image
                                    src={images[0]}
                                    alt="Work 1"
                                    fill
                                    sizes="35vw"
                                    style={{ objectFit: "cover", objectPosition: "top center" }}
                                />
                            </div>
                        </StaggerItem>

                        {/* Center card - in front, larger, overlapping */}
                        <StaggerItem>
                            <div
                                className="absolute rounded-lg overflow-hidden shadow-2xl"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "38%",
                                    height: "95%",
                                    zIndex: 3,
                                }}
                            >
                                <Image
                                    src={images[1]}
                                    alt="Work 2"
                                    fill
                                    sizes="40vw"
                                    style={{ objectFit: "cover", objectPosition: "top center" }}
                                />
                            </div>
                        </StaggerItem>

                        {/* Right card - behind, to the right */}
                        <StaggerItem>
                            <div
                                className="absolute rounded-lg overflow-hidden shadow-xl"
                                style={{
                                    right: "2%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "34%",
                                    height: "80%",
                                    zIndex: 1,
                                }}
                            >
                                <Image
                                    src={images[2]}
                                    alt="Work 3"
                                    fill
                                    sizes="35vw"
                                    style={{ objectFit: "cover", objectPosition: "top center" }}
                                />
                            </div>
                        </StaggerItem>
                    </div>
                ) : (
                    /* Standard grid for other sections */
                    <div className={`w-full grid gap-4 md:gap-6 ${count <= 3
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : count <= 8
                                ? "grid-cols-2 lg:grid-cols-4"
                                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        }`}>
                        {Array.from({ length: count }).map((_, i) => (
                            <StaggerItem key={i}>
                                <div className={`${category.toLowerCase().includes("youtube") ? "aspect-video" : "aspect-[5/6]"} rounded-lg overflow-hidden shadow-lg relative`}>
                                    {images[i] ? (
                                        <Image
                                            src={images[i]}
                                            alt={`Work ${i + 1}`}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
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
                    </div>
                )}
            </StaggerContainer>
        </section>
    );
}
