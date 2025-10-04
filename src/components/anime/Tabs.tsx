"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    useGSAP(() => {
        gsap.fromTo(".tabs", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            stagger: .5,
            duration: 4,
            yoyo: true,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".tabs",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        })
    })

    return (
        <>
            <div
                className={cn(
                    "flex tabs mt-16 flex-wrap md:flex-row justify-center items-center gap-4 [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar md:max-w-full md:w-full",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn("relative px-4 py-2 bg-white/50 rounded-full", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-teal-500  rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block ">
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-16 tabs", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    active,
    hovering,
}: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };

    const contentContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (contentContainerRef.current) {
            // 1. Target the *children* of the div containing the HoverEffect content.
            //    The selector targets the direct children of the HoverEffect grid.
            const cardElements = contentContainerRef.current.querySelector('.grid')?.children;

            if (cardElements) {
                gsap.fromTo(cardElements,
                    {
                        opacity: 0,
                        y: 30, // Start lower for a more noticeable "fly-in" effect
                        scale: 0.95 // Start slightly smaller
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1, // End at full size
                        duration: 0.4, // Faster animation per card
                        ease: "back.out(1.2)", // Use a fun "back" ease for a slight overshoot
                        // 2. Add stagger for a dynamic grid flow
                        stagger: {
                            amount: 0.16, // Total time for all items to start animating
                            from: "random", // Make cards fly in from a random order
                            // Or use "grid" for a more structured cascade (e.g., "start", "end")
                        },
                        delay: 0.091 // Small initial delay
                    }
                );
            }
        }
    }, [tabs[0].value]);

    return (
        // 3. Keep the ref on the container div
        <div
            ref={contentContainerRef}
            className={cn("relative ", className)}
        >
            {tabs.map((tab, idx) => (
                <div key={tab.value}>
                    {isActive(tab) && (
                        // tab.content is the HoverEffect component, which renders a grid of cards
                        tab.content
                    )}
                </div>
            ))}
        </div>
    );
};