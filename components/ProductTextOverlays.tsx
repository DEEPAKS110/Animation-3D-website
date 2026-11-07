"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
}

const moments = [
  { start: 0.04, end: 0.22, side: "left" },
  { start: 0.27, end: 0.44, side: "right" },
  { start: 0.51, end: 0.69, side: "left" },
  { start: 0.77, end: 0.96, side: "right" },
] as const;

function StoryFrame({
  section,
  moment,
  progress,
}: {
  section: Product["storySections"][number];
  moment: (typeof moments)[number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [
      Math.max(0, moment.start - 0.06),
      moment.start,
      moment.end - 0.04,
      Math.min(1, moment.end),
    ],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [Math.max(0, moment.start - 0.06), moment.start, moment.end],
    [28, 0, -22],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute top-[58%] w-[min(34rem,calc(100vw-3rem))] -translate-y-1/2 sm:w-[min(34rem,45vw)] ${
        moment.side === "left"
          ? "left-[var(--page-gutter)] text-left"
          : "right-[var(--page-gutter)] text-right"
      }`}
    >
      <p className="eyebrow mb-5">{section.kicker}</p>
      <h2 className="whitespace-pre-line text-[clamp(3rem,7.5vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
        {section.title}
      </h2>
      <p className="ml-auto mt-6 max-w-sm text-sm leading-7 text-white/65 sm:text-base">
        {section.copy}
      </p>
    </motion.div>
  );
}

export default function ProductTextOverlays({
  product,
}: ProductTextOverlaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 top-0 h-[500vh]"
      aria-label={`${product.name} story`}
    >
      <div className="sticky top-0 flex h-screen items-center">
        {product.storySections.map((section, index) => {
          return (
            <StoryFrame
              key={section.kicker}
              section={section}
              moment={moments[index]}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}
