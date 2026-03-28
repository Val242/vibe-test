import React from 'react';
import heroImg from '../assets/hero_background.png';

export default function Work() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Featured Work</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Some of my recent projects and experiments.</p>
        </div>
        <button className="mt-6 md:mt-0 text-[var(--color-brand)] dark:text-[var(--color-brand-light)] hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 group transition-colors">
          View All Projects
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((project) => (
          <div key={project} className="glass rounded-[2rem] overflow-hidden group">
            <div className="h-64 bg-zinc-200 dark:bg-zinc-800/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--color-brand)]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={heroImg} 
                alt="Project Thumbnail" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-[var(--color-brand)]/20 text-[var(--color-brand)] dark:text-[var(--color-brand-light)] rounded-full border border-[var(--color-brand)]/30">React</span>
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-[var(--color-border)]">Tailwind</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Project Title {project}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                A revolutionary application that completely changes the way users interact with digital ecosystems. Built from the ground up using modern web technologies.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-light)] transition-colors">
                Read Case Study
                <svg className="w-4 h-4" transform="rotate(-45)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
