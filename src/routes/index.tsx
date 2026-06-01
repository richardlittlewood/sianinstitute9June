import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  MapPin,
  Calendar,
  Clock,
  Mail,
  Globe,
  Award,
  BookOpen,
  Users,
  Microscope,
  GraduationCap,
  Target,
  Shield,
  Heart,
  Eye,
  Lightbulb,
  Monitor,
  Video,
  Wifi,
  Mic,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: SIANHome,
})

/* ──────────────── DATA ──────────────── */

const NAV_ITEMS = [
  { label: 'Confirmed Academic Speakers', href: '#speakers' },
  { label: 'About SIAN', href: '#about-sian' },
  { label: 'About the Meeting', href: '#about-meeting' },
  { label: 'Scientific Program', href: '#programme' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Venue & Format', href: '#venue' },
  { label: 'Register Interest', href: '#register' },
]

const PROGRAMME_SESSIONS = [
  {
    label: 'SESSION I: KEYNOTE & CORE SCIENCE',
    headerBg: '#E0E7FF',
    headerText: '#3730A3',
    items: [
      { topic: 'Welcome & Introduction: SIAN Faculty Mission', speaker: 'Dr. Richard Littlewood (UK) & Dr. Jun Tsubota (JP)' },
      { topic: 'Beta-hydroxybutyrate (BHB): From Alternative Fuel to Applied Metabolic Nutrition for Alzheimer’s and other Brain Disorders', speaker: 'Dr. Mary Newport (US)' },
      { topic: 'Ketones and Performance', speaker: 'Dr. Jacob Wilson (USA)' },
      { topic: 'Functional Effects of Oral β-Hydroxybutyrate on Attention and Mental Fatigue in Healthy Adults', speaker: 'Mr. Satoshi Morita (JP)' },
    ],
  },
  {
    label: 'SESSION II: SPECIALISED APPLICATIONS',
    headerBg: '#DCFCE7',
    headerText: '#166534',
    items: [
      { topic: 'The Metabolic Face of Migraine & Potential Protective Mechanisms of Ketone Bodies', speaker: 'Dr. Elena Gross (CH)' },
      { topic: 'Break I', speaker: '' },
      { topic: 'Mitochondrial Health: From Cellular Science to Clinical Practice', speaker: 'Prof. Dr. Ben Bikman (USA)' },
    ],
  },
  {
    label: 'SESSION III: WORKSHOP – SUPPLY & REGULATION, LEGAL',
    headerBg: '#FEF9C3',
    headerText: '#854D0E',
    items: [
      { topic: 'Key Observations: The Potential of BHB', speaker: 'Gary Millet (USA) & Rob Rogers (USA)' },
      { topic: 'Innovation in D-β-Hydroxybutyrate (D-BHB) Production via Precision Fermentation and Its Low-Dose Clinical Efficacy', speaker: 'Dr. Jun Tsubota (JP)' },
      { topic: 'BHB Supply and Clinical Application: A Pathway Forward for Optimal Consumer Access', speaker: 'Dr. Richard Littlewood (UK)' },
      { topic: 'Break II', speaker: '' },
    ],
  },
  {
    label: 'SESSION IV: SPECIALISED APPLICATIONS',
    headerBg: '#F3E8FF',
    headerText: '#6B21A8',
    items: [
      { topic: 'Multi-Energy Substrates in Hypoglycaemia Self-Care: Evidence Standards, Regulatory Pathways', speaker: 'Prof. Dr. D. Russell-Jones (UK)' },
      { topic: 'Insights From Clinical Application of BHB', speaker: 'Prof. Dr. Christina Heidt (DE)' },
      { topic: 'BHB Role in Metabolic Signaling in Epilepsy and Seizure Control', speaker: 'Dr. Ryley Parrish (USA)' },
    ],
  },
  {
    label: 'CLOSING KEYNOTE',
    headerBg: '#CCFBF1',
    headerText: '#042F2E',
    items: [
      { topic: 'BHB in Neuroprotection & Inflammation; Future of BHB', speaker: "Prof. Dominic D'Agostino (USA)" },
      { topic: 'Conclusions', speaker: 'Dr. Richard Littlewood & Dr. Jun Tsubota' },
    ],
  },
]

const MEETING_CHAIRS = [
  {
    name: 'Dr. R. Littlewood',
    suffix: 'MD',
    role: 'Europe Chair',
    description: 'Medical Doctor; Inventor of Klario. Clinical applications & regulatory vision for BHB.',
    initials: 'RL',
  },
  {
    name: 'Dr. J. Tsubota',
    suffix: '',
    role: 'Japan Chair',
    description: 'International metabolic nutrition.',
    initials: 'JT',
  },
  {
    name: 'Gary Millet',
    suffix: '',
    role: 'USA Chair',
    description: 'Global pioneer in production & application of BHB.',
    initials: 'GM',
  },
]

const SESSION_FACULTY = [
  {
    name: 'G. Myers',
    suffix: '',
    role: 'United Kingdom',
    description: 'Global BHB regulatory landscape.',
    initials: 'GM',
  },
  {
    name: 'Prof. Dr. D. Russell-Jones',
    suffix: '',
    role: 'United Kingdom',
    description: 'BHB evidence in diabetes management.',
    initials: 'DR',
  },
  {
    name: 'Prof. Dr. M. Laffan',
    suffix: '',
    role: 'United Kingdom',
    description: 'BHB mechanism of action.',
    initials: 'ML',
  },
]

/* ──────────────── COMPONENTS ──────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Top Tier: Logo + Title + Hamburger */}
          <div className="flex items-center justify-center pt-4 pb-2">
            <a href="#" className="flex items-center gap-3 md:gap-4 group min-w-0 flex-1 md:flex-initial md:justify-center">
              <img
                src="/sian-logo.png"
                alt="SIAN Logo"
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover shrink-0"
              />
              <span className="text-base leading-tight md:text-2xl lg:text-3xl font-bold text-[#10243E]">
                Scientific Institute for Advanced Nutrition
              </span>
            </a>

            {/* Mobile Hamburger Button - Navy colored */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#10243E] hover:text-sian-teal transition-colors ml-2 shrink-0"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Bottom Tier: Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 pb-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 xl:px-4 py-2 text-sm text-sian-text-muted hover:text-sian-teal transition-colors rounded-lg hover:bg-sian-teal-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Slide-Out Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white z-[70] shadow-2xl mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-sian-border">
          <span className="text-lg font-bold text-[#10243E]">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-[#10243E] hover:text-sian-teal transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-[18px] text-sian-text-muted hover:text-sian-teal hover:bg-sian-teal-light transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 text-center mobile-section-px">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-sian-orange-dark text-white text-xs font-bold tracking-widest uppercase mb-8">
          Special Focus Meeting
        </div>

        {/* Main Headline */}
        <p className="fluid-hero-sub font-medium text-sian-text-muted tracking-wide uppercase mb-3">
          Scientific Institute for Advanced Nutrition
        </p>
        <h1 className="fluid-hero font-bold text-sian-navy leading-tight mb-8">
          BHB in Applied Metabolic Nutrition
        </h1>
        <p className="text-base md:text-lg text-sian-text-muted leading-relaxed max-w-3xl mx-auto mb-10">
          An exclusive global expert meeting on the cutting-edge science and regulation of BHB.
          <br className="hidden sm:inline" />
          {' '}Featuring foundational presentations from Prof. Dominic D'Agostino, Dr. Mary Newport, Dr. Elena Gross, and more.
        </p>

        {/* Event Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sian-teal-light text-sian-teal text-sm font-medium">
            <Calendar className="w-4 h-4" />
            9 June 2026
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sian-teal-light text-sian-teal text-sm font-medium">
            <Clock className="w-4 h-4" />
            Session from 9:00 EDT
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sian-teal-light text-sian-teal text-sm font-medium">
            <MapPin className="w-4 h-4" />
            Online
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#programme"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sian-orange text-white font-semibold text-lg hover:bg-sian-orange-dark transition-colors shadow-lg shadow-sian-orange/30"
          >
            View Scientific Program
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-sian-teal font-semibold text-lg border-2 border-sian-teal hover:bg-sian-teal-light transition-colors"
          >
            Register Interest
          </a>
        </div>
      </div>
    </section>
  )
}

function SponsorsSection() {
  return (
    <section className="bg-white">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Sponsors &amp; Partners
        </p>

        <div
          className="flex flex-col sm:flex-row"
          style={{ alignItems: 'center', justifyContent: 'center', gap: '80px' }}
        >
          {/* Lead Sponsor */}
          <div className="flex flex-col items-center" style={{ gap: '12px' }}>
            <div className="flex items-center justify-center" style={{ height: '95px' }}>
              <img
                src="/sponsor-osaka-gas.jpg"
                alt="Osaka Gas / Daigas Group"
                className="object-contain"
                style={{ height: '95px' }}
              />
            </div>
            <span style={{ color: '#004225', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Lead Sponsor
            </span>
          </div>

          {/* With Support From */}
          <div className="flex flex-col items-center" style={{ gap: '12px' }}>
            <div className="flex items-center justify-center" style={{ height: '95px' }}>
              <img
                src="/sponsor-suntory.jpg"
                alt="Suntory Global Innovation Center"
                className="object-contain"
                style={{ height: '95px', maxWidth: '260px' }}
              />
            </div>
            <span style={{ color: '#4B5563', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              With Support From
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSIANSection() {
  const features = [
    {
      icon: Microscope,
      title: 'Evidence',
      description: 'Generating and evaluating high-quality clinical evidence for metabolic nutrition interventions.',
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Upholding rigorous scientific and manufacturing standards across research and product development.',
    },
    {
      icon: Heart,
      title: 'Clinical Impact',
      description: 'Translating bench science into actionable clinical guidance for healthcare professionals.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Maintaining full disclosure of conflicts, funding sources, and scientific methodology.',
    },
  ]

  return (
    <section id="about-sian" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            About SIAN
          </div>
        </div>
        <h2 className="fluid-section-heading md:text-4xl lg:text-5xl font-bold text-sian-navy mb-8 text-center max-w-4xl mx-auto">
          Scientific Institute for Advanced Nutrition
        </h2>
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-sian-text-muted leading-relaxed text-lg">
            The Scientific Institute for Advanced Nutrition is an independent body committed
            to advancing evidence-based metabolic nutrition through rigorous science and
            clinical translation.
          </p>
          <p className="text-sian-text-muted leading-relaxed text-lg mt-4">
            SIAN is an independent expert group focused on bringing rigorous science and clear standards to metabolic nutrition, including BHB. SIAN brings together leaders in the field to define standards that call for high-quality, indication-specific clinical data and reliable product supply for advanced nutrition products, so they can be used with confidence by patients and clinicians under the standards of global regulators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-sian-teal-light flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-sian-teal" />
              </div>
              <h3 className="text-lg font-semibold text-sian-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-sian-text-muted leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutMeetingSection() {
  return (
    <section id="about-meeting" className="py-20 md:py-28 bg-sian-bg-light">
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            About the Meeting
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-sian-navy">
            BHB in Applied Metabolic Nutrition
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Scientific Rationale */}
          <div className="flex flex-col p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sian-teal-light flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6 text-sian-teal" />
            </div>
            <h3 className="text-xl font-semibold text-sian-navy mb-3">Scientific Rationale</h3>
            <p className="text-sm text-sian-text-muted leading-relaxed">
              Beta-hydroxybutyrate (BHB) has emerged as a molecule of significant clinical interest
              beyond its role as an energy substrate. This meeting convenes leading investigators to
              evaluate the current evidence base, identify knowledge gaps, and set priorities for
              rigorous clinical research in metabolic nutrition.
            </p>
          </div>

          {/* Intended Audience */}
          <div className="flex flex-col p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sian-teal-light flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-sian-teal" />
            </div>
            <h3 className="text-xl font-semibold text-sian-navy mb-3">Intended Audience</h3>
            <ul className="text-sm text-sian-text-muted leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Clinicians and metabolic medicine specialists
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Nutrition scientists and researchers
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Regulatory affairs professionals
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Industry leaders in metabolic health
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Academic investigators in ketone biology
              </li>
            </ul>
          </div>

          {/* Key Themes */}
          <div className="flex flex-col p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sian-teal-light flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-sian-teal" />
            </div>
            <h3 className="text-xl font-semibold text-sian-navy mb-3">Key Themes</h3>
            <ul className="text-sm text-sian-text-muted leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Standards and worldwide regulation of BHB
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Innovation in supply, production, and natural fermented BHB
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Clinical applications in migraine, diabetes, and mechanism of action
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sian-teal mt-1.5 shrink-0" />
                Future science: brain function, ageing, and BHB signalling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgrammeSection() {
  return (
    <section id="programme" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            Scientific Program
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-sian-navy">
            Program at a Glance
          </h2>
          <p className="mt-4 text-sian-text-muted">9 June 2026 &middot; Online Session &middot; 9:00 EDT</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <table className="w-full border-collapse">
            <tbody>
              {PROGRAMME_SESSIONS.map((session, si) => (
                <>
                  <tr key={`header-${si}`}>
                    <td
                      colSpan={2}
                      className="px-6 py-3.5 text-sm font-bold tracking-wide uppercase"
                      style={{ backgroundColor: session.headerBg, color: session.headerText }}
                    >
                      {session.label}
                    </td>
                  </tr>
                  {session.items.map((item, ii) => {
                    const isBreak = item.topic.startsWith('Break');
                    if (isBreak) {
                      return (
                        <tr key={`${si}-${ii}`} style={{ backgroundColor: '#F9FAFB' }}>
                          <td
                            colSpan={2}
                            className="px-6 py-3 text-center text-sm italic text-gray-400"
                            style={{ borderBottom: '1px solid #E5E7EB' }}
                          >
                            {item.topic}
                          </td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={`${si}-${ii}`}>
                        <td
                          className="px-6 py-4 text-[15px] font-semibold text-gray-800 leading-snug text-left align-top"
                          style={{ borderBottom: '1px solid #E5E7EB' }}
                        >
                          {item.topic}
                        </td>
                        <td
                          className="px-6 py-4 text-sm text-gray-500 text-right whitespace-nowrap align-top"
                          style={{ borderBottom: '1px solid #E5E7EB' }}
                        >
                          {item.speaker}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function FacultyCard({ person }: { person: { name: string; suffix: string; role: string; description: string; initials: string } }) {
  return (
    <div className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
      <div className="w-20 h-20 rounded-full bg-sian-navy flex items-center justify-center mb-4">
        <span className="text-2xl font-light text-white">
          {person.initials}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-sian-navy text-center mb-0.5">
        {person.name}
        {person.suffix && <span className="text-sian-text-muted font-normal">, {person.suffix}</span>}
      </h3>
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sian-teal-light text-sian-teal mt-2 mb-3">
        {person.role}
      </span>
      <p className="text-sm text-sian-text-muted text-center">{person.description}</p>
    </div>
  )
}

function FacultySection() {
  return (
    <section id="faculty" className="py-20 md:py-28 bg-sian-bg-light">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            Faculty
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-sian-navy mb-6">
            Meeting Faculty
          </h2>
          <p className="text-sian-text-muted max-w-3xl mx-auto leading-relaxed">
            The Scientific Institute for Advanced Nutrition is proud to be guided by a world-class faculty of clinical pioneers, regulatory experts, and breakthrough innovators. Our leadership spans three continents—bringing together deep expertise from Europe, Japan, and the United States to advance thinking and standards for Beta-hydroxybutyrate (BHB) and applied metabolic nutrition.
          </p>
        </div>

        {/* Meeting Chairs */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-sian-navy text-center mb-8">Meeting Chairs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEETING_CHAIRS.map((person, i) => (
              <FacultyCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* Session Faculty */}
        <div>
          <h3 className="text-xl font-semibold text-sian-navy text-center mb-8">Session Faculty</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SESSION_FACULTY.map((person, i) => (
              <FacultyCard key={i} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ConfirmedSpeakersSection() {
  const speakers = [
    { name: 'Prof. Dr. Ben Bikman', country: 'US', affiliation: 'Brigham Young University', bio: 'Leading investigator in mitochondrial function.', initials: 'BB' },
    { name: "Prof. Dominic D'Agostino", country: 'USA', affiliation: 'University of South Florida / IHMC', bio: 'Leading expert in neuroprotection, oxygen toxicity, and metabolic therapies.', initials: 'DD' },
    { name: 'Dr. Elena Gross', country: 'CH', affiliation: 'KetoSwiss / University of Basel', bio: 'Specialist in clinical neuroscience and the metabolic management of chronic migraine.', initials: 'EG' },
    { name: 'Prof. Dr. Christina Heidt', country: 'DE', affiliation: 'Trier University of Applied Sciences', bio: 'Specialist in nutrition and rare metabolic disorders.', initials: 'CH' },
    { name: 'Dr. Richard Littlewood', country: 'UK', affiliation: 'Flow Health Science', bio: 'Inventor of Klario (BHB product for diabetes hypos).', initials: 'RL' },
    { name: 'Mr. Satoshi Morita', country: 'JP', affiliation: 'Suntory Global Innovation Center', bio: 'Specialist in the cognitive benefits of metabolic signalling metabolites.', initials: 'SM' },
    { name: 'Dr. Mary Newport', country: 'US', affiliation: 'TriVital Therapeutics', bio: 'Pioneer in ketone therapies for neuroprotection and cellular energy.', initials: 'MN' },
    { name: 'Dr. Ryley Parrish', country: 'USA', affiliation: 'Brigham Young University', bio: 'Specialist in the neurobiology of epilepsy and metabolic modulation of brain excitability.', initials: 'RP' },
    { name: 'Prof. Dr. D. Russell-Jones', country: 'UK', affiliation: 'University of Surrey', bio: 'Clinical expert in diabetes, including BHB applications.', initials: 'DR' },
    { name: 'Dr. Jun Tsubota', country: 'JP', affiliation: 'Osaka Gas Co., Ltd', bio: 'Expert in microbial production of BHB.', initials: 'JT' },
    { name: 'Dr. Jacob Wilson', country: 'USA', affiliation: 'ASPI Tampa', bio: 'Specialist in BHB effects on body composition & muscle protein synthesis.', initials: 'JW' },
  ]

  return (
    <section id="speakers" className="py-20 md:py-28 bg-sian-bg-light">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <Mic className="w-4 h-4" />
            Speakers
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-[#004225] mb-6">
            Confirmed Academic Speakers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-[#004225] flex items-center justify-center mb-4">
                <span className="text-2xl font-light text-white">
                  {speaker.initials}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#004225] text-center mb-0.5">
                <em>{speaker.name}</em>
              </h3>
              <span className="text-xs text-sian-text-muted mb-1">({speaker.country})</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sian-teal-light text-sian-teal mt-1 mb-3 text-center">
                {speaker.affiliation}
              </span>
              <p className="text-sm text-sian-text-muted text-center">{speaker.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 py-5 px-6 text-center">
          <p className="text-sm font-light text-sian-text-muted italic">More speakers to be confirmed</p>
        </div>
      </div>
    </section>
  )
}

function VenueSection() {
  return (
    <section id="venue" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            Venue & Format
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-sian-navy">
            How to Attend
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-all w-full max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sian-teal-light flex items-center justify-center">
                <Monitor className="w-6 h-6 text-sian-teal" />
              </div>
              <h3 className="text-xl font-semibold text-sian-navy">Online Participation</h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-sian-teal mt-0.5 shrink-0" />
                <div>
                  <div className="text-sian-navy font-medium">Format</div>
                  <div className="text-sm text-sian-text-muted">Live-streamed via secure conference platform</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-sian-teal mt-0.5 shrink-0" />
                <div>
                  <div className="text-sian-navy font-medium">Interaction</div>
                  <div className="text-sm text-sian-text-muted">Full participation including Q&A</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-sian-teal mt-0.5 shrink-0" />
                <div>
                  <div className="text-sian-navy font-medium">Time Zones</div>
                  <div className="text-sm text-sian-text-muted">EDT (Eastern Daylight Time, UTC-4) — Start: 9:00 EDT</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-sian-teal mt-0.5 shrink-0" />
                <div>
                  <div className="text-sian-navy font-medium">Access</div>
                  <div className="text-sm text-sian-text-muted">By registration; connection details provided upon confirmation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RegisterSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    comments: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formState.name,
          email: formState.email,
          organisation: formState.organisation || undefined,
          role: formState.role || undefined,

          comments: formState.comments || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-sian-border text-sian-text placeholder-sian-text-dim focus:outline-none focus:border-sian-teal focus:ring-2 focus:ring-sian-teal/20 transition-colors'

  return (
    <section id="register" className="py-20 md:py-28 bg-sian-bg-light">
      <div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sian-teal text-sm font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-4 h-4" />
            Register
          </div>
          <h2 className="fluid-section-heading md:text-4xl font-bold text-sian-navy mb-4">
            Register Your Interest
          </h2>
          <p className="text-sian-text-muted max-w-xl mx-auto">
            This Special Focus Meeting is by invitation with limited capacity. Complete the form below to register your interest. You will receive further details including program updates and formal invitations as they become available.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 px-8 rounded-2xl border border-sian-teal/30 bg-sian-teal-light">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-sian-teal" />
            </div>
            <h3 className="text-xl font-semibold text-sian-navy mb-2">Thank You!</h3>
            <p className="text-sian-text-muted">
              Your interest has been registered. We will be in touch with further details
              and priority registration access.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sian-border bg-white p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-sian-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={inputClass}
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sian-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={inputClass}
                  placeholder="j.smith@university.ac.uk"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-sian-navy mb-2">
                  Organisation / Affiliation
                </label>
                <input
                  type="text"
                  value={formState.organisation}
                  onChange={(e) => setFormState({ ...formState, organisation: e.target.value })}
                  className={inputClass}
                  placeholder="University of London"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sian-navy mb-2">
                  Role / Position
                </label>
                <input
                  type="text"
                  value={formState.role}
                  onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                  className={inputClass}
                  placeholder="Senior Researcher"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-sian-navy mb-2">
                Additional Comments
              </label>
              <textarea
                rows={3}
                value={formState.comments}
                onChange={(e) => setFormState({ ...formState, comments: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Any questions or specific areas of interest..."
              />
            </div>
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-full bg-sian-orange text-white font-semibold text-lg hover:bg-sian-orange-dark transition-colors shadow-lg shadow-sian-orange/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Register Interest'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#10243E] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-16 mobile-section-px">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <img
                src="/sian-logo.png"
                alt="SIAN Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-semibold text-white">SIAN</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Advancing evidence-based metabolic nutrition through rigorous science, independent research, and clinical translation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Meeting Info */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Meeting Info
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>BHB Special Focus Meeting</li>
              <li>9 June 2026</li>
              <li>Online</li>
              <li>Session from 9:00 EDT</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            &copy; 2026 Scientific Institute for Advanced Nutrition. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ──────────────── MAIN PAGE ──────────────── */

function SIANHome() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SponsorsSection />
      <ConfirmedSpeakersSection />
      <AboutSIANSection />
      <AboutMeetingSection />
      <ProgrammeSection />
      <FacultySection />
      <VenueSection />
      <RegisterSection />
      <Footer />
    </div>
  )
}
