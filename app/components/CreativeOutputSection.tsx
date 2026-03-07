"use client";

import Image from "next/image";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "./Animations";

interface CreativeOutputProps {
    sectionNumber: string;
    brandColor?: string;
    outputs: { title: string; desc: string }[];
    images?: string[];   // up to 6 images for the grid
    rightImage?: string; // large right-side image
    gridVariant?: "3x2" | "parkgreens-masonry"; // To handle Park Greens specific grid
    rightImagePosition?: string; // e.g. "center", "left top"
    outputTextColor?: string; // custom color for "OUTPUT" heading, falls back to brandColor
}

export default function CreativeOutputSection({
    sectionNumber,
    brandColor = "#F5E027",
    outputs,
    images = [],
    rightImage,
    gridVariant = "3x2",
    rightImagePosition = "center",
    outputTextColor,
}: CreativeOutputProps) {
    return (
        <section className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex flex-col">
            <div className="grain-overlay" />

            {/* Removed top heading, moving it to bottom */}

            {/* Images */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                <FadeInLeft className="md:w-[55%] p-4 md:p-6">
                    {gridVariant === "3x2" ? (
                        <div className={`grid gap-2 h-[300px] md:h-[55vh] ${images.length <= 3 ? "grid-cols-3 grid-rows-1" : "grid-cols-3 grid-rows-2"}`}>
                            {(images.length > 0 ? images : Array.from({ length: 6 }, () => "")).map((img, i) => (
                                <div key={i} className="relative overflow-hidden rounded-sm">
                                    {img ? (
                                        <Image src={img} alt={`Work ${i + 1}`} fill sizes="(max-width: 768px) 33vw, 18vw" style={{ objectFit: "cover" }} />
                                    ) : (
                                        <div className="photo-placeholder photo-placeholder-dark w-full h-full">
                                            <span className="text-xs px-1">Work {i + 1}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : gridVariant === "parkgreens-masonry" ? (
                        /* Simplified Park Greens specific layout (5 images total) */
                        <div className="flex gap-2 h-[400px] md:h-[55vh]">
                            {/* Left Half: The 4-logo composite image */ /* NOTE: using the images array passed in page.tsx */}
                            <div className="w-1/2 relative overflow-hidden rounded-sm">
                                <Image src="/images/parkgreens-logo.jpg" alt="Park Greens Logos" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                            </div>

                            {/* Right Half: 2x2 Grid of the remaining 4 images */}
                            <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
                                <div className="relative overflow-hidden rounded-sm">
                                    <Image src={images[0] || "/images/parkgreens-billboard.jpg"} alt="Billboard" fill sizes="(max-width: 768px) 25vw, 15vw" style={{ objectFit: "cover" }} />
                                </div>
                                <div className="relative overflow-hidden rounded-sm">
                                    <Image src={images[1] || "/images/parkgreens-display.jpg"} alt="Display" fill sizes="(max-width: 768px) 25vw, 15vw" style={{ objectFit: "cover" }} />
                                </div>
                                <div className="relative overflow-hidden rounded-sm">
                                    <Image src={images[2] || "/images/parkgreens-scenic.jpg"} alt="Scenic" fill sizes="(max-width: 768px) 25vw, 15vw" style={{ objectFit: "cover" }} />
                                </div>
                                <div className="relative overflow-hidden rounded-sm">
                                    <Image src={images[3] || "/images/parkgreens-social2.jpg"} alt="Lounge" fill sizes="(max-width: 768px) 25vw, 15vw" style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </FadeInLeft>

                <FadeInRight delay={0.2} className="md:w-[45%] p-4 md:p-6 flex items-stretch">
                    <div className="relative w-full rounded-sm min-h-[250px] md:min-h-0 overflow-hidden bg-[#e8e9e1]">
                        {rightImage ? (
                            gridVariant === "parkgreens-masonry" ? (
                                /* 
                                  By making the inner container exactly 2x the width and height, 
                                  object-fit: cover will naturally scale the image so its top-left 25% (half width, half height)
                                  exactly covers the 1x parent container. This ensures perfect centering responsively!
                                */
                                <div className="absolute top-0 left-0 w-[200%] h-[200%]">
                                    <Image
                                        src={rightImage}
                                        alt="Park Greens Right Panel"
                                        fill
                                        sizes="(max-width: 768px) 200vw, 100vw"
                                        style={{ objectFit: "cover", objectPosition: "center 15%" }}
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={rightImage}
                                    alt="Brand Showcase"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: rightImagePosition
                                    }}
                                />
                            )
                        ) : (
                            <div className="photo-placeholder photo-placeholder-dark w-full h-full">
                                <span className="px-4">Brand Logo<br />&amp; Showcase</span>
                            </div>
                        )}
                    </div>
                </FadeInRight>
            </div>

            {/* Output descriptions & Section Heading — at bottom */}
            <div className="relative z-10 px-8 md:px-16 pb-8 md:pb-12 mt-8 md:mt-12 flex flex-col gap-8 md:gap-12">
                <FadeIn>
                    {/* Top Row of Outputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Empty column to match template spacing */}
                        <div className="hidden md:block"></div>

                        {outputs.slice(0, 3).map((item, i) => (
                            <div key={i}>
                                <h4 className="font-display text-lg md:text-2xl uppercase tracking-wide leading-tight mb-2" style={{ color: brandColor }}>
                                    {item.title}
                                </h4>
                                <p className="text-sm md:text-lg font-body leading-snug" style={{ color: brandColor }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    {/* Bottom Row: Heading + Outputs + OUTPUT */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-4">

                        {/* Left: MY XX CREATIVE */}
                        <div className="flex items-center gap-3 w-full lg:w-[22%] shrink-0">
                            <span className="font-display text-6xl md:text-8xl leading-[0.8]" style={{ color: brandColor, textShadow: "1px 1px 0px #000" }}>
                                {sectionNumber}
                            </span>
                            <div className="flex flex-col justify-center">
                                <span className="font-display text-3xl md:text-5xl uppercase leading-[0.8]" style={{ color: brandColor }}>MY</span>
                                <span className="font-display text-3xl md:text-5xl uppercase leading-[0.8] mt-1" style={{ color: brandColor }}>CREATIVE</span>
                            </div>
                        </div>

                        {/* Middle: Second row of outputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-[48%] shrink-0">
                            {outputs.slice(3, 6).map((item, i) => (
                                <div key={i + 3}>
                                    <h4 className="font-display text-lg md:text-2xl uppercase tracking-wide leading-tight mb-2" style={{ color: brandColor }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-sm md:text-lg font-body leading-snug" style={{ color: brandColor }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right: OUTPUT + Eye */}
                        <div className="flex items-center gap-4 w-full lg:w-auto lg:flex-1 justify-end shrink-0">
                            <h2 className="font-display text-[4rem] sm:text-7xl md:text-[6.5rem] leading-[0.75] tracking-tight uppercase" style={{ color: outputTextColor || brandColor }}>
                                OUTPUT
                            </h2>
                            <svg viewBox="0 0 200 120" className="w-12 h-8 md:w-16 md:h-10 shrink-0" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="60" rx="95" ry="55" fill={outputTextColor || brandColor} />
                                <circle cx="100" cy="60" r="35" fill="black" />
                                <circle cx="100" cy="60" r="12" fill={outputTextColor || brandColor} />
                                <path d="M100 30 L106 54 L130 60 L106 66 L100 90 L94 66 L70 60 L94 54 Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
