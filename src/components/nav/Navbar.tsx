"use client"
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/dist/Flip";

gsap.registerPlugin(Flip, ScrollToPlugin, ScrollTrigger);


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useGSAP(() => {
    const sections = gsap.utils.toArray(".section");
    const links = gsap.utils.toArray("nav a");
    const menuMarker = document.querySelector(".marker");
    const stArray = [];
    let activeSection = 0;

    const doFlip = () => {
      const state = Flip.getState(menuMarker);
      const link = links[activeSection];
      link.appendChild(menuMarker);
      Flip.from(state);
    };

    sections.forEach((section, i) => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 80",
        end: "top -80",
        onEnter: () => {
          activeSection = i;
          doFlip();
        },
        onEnterBack: () => {
          activeSection = i;
          doFlip();
        },
      });
      stArray.push(st);
    });

    links.forEach((link, i) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: stArray[i].start + 80
          },
          ease: "power2.inOut"
        });
      });
    });
  })



  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link href="/" className="logo">
          <Image src={'/logo.png'} width={150} quality={100} height={50} alt={'logo'} />
        </Link>

        <nav className="desktop nav">
          <ul>
            {navLinks.map(({ link, name }) => {
              return (
                <li key={name} >
                  <div className="marker"></div>
                  <Link href={link}>{name} </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header >
  );
}

export default NavBar;
