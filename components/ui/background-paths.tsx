"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="url(#pathGradient)"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.025}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e85d04" />
                        <stop offset="50%" stopColor="#f48c06" />
                        <stop offset="100%" stopColor="#e85d04" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Elektrotechnik aus Meisterhand",
    subtitle,
    children,
}: {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f1115]">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#e85d04]/60 font-medium mb-8"
                    >
                        Meisterbetrieb seit 1972
                    </motion.p>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-white"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-[15px] sm:text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children || (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <div className="inline-block group relative bg-gradient-to-b from-[#e85d04]/20 to-[#e85d04]/5 p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Button
                                    variant="ghost"
                                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-[#0f1115]/95 hover:bg-[#0f1115] text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-amber-500/20 hover:border-amber-500/40 hover:shadow-md"
                                    asChild
                                >
                                    <Link href="/kontakt">
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            Projekt besprechen
                                        </span>
                                        <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                            &rarr;
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                            <a
                                href="tel:08931926484"
                                className="px-6 py-3 text-[14px] text-zinc-400 rounded-full border border-zinc-700 hover:border-zinc-500 hover:text-zinc-200 transition-all"
                            >
                                (089) 319 26 84
                            </a>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
