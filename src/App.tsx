import { Outlet, Link } from 'react-router-dom'
import { useTheme } from './components/ThemeProvider'
import { useState } from 'react'
import './App.css'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2.5 rounded-full glass glass-hover transition-colors flex items-center justify-center leading-none"
      aria-label="Toggle Theme"
      title="Toggle Dark/Light Mode"
    >
      <span className="text-lg relative top-[1px]">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Work', path: '/workout' },
    { name: 'Contact', path: '/contact' },
  ]

  // Prevent scroll when mobile menu is open
  if (typeof window !== 'undefined') {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Navbar (Global Layout) */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white relative z-50">
          Val<span className="text-[var(--color-brand)]">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
             <Link key={link.name} to={link.path} className="hover:text-zinc-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-[var(--color-brand-light)] pb-1">
               {link.name}
             </Link>
          ))}
        </div>
        
        {/* Desktop & Mobile Shared Toggles */}
        <div className="flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button className="hidden md:block px-5 py-2 glass rounded-full text-sm font-medium text-zinc-900 dark:text-white transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800/80">
            Resume
          </button>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden p-2 rounded-full glass flex items-center justify-center transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <svg className="w-5 h-5 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Fullscreen Overlay */}
        <div className={`md:hidden fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center gap-8`}>
           {navLinks.map((link) => (
             <Link 
               key={link.name}
               to={link.path} 
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white hover:text-[var(--color-brand)] transition-colors"
             >
               {link.name}
             </Link>
           ))}
           <div className="w-24 h-px bg-zinc-200 dark:bg-zinc-800 my-4"></div>
           <button className="px-8 py-3.5 bg-[var(--color-brand)] text-white rounded-full font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)]">
             Download Resume
           </button>
        </div>
      </nav>

      {/* Main Content Area populated by Router */}
      <div className="flex-1 w-full flex flex-col relative z-10 overflow-hidden">
        <Outlet />
      </div>
      
      {/* Footer (Global Layout) */}
      <footer className="relative z-10 border-t border-[var(--color-border)] py-12 px-6 md:px-12 mt-12 text-center text-zinc-500 text-sm w-full mx-auto max-w-7xl">
        <p>© {new Date().getFullYear()} Val. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
