"use client";

import { Tabs } from "@/components/anime/Tabs";
import { HoverEffect } from "@/components/anime/HoverCard";
import TitleHeader from "@/components/TitleHeader";
import Blurlight from "@/components/blurlight";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


export default function SkillsSection() {
    const tabs = [
        {
            title: "Frontend",
            value: "frontend",
            content: (
                <HoverEffect
                    items={[
                        { title: "Html5", image: "/tools/Html5.svg" },
                        { title: "CSS3", image: "/tools/CSS3.svg" },
                        { title: "JavaScript", image: "/tools/JavaScript.svg" },
                        { title: "React", image: "/tools/react.svg" },
                        { title: "Next.js", image: "/tools/nextjs.svg" },
                        { title: "Tailwind CSS", image: "/tools/tailwindcss.svg" },
                        { title: "Ant Design", image: "/tools/AntDesign.svg" },
                        { title: "Figma", image: "/tools/Figma.svg" },
                        { title: "TypeScript", image: "/tools/typescript.svg" },
                    ]}
                />
            ),
        },
        {
            title: "Backend",
            value: "backend",
            content: (
                <HoverEffect
                    items={[
                        { title: "Node.js", image: "/tools/nodejs.svg" },
                        { title: "Express", image: "/tools/express.svg" },
                        { title: "Python", image: "/tools/python.svg" },
                        // { title: "C#", image: "/tools/CSharp.svg" },
                        { title: "Django", image: "/tools/django.svg" },
                        { title: "Firebase", image: "/tools/firebase.svg" },
                        { title: "Postman", image: "/tools/Postman.svg" },
                        { title: "Socket", image: "/tools/Socket.io.svg" },
                    ]}
                />
            ),
        },
        {
            title: "Database",
            value: "database",
            content: (
                <HoverEffect
                    items={[
                        { title: "MongoDB", image: "/tools/mongodb.svg" },
                        { title: "MySQL", image: "/tools/mysql.svg" },
                        { title: "Redis", image: "/tools/redis.svg" },
                        { title: "Prisma", image: "/tools/prisma.svg" },
                    ]}
                />
            ),
        },
        {
            title: "DevOps & CI/CD",
            value: "devops",
            content: (
                <HoverEffect
                    items={[
                        { title: "Git", image: "/tools/git.svg" },
                        { title: "Docker", image: "/tools/docker.svg" },
                        { title: "AWS", image: "/tools/aws.svg" },
                        { title: "Linux", image: "/tools/linux.svg" },
                        { title: "GCP", image: "/tools/GoogleCloud.svg" },
                        { title: "Vs Code", image: "/tools/VsCode.svg" },
                        // { title: "Vercel", image: "/icons/vercel.svg" },
                    ]}
                />
            ),
        }
    ];

    

    return (
        <div className="relative skills min-h-screen">
            <div className=" block px-1 max-w-6xl mx-auto mt-16">
                <TitleHeader title={'Professional Skills'} sub={'🧳 What I know'} img={'/emojis/glasses.png'} />
                <Blurlight className="-bottom-60 -left-0  opacity-10! w-1/4! h-96!" />
                {/* <Blurlight className="-bottom-100 -right-0  opacity-5! w-full! h-96!" /> */}
                {/* <Blurlight className="-bottom-100 -right-100  opacity-5! w-full! h-96!" /> */}
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}
