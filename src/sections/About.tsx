"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Code2, Palette, Wrench } from "lucide-react"
import TitleHeader from "@/components/TitleHeader"
import Blurlight from "@/components/blurlight"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const codeWindowRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Animate code window from left
      gsap.from(codeWindowRef.current, {
        x: -100,
        opacity: 0,
        duration: .41,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: codeWindowRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      })

      // Animate code lines with stagger
      gsap.from(".code-line", {
        x: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.071,
        delay: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: codeWindowRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate service cards from right
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          x: 80,
          opacity: 0,
          duration: 0.41,
          delay: i * 0.24, // keep stagger effect
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // animate when card itself is in view
            toggleActions: "play none none reverse",
          },
        })
      })


    },
    { scope: sectionRef } // binds animations inside this section
  )

  return (
    <div
      id="about-me"
      ref={sectionRef}
      className="section relative px-3 max-w-screen overflow-y-visible"
    >
      <TitleHeader img={'/emojis/ghost.png'} title={"About"} sub={"✨ Know more about me"} />
      <Blurlight className="top-15 left-0  opacity-5!  h-full!  w-full!" />
      <Blurlight className="bottom-10 -left-0  opacity-10! w-56 h-56" />
      <div className="mx-auto py-20 w-full max-w-screen overflow-x-hidden md:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 items-center lg:gap-8">
          {/* Left Side - Code Editor Window */}
          <div ref={codeWindowRef} className="flex max-w-screen overflow-auto pb-2 items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950/50 shadow-2xl backdrop-blur-xl">
              {/* Editor Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/50 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 font-mono text-sm text-white/60">about-me.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs md:text-sm overscroll-auto">
                <div className="space-y-2 overflow-x-auto">
                  <div className="code-line flex gap-4">
                    <span className="text-white/40">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400"> developer</span>
                    <span className="text-white"> = {"{"}</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">2</span>
                    <span className="pl-6 text-blue-300">name:</span>
                    <span className="text-emerald-400">&quot;Ali Hamza&quot;</span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">3</span>
                    <span className="pl-6 text-blue-300">role:</span>
                    <span className="text-emerald-400">&quot;Full-Stack Developer & AI Engineer&quot;</span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">4</span>
                    <span className="pl-6 text-blue-300">location:</span>
                    <span className="text-emerald-400">&quot;Pakistan&quot;</span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">5</span>
                    <span className="pl-6 text-blue-300">services:</span>
                    <span className="text-white"> [</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">6</span>
                    <span className="pl-12 text-emerald-400">&quot;Web App Development&quot;</span><span className="text-white">,</span>
                  </div>
                  <div className="code-line flex gap-4">
                    <span className="text-white/40">7</span>
                    <span className="pl-12 text-emerald-400">&quot;AI-Powered Solutions&quot;</span><span className="text-white">,</span>
                  </div>
                  <div className="code-line flex gap-4">
                    <span className="text-white/40">8</span>
                    <span className="pl-12 text-emerald-400">&quot;API Development & Integration&quot;</span><span className="text-white">,</span>
                  </div>
                  <div className="code-line flex gap-4">
                    <span className="text-white/40">9</span>
                    <span className="pl-12 text-emerald-400">&quot;UI/UX Design&quot;</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">10</span>
                    <span className="pl-6 text-white">],</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">11</span>
                    <span className="pl-6 text-blue-300">about:</span>
                    <span className="text-emerald-400">
                      &quot;I am a Computer Science graduate with
                      <span className="text-white/80 font-semibold"> 2+ years of freelancing experience</span>.
                      I build scalable web apps with modern UI/UX and integrate AI-driven solutions.&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>


                  <div className="code-line flex gap-4">
                    <span className="text-white/40">12</span>
                    <span className="pl-6 text-blue-300">available:</span>
                    <span className="text-orange-400"> true</span>
                  </div>

                  <div className="code-line flex gap-4">
                    <span className="text-white/40">13</span>
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
              </div>



            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div ref={cardsRef} className="flex flex-col gap-4 md:gap-8 px-3 relative">
            {/* Design Card */}
            <div className="service-card rounded-xl border border-gray-800 bg-white/5 p-6 shadow-md backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-200">DESIGN</h3>
                <Palette className="h-6 w-6 text-teal-400" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Creating beautiful, intuitive interfaces that users love.
              </p>
            </div>

            {/* Development Card */}
            <div className="service-card  md:ml-6 rounded-xl border border-gray-800 bg-white/5 p-6 shadow-md backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">DEVELOPMENT</h3>
                <Code2 className="h-6 w-6 text-blue-400" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Building robust, scalable applications with modern technologies.
              </p>
            </div>

            {/* Maintenance Card */}
            <div className="service-card md:ml-12 rounded-xl border border-gray-800 bg-white/5 p-6 shadow-md backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">MAINTENANCE</h3>
                <Wrench className="h-6 w-6 text-green-400" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Keeping your applications running smoothly with updates and support.
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
