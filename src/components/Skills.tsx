

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Tech Arsenal</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'React', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
          { name: 'TypeScript', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
          { name: 'Tailwind CSS', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
          { name: 'Node.js', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
        ].map((skill, index) => (
          <div key={index} className="glass glass-hover p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default">
            <div className="w-16 h-16 rounded-xl bg-[var(--color-border)] dark:bg-zinc-800/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand)]/20 transition-all duration-300">
              <svg className="w-8 h-8 text-zinc-500 dark:text-zinc-400 group-hover:text-[var(--color-brand)] dark:group-hover:text-[var(--color-brand-light)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
