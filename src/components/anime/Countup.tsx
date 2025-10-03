"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const CountUp = ({
    from = 0,
    to = 100,
    duration = 1,
    ease = "power4.in",
    className = "text-4xl font-bold text-teal-500",
}: {
    from?: number;
    to?: number;
    duration?: number;
    ease?: string;
    className?: string;
}) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const obj = { value: from };
        gsap.to(obj, {
            value: to,
            duration,
            ease,
            onUpdate: () => {
                if (numberRef.current) {
                    numberRef.current.textContent = Math.floor(obj.value).toString();
                }
            },
        });
    }, []);

    return <span ref={numberRef}>{from}</span>;
};
