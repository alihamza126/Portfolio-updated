"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollDownHint = () => {
    useGSAP(() => {
        // bounce animation
        gsap.to(".scroll-down-arrow", {
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".scroll-down-arrow",
                start: "top 80%",
                end: "top 40%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    // handle scroll to about section
    const handleClick = () => {
        // small click animation (pulse)
        gsap.fromTo(
            ".scroll-down-arrow",
            { scale: 1 },
            { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.inOut" }
        );

        // smooth scroll
        const target = document.querySelector("#about-me");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer flex flex-col items-center gap-2 absolute -bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 z-[9990]"
        >
            <p className="text-sm text-gray-400">Scroll down to know about me</p>
            <ChevronDown
                id="scroll-down-arrow"
                size={32}
                // onClick={handleClick}
                className="scroll-down-arrow text-teal-400"
            />
        </div>
    );
};

export default ScrollDownHint;
