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

    const isLandscape =
        catLower.includes("youtube") ||
        catLower.includes("thumbnail") ||
        (images.length > 0 && (
            images[0].includes("edulan") ||
            images[0].includes("bakery") ||
            images[0].includes("camping")
        ));

    const isBeauty = images.length > 0 && images[0].includes("beauty");
    const isAffecte = images.length > 0 && images[0].includes("affecte");
    const isEcom = images.length > 0 && images[0].includes("ecom");
    const isInsta = images.length > 0 && images[0].includes("insta");

    // Responsive width classes based on image count
    const lgWidth = count <= 3
        ? "lg:w-[calc(33.333%-16px)]"
        : count <= 8
            ? "lg:w-[calc(25%-18px)]"
            : "lg:w-[calc(20%-19px)]";

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col" style={{ background: bgColor }}>
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
            <div id={`grid-${sectionNumber}`} className="relative z-10 flex-1 w-full px-4 md:px-8 py-4 md:py-8 flex flex-col items-center">
                <StaggerContainer
                    className="w-full max-w-[1600px] my-auto flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {Array.from({ length: count }).map((_, i) => (
                        <StaggerItem
                            key={i}
                            className={`w-[calc(50%-8px)] sm:w-[calc(50%-12px)] ${lgWidth} flex-shrink-0`}
                        >
                            <div className={`${
                                isLandscape
                                    ? "aspect-video"
                                    : isBeauty
                                        ? "aspect-[402/874]"
                                        : isAffecte
                                            ? "aspect-[3/4]"
                                            : (isEcom || isInsta)
                                                ? "aspect-[4/5]"
                                                : "aspect-[5/6]"
                            } rounded-lg overflow-hidden shadow-lg relative w-full`}>
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
        </section>
    );
}
