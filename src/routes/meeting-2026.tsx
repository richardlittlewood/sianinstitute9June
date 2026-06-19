import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Calendar, Clock, Globe } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { PROGRAMME_SESSIONS, SPEAKERS } from '@/data/meeting-2026'

// Archival record of SIAN's inaugural special focus meeting (June 2026).
// Preserved as supporting material; it is no longer the primary site narrative.
export const Route = createFileRoute('/meeting-2026')({
  component: Meeting2026,
})

function ArchiveHero() {
  return (
    <section className="bg-stone pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-graphite hover:text-forest transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to the institute
        </a>

        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
          <span className="eyebrow text-forest">Inaugural Meeting &middot; Archive</span>
        </div>
        <h1 className="fluid-hero font-serif font-medium text-charcoal leading-[1.05] max-w-4xl">
          BHB in Applied Metabolic Nutrition
        </h1>
        <p className="text-graphite text-lg leading-relaxed mt-7 max-w-2xl">
          SIAN’s first special focus meeting convened leading international speakers to examine
          the present and future role of beta-hydroxybutyrate in applied metabolic nutrition.
          This page preserves the meeting programme, faculty, and supporting detail as an archival
          record of the institute’s inaugural convening.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-charcoal">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4 text-forest" />9 June 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-forest" />Session from 9:00 EDT
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe className="w-4 h-4 text-forest" />Online
          </span>
        </div>
      </div>
    </section>
  )
}

function Programme() {
  return (
    <section className="bg-stone-deep py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
          <span className="eyebrow text-forest">Scientific Programme</span>
        </div>
        <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight mb-10">
          Programme at a glance
        </h2>

        <div className="programme-table border border-line bg-stone-card rounded-sm overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              {PROGRAMME_SESSIONS.map((session, si) => (
                <SessionRows key={si} label={session.label} items={session.items} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-graphite-soft italic">
          The organising team thanks Prof. Ben Bikman, Prof. Dr. Christina Heidt, Dr. Ryley Parrish,
          Dr. Soto Mota, and Dr. Andrew Koutnik for their support and looks forward to their
          participation in future meetings.
        </p>
      </div>
    </section>
  )
}

function SessionRows({
  label,
  items,
}: {
  label: string
  items: { topic: string; speaker: string }[]
}) {
  return (
    <>
      <tr>
        <td
          colSpan={2}
          className="px-6 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-forest bg-forest-wash"
        >
          {label}
        </td>
      </tr>
      {items.map((item, ii) => {
        if (item.topic.startsWith('Break')) {
          return (
            <tr key={ii} className="bg-stone">
              <td
                colSpan={2}
                className="px-6 py-2.5 text-center text-sm italic text-graphite-soft border-b border-line"
              >
                {item.topic}
              </td>
            </tr>
          )
        }
        return (
          <tr key={ii}>
            <td className="px-6 py-4 text-[15px] text-charcoal leading-snug text-left align-top border-b border-line">
              {item.topic}
            </td>
            <td className="px-6 py-4 text-sm text-graphite text-right whitespace-nowrap align-top border-b border-line">
              {item.speaker}
            </td>
          </tr>
        )
      })}
    </>
  )
}

function ArchiveSpeakers() {
  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
          <span className="eyebrow text-forest">Speakers</span>
        </div>
        <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight mb-12">
          Academic speakers and advisors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-x-8 gap-y-10">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="flex gap-5">
              <div className="w-16 h-16 shrink-0 bg-stone-deep border border-line flex items-center justify-center rounded-sm">
                <span className="font-serif text-xl text-forest/50">{s.initials}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal leading-snug">
                  {s.name} <span className="text-graphite-soft text-sm">({s.country})</span>
                </h3>
                <p className="text-sm text-forest mt-0.5">{s.affiliation}</p>
                <p className="text-sm text-graphite leading-relaxed mt-1.5">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sponsors() {
  return (
    <section className="bg-stone-deep py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px text-center">
        <p className="eyebrow text-graphite-soft mb-10">Sponsors &amp; Partners</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/sponsor-osaka-gas.jpg"
              alt="Osaka Gas / Daigas Group"
              className="object-contain h-20"
            />
            <span className="eyebrow text-forest">Lead Sponsor</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/sponsor-suntory.jpg"
              alt="Suntory Global Innovation Center"
              className="object-contain h-20 max-w-[240px]"
            />
            <span className="eyebrow text-graphite-soft">With Support From</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Meeting2026() {
  return (
    <div className="min-h-screen bg-stone">
      <SiteHeader />
      <main>
        <ArchiveHero />
        <Programme />
        <ArchiveSpeakers />
        <Sponsors />
      </main>
      <SiteFooter />
    </div>
  )
}
