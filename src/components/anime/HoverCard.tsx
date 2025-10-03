// HoverCard.tsx
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string; // <-- add image
    link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid items-center place-items-center space-y-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative flex justify-between group md:p-3 h-full w-fit cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 md:top-3 md:left-3 h-40 md:h-42 w-44 md:w-48 bg-teal-700  rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card className=" shrink flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className=" h-20 md:h-24 w-20 md:w-24 object-contain mx-auto"
            />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-40 md:h-42 w-44 md:w-48 wfull p-2 bg-white/10! overflow-hidden bg-/70 border border-transparent  relative z-20 text-center",
        className
      )}
    >
      <div className="relative z-50 flex flex-col items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100  font-semibold tracking-wide", className)}>
      {children}
    </h4>
  );
};
