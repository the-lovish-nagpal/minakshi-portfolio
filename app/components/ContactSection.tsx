"use client";

import { FadeIn, FadeInLeft, FadeInRight } from "./Animations";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative w-full min-h-screen overflow-hidden flex flex-col"
            style={{
                background:
                    "linear-gradient(135deg, #f5f0e8 0%, #f9f5ef 40%, #fde8d0 70%, #fcc5a8 90%, #f9a07a 100%)",
            }}
        >
            <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-8 md:px-16 py-10 md:py-16 gap-8">
                {/* Left — main CTA */}
                <div className="lg:w-[60%] flex flex-col justify-between">
                    <FadeIn>
                        <h3 className="font-display text-xl md:text-2xl text-black tracking-wider uppercase text-center lg:text-left">
                            Minakshi Banerjee
                        </h3>
                    </FadeIn>

                    <FadeInLeft delay={0.2}>
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black leading-[0.9] tracking-tight uppercase mt-8 lg:mt-0">
                            Let&apos;s Work
                            <br />
                            Together
                        </h1>
                    </FadeInLeft>

                    <FadeIn delay={0.4}>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <svg viewBox="0 0 200 120" className="w-24 h-14 md:w-32 md:h-20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="60" rx="95" ry="55" />
                                <circle cx="100" cy="60" r="35" fill="white" />
                                <circle cx="100" cy="60" r="12" fill="black" />
                                <path d="M100 30 L106 54 L130 60 L106 66 L100 90 L94 66 L70 60 L94 54 Z" fill="white" />
                            </svg>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="flex flex-col sm:flex-row items-start gap-6 mt-8">
                            <h3 className="font-display text-2xl md:text-3xl text-black uppercase tracking-wide">
                                Get In<br />Touch
                            </h3>
                            <p className="font-display text-sm md:text-base text-black/80 uppercase leading-relaxed max-w-md tracking-wide">
                                I&apos;ve worked with startups, agencies, and independent brands from
                                various industries including fashion, tech, hospitality, and
                                education. Some clients include:
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-16 mt-8">
                            <a href="tel:6290754693" className="font-display text-lg md:text-xl text-black tracking-wider hover:text-black/70 transition-colors">
                                6290754693
                            </a>
                            <a href="mailto:banerjeeminakshi111@gmail.com" className="font-display text-lg md:text-xl text-black tracking-wider hover:text-black/70 transition-colors lowercase">
                                banerjeeminakshi111@gmail.com
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Right — photo */}
                <FadeInRight delay={0.3} className="lg:w-[40%] flex items-start justify-end">
                    <div className="w-full max-w-[350px] h-[350px] md:h-[420px] photo-placeholder rounded-lg shadow-xl overflow-hidden">
                        <span className="px-4">Photo of Minakshi<br />Add to public/minakshi-3.jpg</span>
                    </div>
                </FadeInRight>
            </div>
        </section>
    );
}
