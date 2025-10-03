"use client";

import { Tabs } from "@/components/anime/Tabs";
import { HoverEffect } from "@/components/anime/HoverCard";
import TitleHeader from "@/components/TitleHeader";

export default function SkillsSection() {
    const tabs = [
        {
            title: "Frontend",
            value: "frontend",
            content: (
                <HoverEffect
                    items={[
                        { title: "React", image: "/icons/react.png" },
                        { title: "Next.js", image: "/icons/nextjs.png" },
                        { title: "Tailwind CSS", image: "/icons/tailwind.png" },
                        { title: "ShadCN/UI", image: "/icons/shadcn.png" },
                        { title: "TypeScript", image: "/icons/ts.png" },
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
                        { title: "Node.js", image: "/icons/node.png" },
                        { title: "Express", image: "/icons/express.png" },
                        { title: "Python", image: "/icons/python.png" },
                        { title: "Django", image: "/icons/django.png" },
                        { title: "Firebase", image: "/icons/firebase.png" },
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
                        { title: "MongoDB", image: "/icons/mongo.png" },
                        { title: "PostgreSQL", image: "/icons/postgres.png" },
                        { title: "MySQL", image: "/icons/mysql.png" },
                        { title: "Redis", image: "/icons/redis.png" },
                        { title: "Prisma", image: "/icons/prisma.png" },
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
                        { title: "Git", image: "/icons/git.png" },
                        { title: "Docker", image: "/icons/docker.png" },
                        { title: "AWS", image: "/icons/aws.png" },
                        { title: "Linux", image: "/icons/linux.png" },
                        { title: "Vercel", image: "/icons/vercel.png" },
                    ]}
                />
            ),
        },
        {
            title: "AI & ML",
            value: "ai",
            content: (
                <HoverEffect
                    items={[
                        { title: "TensorFlow.js", image: "/icons/tf.png" },
                        { title: "PyTorch", image: "/icons/pytorch.png" },
                        { title: "OpenAI", image: "/icons/openai.png" },
                        { title: "LangChain", image: "/icons/langchain.png" },
                        { title: "Machine Learning", image: "/icons/ml.png" },
                    ]}
                />
            ),
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto bg-red-300 mt-16">
            <TitleHeader title={'My Skills'} sub={'What I know'} img={'/emojis/ghost.png'}/>
            <Tabs tabs={tabs} />
        </div>
    );
}
