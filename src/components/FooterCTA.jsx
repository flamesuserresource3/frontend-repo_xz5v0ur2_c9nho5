import React from 'react';
import { Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="collaborate" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Rocket className="h-3.5 w-3.5" />
                Collaborate
              </p>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Plug into the system. Build faster. Scale smarter.
              </h3>
              <p className="mt-3 max-w-2xl text-white/60">
                Tell us about your venture. We’ll assemble the exact stack—brand, automation, content, and product—to compound your outcomes.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/50"
                />
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/50"
                />
                <textarea
                  rows="3"
                  placeholder="What are you building?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/50"
                />
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white/90">
                    Request access
                  </button>
                  <a href="mailto:hello@prismatic.systems" className="text-sm text-white/70 hover:text-white">
                    hello@prismatic.systems
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} PRISMATIC</span>
          <div className="flex items-center gap-4">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#journal" className="hover:text-white">Journal</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
