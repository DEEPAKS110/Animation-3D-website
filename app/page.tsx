"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { products } from "@/data/products";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const product = products[currentIndex];
  const freshnessRef = useRef<HTMLElement>(null);
  const { scrollYProgress: freshnessProgress } = useScroll({
    target: freshnessRef,
    offset: ["start end", "end start"],
  });
  const freshnessY = useTransform(freshnessProgress, [0, 1], [50, -50]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#080506]">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          style={{ background: "var(--product-gradient)" }}
        >
          <section id="story" className="relative">
            <div className="relative">
              <ProductBottleScroll folderPath={product.folderPath} />
              <ProductTextOverlays product={product} />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-screen flex-col justify-between px-6 pb-8 pt-28 sm:px-10 lg:px-16">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="eyebrow">A strawberry original</p>
                    <p className="mt-2 text-xs tracking-wide text-white/55">A little bottle of big energy</p>
                  </div>
                  <span className="hidden text-[0.65rem] uppercase tracking-[0.23em] text-white/45 sm:block">
                    Scroll to feel it <span className="ml-2 text-rose-200">↓</span>
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Made for your main-character moments
                  </p>
                  <span className="text-xs tracking-widest text-white/45">01 — 04</span>
                </div>
              </div>
            </div>

            <div className="page-gutter relative z-10 -mt-2 pb-28 pt-24 sm:pb-36 sm:pt-36">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-4xl text-center"
              >
                <p className="eyebrow">{product.tagline}</p>
                <h1 className="mt-5 text-[clamp(3.2rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
                  Strawberry,
                  <br />
                  <span className="text-gradient">unleashed.</span>
                </h1>
                <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                  {product.description}
                </p>
                <a
                  href="#details"
                  className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.15em] transition-colors hover:border-rose-300/70 hover:bg-white/[0.05]"
                >
                  Discover Primo <span aria-hidden="true" className="text-rose-200">↓</span>
                </a>
              </motion.div>
            </div>
          </section>

          <section id="details" className="page-gutter relative py-24 sm:py-36">
            <div className="absolute right-0 top-1/4 -z-0 h-80 w-80 rounded-full bg-rose-900/20 blur-[120px]" />
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div>
                <p className="eyebrow">{product.detailsSection.eyebrow}</p>
                <h2 className="mt-6 whitespace-pre-line text-[clamp(2.6rem,6.6vw,6.5rem)] font-medium leading-[0.91] tracking-[-0.075em]">
                  {product.detailsSection.title}
                </h2>
              </div>
              <div className="max-w-md pb-2 lg:justify-self-end">
                <p className="text-base leading-8 text-white/55">{product.detailsSection.copy}</p>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-5">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/35">{stat.label}</p>
                      <p className="mt-2 text-sm font-medium text-white/80">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="relative z-10 mt-16 flex flex-wrap gap-3">
              {product.features.map((feature) => (
                <span key={feature} className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
                  {feature}
                </span>
              ))}
            </div>
          </section>

          <section
            ref={freshnessRef}
            id="freshness"
            className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#18080c] py-24 sm:min-h-[760px]"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_68%_50%,rgba(187,37,58,0.27),transparent_44%),linear-gradient(110deg,#130609,#280a11_58%,#120609)]" />
            <motion.div
              style={reduceMotion ? undefined : { y: freshnessY }}
              className="page-gutter w-full"
            >
              <div className="max-w-3xl">
                <p className="eyebrow">{product.freshnessSection.eyebrow}</p>
                <h2 className="mt-6 whitespace-pre-line text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.08em]">
                  {product.freshnessSection.title}
                </h2>
                <p className="mt-8 max-w-md text-base leading-8 text-white/60">
                  {product.freshnessSection.copy}
                </p>
                <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-rose-100/70">
                  <span className="h-px w-12 bg-rose-200/60" />
                  Find your fresh
                </div>
              </div>
            </motion.div>
            <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full border border-rose-200/10 sm:right-[10%] sm:h-[30rem] sm:w-[30rem]" />
            <div className="pointer-events-none absolute -right-8 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full border border-rose-200/[0.07] sm:right-[13%] sm:h-[24rem] sm:w-[24rem]" />
          </section>

          <section id="order" className="page-gutter py-24 sm:py-36">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8 }}
              className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16"
            >
              <div>
                <p className="eyebrow">{product.buyNowSection.eyebrow}</p>
                <h2 className="mt-5 whitespace-pre-line text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                  {product.buyNowSection.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-white/55">{product.buyNowSection.copy}</p>
                <ul className="mt-8 space-y-3 text-sm text-white/55">
                  <li><span className="mr-3 text-rose-200">✳</span>{product.buyNowSection.delivery}</li>
                  <li><span className="mr-3 text-rose-200">✳</span>{product.buyNowSection.returns}</li>
                </ul>
              </div>
              <div className="min-w-52 lg:text-right">
                <p className="eyebrow">One glorious bottle</p>
                <p className="mt-2 text-4xl font-medium tracking-tight">{product.price}</p>
                <button
                  type="button"
                  onClick={() => setAddedToCart(true)}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-[#c6283c] to-[#e04b55] px-8 py-4 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99] lg:w-auto"
                >
                  {addedToCart ? "Added to your bag ✓" : "Add to bag"}
                </button>
                <p className="mt-3 text-center text-xs text-white/35 lg:text-right" aria-live="polite">
                  {addedToCart ? "Good choice. This one’s a keeper." : "A little joy, just a click away."}
                </p>
              </div>
            </motion.div>
          </section>

          <section className="relative overflow-hidden bg-[#340b12] py-24 text-center sm:py-36">
            <div className="absolute inset-0 -skew-y-3 bg-gradient-to-br from-[#4a0b15] via-[#25070c] to-[#150609]" />
            <div className="page-gutter relative">
              <p className="eyebrow">This is your sign</p>
              <h2 className="mx-auto mt-6 max-w-5xl text-[clamp(3.2rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.085em]">
                Experience the
                <br />
                <span className="text-gradient">explosion.</span>
              </h2>
              <a
                href="#order"
                className="mt-10 inline-flex rounded-full border border-rose-200/50 bg-rose-400/10 px-8 py-4 text-sm font-medium shadow-[0_0_70px_rgba(229,57,79,0.2)] transition-all hover:bg-rose-400/20 hover:shadow-[0_0_90px_rgba(229,57,79,0.38)]"
              >
                Meet your Primo moment <span className="ml-3 text-rose-200">↗</span>
              </a>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <div id="footer">
        <Footer />
      </div>
      <span className="sr-only" aria-live="polite">
        Current product: {products[currentIndex].name}
      </span>
    </main>
  );
}
