"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const FRAME_COUNT = 120;

interface ProductBottleScrollProps {
  folderPath: string;
}

export default function ProductBottleScroll({
  folderPath,
}: ProductBottleScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.round(progressRef.current * (FRAME_COUNT - 1)),
    );
    const image = imagesRef.current[frameIndex];
    if (!image?.complete || image.naturalWidth === 0) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;

    const pixelWidth = Math.round(width * pixelRatio);
    const pixelHeight = Math.round(height * pixelRatio);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);

    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    context.drawImage(
      image,
      (width - drawWidth) / 2,
      (height - drawHeight) / 2,
      drawWidth,
      drawHeight,
    );
  }, []);

  const scheduleDraw = useCallback(() => {
    if (animationRef.current !== null) return;
    animationRef.current = window.requestAnimationFrame(() => {
      animationRef.current = null;
      drawFrame();
    });
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    progressRef.current = progress;
    scheduleDraw();
  });

  useEffect(() => {
    const images = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.onload = scheduleDraw;
      image.onerror = () => {
        console.error(`Unable to load product animation frame: ${image.src}`);
      };
      image.src = `${folderPath}/${index + 1}.jpg`;
      return image;
    });
    imagesRef.current = images;

    const resizeObserver = new ResizeObserver(scheduleDraw);
    if (canvasRef.current) resizeObserver.observe(canvasRef.current);
    scheduleDraw();

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
      imagesRef.current = [];
    };
  }, [folderPath, scheduleDraw]);

  return (
    <div ref={wrapperRef} className="relative h-[500vh]" aria-label="Product film">
      <div className="product-stage sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(193,35,54,0.2),transparent_58%)]" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Primo Strawberry bottle and strawberry splash animation"
          role="img"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#100306] to-transparent" />
      </div>
    </div>
  );
}
