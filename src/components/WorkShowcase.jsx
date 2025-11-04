import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Signal → Story',
    result: 'Brand + Content engine that 4×ʼd pipeline in 90 days',
    tone: 'from-emerald-400/10 via-emerald-400/5 to-transparent',
  },
  {
    title: 'Ops → Automation',
    result: 'Agentic workflows reduced cycle time by 63%',
    tone: 'from-cyan-400/10 via-cyan-400/5 to-transparent',
  },
  {
    title: 'Prototype → Product',
    result: 'Zero-to-one SaaS shipped in 6 weeks',
    tone: 'from-violet-400/10 via-violet-400/5 to-transparent',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work</h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Case studies crafted as moving pictures—scroll to explore outcomes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${c.tone}`} />
              <div className="relative z-10 p-6">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
                <h3 className="mt-5 text-xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-white/60">{c.result}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Precision • Speed • Craft
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
