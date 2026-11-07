"use client";

import { useState, type FormEvent } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="bg-gray-950">
      <div className="page-gutter grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1.4fr] lg:gap-10">
        <div>
          <a href="#top" className="text-gradient text-3xl font-semibold tracking-[-0.07em]">
            primo.
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
            A little more flavour. A little more feeling. Make the everyday a Primo moment.
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-5">Shop</h2>
          <ul className="space-y-3 text-sm text-white/55">
            <li><a className="transition-colors hover:text-white" href="#details">Our flavour</a></li>
            <li><a className="transition-colors hover:text-white" href="#order">Order Primo</a></li>
            <li><a className="transition-colors hover:text-white" href="#freshness">Serving ideas</a></li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5">Support</h2>
          <ul className="space-y-3 text-sm text-white/55">
            <li><a className="transition-colors hover:text-white" href="#details">Flavour & product details</a></li>
            <li><a className="transition-colors hover:text-white" href="#order">Orders & delivery</a></li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-3">A little more Primo?</h2>
          <p className="mb-5 text-sm text-white/45">Fresh drops, happy moments, straight to your inbox.</p>
          {submitted ? (
            <p className="text-sm text-rose-200" role="status">You’re on the list. Stay delicious.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-md border-b border-white/25 pb-2">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button className="px-2 text-sm text-rose-200 transition-colors hover:text-white" type="submit">
                Join <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="page-gutter flex flex-col gap-3 border-t border-white/[0.08] py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Primo. Made for the moments.</span>
        <span>Good taste. Good energy.</span>
      </div>
    </footer>
  );
}
