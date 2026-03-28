import React from 'react';
import heroImg from '../assets/hero_background.png';

export default function LandingPage() {
  return (
    <div className="relative selection:bg-brand selection:text-white pb-20 w-full min-h-[85vh]">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand)] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-500 opacity-20 blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex-1 text-center md:text-left space-y-8 mt-12 md:mt-0">
          <div className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-brand)] dark:text-[var(--color-brand-light)] text-sm font-medium tracking-wide mb-2 mt-4">
            ✨ Available for new opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Building Digital <br className="hidden md:block" />
            <span className="text-gradient">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I'm a Developer specializing in creating interactive, visually stunning, and highly performant web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch justify-center md:justify-start gap-4 pt-4 w-full">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-brand)] hover:brightness-110 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              View Work
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 glass glass-hover text-zinc-900 dark:text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full mt-16 md:mt-0 flex justify-center items-center relative perspective-[1000px] mb-12 md:mb-0">
          {/* Abstract Hero Image Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 animate-float z-10">
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand)] to-fuchsia-500 rounded-3xl blur-2xl opacity-40"></div>
             <img 
               src={heroImg} 
               alt="Abstract 3D Background" 
               className="relative w-full h-full object-cover rounded-3xl glass shadow-2xl"
             />
          </div>
          {/* Floating UI Elements */}
          <div className="absolute top-[15%] right-[10%] md:right-10 glass px-5 py-3 rounded-2xl animate-float-delayed z-20 flex items-center gap-3 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Project Status</p>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
