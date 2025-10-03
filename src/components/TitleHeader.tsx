"use client";
import Image from "next/image";
import Blurlight from "./blurlight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TitleHeader = ({ title, sub, img = null }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-badge, .hero-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: .41,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".hero-badge",   // element to watch
          start: "top 80%",         // when it enters viewport
          end: "top 80%",           // optional end point
          toggleActions: "play none none reverse", // play on enter, reverse on leave
          markers: false,           // set true for debug
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge z-0 mt-12">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="hero-title font-semibold text-3xl md:text-4xl flex items-center gap-2 text-center">
          {title} {img && <Image alt={title} src={img} height={70} width={60} />}
        </h1>
      </div>

      <Blurlight className=" from-white via-white to-white z-50 w-20! h-20! " />
    </div>
  );
};

export default TitleHeader;
