"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const TypewriterEffectGsap = ({
  words,
  typingSpeed = 0.08, // seconds per character
  pauseTime = 1.2,     // pause after word is typed
}: {
  words: { text: string; className?: string }[];
  typingSpeed?: number;
  pauseTime?: number;
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Typewriter logic
  useGSAP(() => {
    const word = words[currentWord].text;
    const element = textRef.current;
    if (!element) return;

    // Clear previous text
    element.textContent = "";

    const tl = gsap.timeline({
      onComplete: () => {
        // go to next word after finishing
        setCurrentWord((prev) => (prev + 1) % words.length);
      },
    });

    // Type letters
    word.split("").forEach((char, i) => {
      tl.to(
        {},
        {
          duration: typingSpeed,
          onComplete: () => {
            element.textContent += char;
          },
        },
        i * typingSpeed
      );
    });

    // Pause before erasing
    tl.to({}, { duration: pauseTime });

    // Erase letters
    word.split("").forEach((_, i) => {
      tl.to(
        {},
        {
          duration: typingSpeed / 1.5,
          onComplete: () => {
            element.textContent = element.textContent?.slice(0, -1) || "";
          },
        },
        "+=0"
      );
    });
  }, [currentWord]);

  // Blinking cursor
  useGSAP(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <span className="flex items-center space-x-1 my-6">
      <span
        ref={textRef}
        className={
          words[currentWord].className +
          " text-xl sm:text-2xl lg:text-3xl font-medium"
        }
      />
      <span
        ref={cursorRef}
        className="block w-[3px] sm:w-[4px] h-6 sm:h-7 bg-teal-500"
      />
    </span>
  );
};
