"use client";
import Blurlight from "@/components/blurlight";
import TitleHeader from "@/components/TitleHeader";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
    title: string;
    role: string;
    company: string;
    date: string;
    description: string;
    points: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Agency Experience",
        role: "Full Stack Developer",
        company: "Asmin Majeed Agency",
        date: "2024 – 2025",
        description:
            "Worked as a professional full stack developer in an agency environment.",
        points: [
            "Developed scalable apps using Next.js, Node.js, MongoDB",
            "Built dashboards, APIs, and admin panels",
            "Collaborated with clients and internal teams",
        ],
    },
    {
        title: "Freelance Work",
        role: "Freelance Full Stack Developer",
        company: "Self-employed, Pakistan",
        date: "2022 – 2024",
        description:
            "Delivered custom web apps and digital solutions for international clients.",
        points: [
            "Created e-commerce stores & custom business websites",
            "Designed responsive UIs with Tailwind CSS",
            "Integrated Firebase, APIs, and cloud services",
        ],
    },
];

export default function Experience() {
    useGSAP(() => {
        gsap.fromTo(
            ".exp-card",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: .41,
                delay: .2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".exp-card",   // element to watch
                    start: "top 95%",         // when it enters viewport
                    end: "top 70%",           // optional end point
                    toggleActions: "play none none reverse", // play on enter, reverse on leave
                    markers: false,  
                    scrub: true,         // set true for debug
                },
            }
        )
    })

    return (
        <section className="w-full px-6 md:px-12 relative ">
            <TitleHeader title="Experience" sub="✈️ My Journey" img={'/emojis/cowboy.png'} />
            <Blurlight className="-bottom-0 left-0  opacity-5!  h-full!  w-full!" />
            <Blurlight className="bottom-10 -right-0  opacity-5! w-56 h-56" />
            <div className="max-w-6xl mx-auto pt-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="exp-card bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg hover:shadow-teal-500/20 transition-all p-6"
                        >
                            <span className="text-sm text-teal-400">{exp.date}</span>
                            <h3 className="text-xl font-semibold text-white mt-2">
                                {exp.role}
                            </h3>
                            <p className="text-gray-400">{exp.company}</p>

                            <p className="mt-3 text-gray-300 text-sm">{exp.description}</p>

                            <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
                                {exp.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
