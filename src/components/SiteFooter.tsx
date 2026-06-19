// Shared institute footer. Quiet, editorial, with institute identity,
// navigation, and a pointer to the inaugural meeting archive.

const FOOTER_LINKS = [
  { label: 'About SIAN', href: '/#about-sian' },
  { label: 'Meeting 1 Outcomes', href: '/#outcomes' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'BHB Working Group', href: '/#working-group' },
  { label: 'December Meeting', href: '/#december' },
  { label: 'Register Interest', href: '/#register' },
]

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-stone">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-16 md:py-20 mobile-section-px">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/sian-logo.png"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-serif text-xl text-stone">SIAN</span>
            </div>
            <p className="font-serif text-lg md:text-xl leading-snug text-stone/90 max-w-sm">
              Scientific Institute for Advanced Nutrition
            </p>
            <p className="text-sm text-stone/60 leading-relaxed mt-4 max-w-sm">
              An independent scientific body advancing evidence-based metabolic
              nutrition through rigorous science, expert dialogue, and clinically
              relevant translation.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-4 md:col-start-7">
            <h4 className="eyebrow text-stone/50 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-stone/70 hover:text-stone transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive / contact */}
          <div className="md:col-span-3">
            <h4 className="eyebrow text-stone/50 mb-5">Institute</h4>
            <ul className="space-y-3 text-sm text-stone/70">
              <li>
                <a href="/meeting-2026" className="hover:text-stone transition-colors">
                  Inaugural Meeting (June 2026)
                </a>
              </li>
              {/* TODO: replace with the institute's official contact address. */}
              <li>
                <a
                  href="mailto:info@advancednutrition.institute"
                  className="hover:text-stone transition-colors"
                >
                  info@advancednutrition.institute
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-stone/10 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-stone/40">
            &copy; 2026 Scientific Institute for Advanced Nutrition. All rights reserved.
          </p>
          <p className="text-xs text-stone/40">
            Independent scientific institute &middot; Europe &middot; Japan &middot; United States
          </p>
        </div>
      </div>
    </footer>
  )
}
