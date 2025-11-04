import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays to enhance contrast (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            PRISMATIC • Creative Intelligence Layer
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Ideas in. Leverage out.
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            A premium creative system that turns light into laser—strategy, brand, content, product, and automation executed at the speed of thought.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#collaborate" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
              Collaborate
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#studios" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              Explore Studios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
