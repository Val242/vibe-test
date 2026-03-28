

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Get in Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Have a project in mind, or just want to say hi?</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-start group">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 dark:bg-zinc-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-brand dark:text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">Phone Number</h3>
          <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">671369673</p>
        </div>

        <div className="glass rounded-[2rem] p-6 md:p-10 flex flex-col justify-center items-start group">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 dark:bg-zinc-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-brand dark:text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">Email Address</h3>
          <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white truncate max-w-full">
            <a href="mailto:ebongvalentine70@gmail.com" className="hover:text-brand dark:hover:text-brand-light transition-colors">ebongvalentine70@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
