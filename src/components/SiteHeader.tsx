import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// Institute navigation. Items link to homepage sections via root-relative
// hash anchors so they resolve correctly from any route (e.g. the archival
// /meeting-2026 page navigates home, then scrolls to the section).
const NAV_ITEMS = [
  { label: 'About SIAN', href: '/#about-sian' },
  { label: 'Meeting 1 Outcomes', href: '/#outcomes' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'BHB Working Group', href: '/#working-group' },
  { label: 'December Meeting', href: '/#december' },
  { label: 'Register Interest', href: '/#register' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stone/90 backdrop-blur-md border-b border-line'
            : 'bg-stone border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-[68px]">
            {/* Wordmark */}
            <a href="/" className="flex items-center gap-3 group min-w-0">
              <img
                src="/sian-logo.png"
                alt="Scientific Institute for Advanced Nutrition"
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <span className="flex flex-col leading-none min-w-0">
                <span className="font-serif text-lg md:text-xl font-medium text-charcoal tracking-tight truncate">
                  SIAN
                </span>
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.16em] text-graphite-soft font-medium mt-0.5">
                  Advanced Nutrition
                </span>
              </span>
            </a>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.slice(0, -1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-graphite hover:text-forest transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#register"
                className="text-sm font-medium text-forest border border-forest/40 rounded-full px-5 py-2 hover:bg-forest hover:text-stone-card transition-colors"
              >
                Register Interest
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-charcoal hover:text-forest transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + drawer */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-[60] mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[82vw] bg-stone-card z-[70] shadow-2xl mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-line">
          <span className="font-serif text-lg text-charcoal">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-charcoal hover:text-forest transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col py-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-[17px] text-graphite hover:text-forest hover:bg-forest-wash transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
