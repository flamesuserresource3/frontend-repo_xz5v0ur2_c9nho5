import React from 'react';
import { Rocket, Cog, Video, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const studios = [
  {
    title: 'Branding Studio',
    icon: Rocket,
    blurb:
      'Identity systems, naming, visual language. Sharp, timeless, and unmistakably premium.',
  },
  {
    title: 'Automation Studio',
    icon: Cog,
    blurb:
      'Workflows, agents, and internal tools. Scale output with compound leverage.',
  },
  {
    title: 'Shortform Studio',
    icon: Video,
    blurb:
      'High-frequency content engines that convert attention into demand.',
  },
  {
    title: 'Product Studio',
    icon: Box,
    blurb:
      'From concept to ship. Interfaces, prototypes, and revenue-ready products.',
  },
];

export default function Studios() {
  return (
    <section id="studios" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Studios</h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Specialist units that plug into your venture as a seamless, modular stack.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-2xl shadow-emerald-500/5 backdrop-blur">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.12), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
