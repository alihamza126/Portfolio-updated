"use client"
import Blurlight from '../blurlight'
import { ArrowDown, ArrowUpRightIcon } from 'lucide-react'
import { TypewriterEffectGsap } from '../anime/Typewriter'
import { CountUp } from '../anime/Countup'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { Tooltip } from '../anime/animated-tooltip'
import ScrollDownHint from '../ScrollDownHint'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);


const Header = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text .hero, .center,.amine, h1,h2,h3,h4,h5,p,button",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: .4,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-text .hero",   // element to watch
                    start: "top 90%",         // when it enters viewport
                    end: "top 80%",           // optional end point
                    toggleActions: "play none none reverse", // play on enter, reverse on leave
                    scrub: true,         // set true for debug
                }
            },

        )
    },
        { scope: sectionRef }
    );

    const words = [
        {
            text: "Mern Stack Developer",
        },
        {
            text: "UI/UX Designer",
        },
        {
            text: "Frontend Developer",
        },
    ];
    return (
        <div id='home' ref={sectionRef} className='section hero w-full hero-text bg-cover md:h-screen relative'>
            <Blurlight className="top-0 -left-0  opacity-20! w-32 h-32" />

            {/* Hero Section */}
            <div className=" relative z-0 px-5  grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:px-28 pt-38">
                {/* Left Content */}
                <div className="flex col-span-1 flex-col justify-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">Hi! Ali Hamza</h1>

                        <div className="flex amine items-center gap-4">
                            <div className="h-px w-16 bg-teal-500"></div>
                            <p className="text-xl text-gray-300 min-h-[5.5rem] lg:text-2xl">
                                <TypewriterEffectGsap typingSpeed={0.07}
                                    pauseTime={1.5} words={words} />
                            </p>
                        </div>

                        <p className="max-w-md text-base leading-relaxed text-gray-400 lg:text-lg">
                            Designing user-friendly interfaces and building robust web applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Tooltip title='Contact Me' desc='Lets Talk About Your Project'>
                            <button className="inline-flex items-center  group rounded-lg bg-teal-400 cursor-pointer  px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                                Let&apos;s Talk <ArrowUpRightIcon className="ml-2  group-hover:rotate-45 transition-all duration-200 hover:cursor-pointer h-4 w-4" />
                            </button>
                        </Tooltip>
                        <Tooltip title='Download Cv' desc='Check out my resume'>
                            <button className="inline-flex items-center rounded-lg border border-gray-600 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                                Download Cv <ArrowDown className="ml-2 h-4 w-4" />
                            </button>
                        </Tooltip>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-4">
                        <div className="h-px w-16 bg-gray-700"></div>
                        <a href="#" className="text-gray-400 transition-colors hover:text-teal-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 9.648h-2.94v9.412h2.94V9.647zm.265-2.882a1.694 1.694 0 00-1.682-1.706h-.053a1.706 1.706 0 000 3.412 1.694 1.694 0 001.735-1.653v-.053zm10.912 6.93c0-2.83-1.8-3.99-3.636-3.99a3.145 3.145 0 00-2.835 1.565h-.044V9.648h-2.788v9.412h2.906v-5.248a1.882 1.882 0 011.77-2.024h.094c.98 0 1.594.639 1.594 2.006v5.266H19.06l-.001-5.364z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 transition-colors hover:text-teal-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 transition-colors hover:text-teal-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 transition-colors hover:text-teal-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex col-span-1 center items-end justify-center">
                    <div className="relative  h-[500px] w-full lg:h-[650px] lg:w-[470px]">
                        <img
                            src="/ali.png"
                            alt="Professional portrait"
                            className="h-full absolute object-cover  object-top contrast-less:"
                        />
                    </div>
                    <span className='absolute -bottom-20 left-0 w-full h-32 bg-black-100   shadow-2xl blur-2xl z-0 '></span>
                    <span className='absolute -bottom-20 left-0 w-full h-28 bg-black-100   shadow-2xl blur-2xl z-0 '></span>

                </div>

                {/* Right Stats */}
                <div className="flex flex-col-reverse mt-4 col-span-1  h-full md:flex-col justify-center space-y-12 lg:items-end">
                    <div className="space-y-2 text-center! md:text-right">
                        <p className="text-5xl font-bold text-white lg:text-6xl">0<CountUp from={0} to={2} />+</p>
                        <p className="text-base text-gray-400 lg:text-lg">Years of experience</p>
                    </div>

                    <div className="h-px w-full bg-gray-700 lg:w-48"></div>

                    <div className="space-y-2 text-center! md:text-right">
                        <p className="text-5xl font-bold text-white lg:text-6xl"><CountUp from={0} to={10} /> +</p>
                        <p className="text-base text-gray-400 lg:text-lg">Project delivered</p>
                    </div>

                    <div className="h-px w-full bg-gray-700 lg:w-48"></div>

                    <div className="space-y-2 text-center! md:text-right">
                        <p className="text-5xl font-bold text-white lg:text-6xl">0<CountUp from={0} to={5} />+</p>
                        <p className="text-base text-gray-400 lg:text-lg">Countries served</p>
                    </div>

                    {/* Tool Icons */}
                    <div className=" z-50 flex items-center pb-8 relative -top-6 justify-center md:justify-end gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
                            <svg className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-5.5v-9l7 4.5-7 4.5z" />
                            </svg>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
                            <svg className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.5 2.5h-3v8h3v-8zm6.5 6.5c0-3.59-2.91-6.5-6.5-6.5v3c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5v3c3.59 0 6.5-2.91 6.5-6.5zm-13 0c0-1.93 1.57-3.5 3.5-3.5v-3C6.91 2.5 4 5.41 4 9s2.91 6.5 6.5 6.5v-3C8.57 12.5 7 10.93 7 9z" />
                            </svg>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
                            <svg className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.5 2C6.977 2 2.5 6.477 2.5 12s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <span className='absolute -bottom-10 left-0 w-full h-32 bg-black-100   shadow-2xl blur-2xl z-0 '></span> */}
                <span className='absolute -bottom-20 left-0 w-full h-32 bg-black-100   shadow-2xl blur-2xl z-0 '></span>
                {/* <span className='absolute  bottom-0 left-0 w-full h-10 bg-teal-700  shadow-2xl blur-3xl z-0 '></span> */}
            </div>
            <ScrollDownHint />
        </div>
    )
}

export default Header