import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Infinite Leverage: Building with Creative Systems',
    tag: 'Theory',
  },
  {
    title: 'Designing Brands for Agentic Workflows',
    tag: 'Design',
  },
  {
    title: 'Shortform as a Product Surface',
    tag: 'Content',
  },
];

export default function AboutJournal() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
            <p className="mt-4 text-white/70">
              PRISMATIC is a digital flagship and operational command center. We fuse design, storytelling, and intelligent systems to compound your execution capacity.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/60">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <div>Creative Engine</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">4</div>
                <div>Specialist Studios</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">∞</div>
                <div>Leverage Model</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="journal"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pl-8"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-medium">Journal</h3>
              <a href="#" className="text-sm text-white/60 hover:text-white">View all</a>
            </div>
            <div className="space-y-3">
              {posts.map((p) => (
                <article key={p.title} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {p.tag}
                  </div>
                  <h4 className="mt-2 text-base font-medium group-hover:underline">{p.title}</h4>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
