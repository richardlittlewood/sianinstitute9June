import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { RegisterInterestForm } from '@/components/RegisterInterestForm'
import { FACULTY } from '@/data/faculty'

export const Route = createFileRoute('/')({
  component: SIANHome,
})

/* ──────────────── SHARED PRIMITIVES ──────────────── */

// Small uppercase kicker with a short accent rule. Used above section titles.
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
      <span className="eyebrow text-forest">{children}</span>
    </div>
  )
}

/* ──────────────── HERO ──────────────── */

const PROOF_POINTS = [
  'Independent scientific institute',
  'International faculty across Europe, Japan, and the United States',
  'Inaugural BHB special focus meeting completed in June 2026',
]

function Hero() {
  return (
    <section className="relative bg-stone pt-32 md:pt-40 pb-0 overflow-hidden">
      {/* Subtle mineral wash anchored to the upper-right for depth, not decoration. */}
      <div
        className="pointer-events-none absolute -top-32 -right-40 w-[42rem] h-[42rem] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(31,74,69,0.06) 0%, rgba(247,244,238,0) 70%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="max-w-4xl calm-rise">
          <Eyebrow>Independent Scientific Institute</Eyebrow>
          <h1 className="fluid-hero font-serif font-medium text-charcoal leading-[1.04]">
            Scientific Institute for Advanced Nutrition
          </h1>
          <p className="fluid-hero-sub font-serif text-forest mt-6 max-w-2xl leading-snug">
            Advancing the science and clinical translation of BHB in metabolic nutrition
          </p>
          <p className="text-graphite text-base md:text-lg leading-relaxed mt-7 max-w-2xl">
            The Scientific Institute for Advanced Nutrition is an independent scientific
            body dedicated to advancing evidence-based metabolic nutrition through rigorous
            science, expert dialogue, and clinically relevant translation. Building on the
            momentum of its inaugural special focus meeting, SIAN now brings forward an
            ongoing programme of scientific collaboration, faculty leadership, and focused
            work on the role of BHB in applied metabolic nutrition.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <a
              href="#december"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-stone-card font-medium hover:bg-forest-soft transition-colors rounded-full"
            >
              Explore the December 2026 Meeting
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#outcomes"
              className="inline-flex items-center gap-2 text-charcoal font-medium border-b border-charcoal/30 pb-1 hover:border-forest hover:text-forest transition-colors"
            >
              Review Meeting 1 Outcomes
            </a>
          </div>
        </div>

        {/* Proof-points strip */}
        <ul className="grid grid-cols-1 md:grid-cols-3 border-t border-line mt-16 md:mt-24">
          {PROOF_POINTS.map((point, i) => (
            <li
              key={point}
              className={`py-7 md:py-8 md:pr-8 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-line md:pl-8' : ''
              }`}
            >
              <span className="font-serif text-2xl text-forest/80">0{i + 1}</span>
              <p className="text-graphite text-sm leading-relaxed mt-3">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ──────────────── ABOUT SIAN ──────────────── */

const PILLARS = [
  {
    title: 'Science',
    body: 'Generating and evaluating high-quality, indication-specific evidence for metabolic nutrition.',
  },
  {
    title: 'Standards',
    body: 'Defining robust scientific and manufacturing standards for responsible field development.',
  },
  {
    title: 'Clinical translation',
    body: 'Building clear pathways from mechanism to clinically relevant application.',
  },
  {
    title: 'Independent convening',
    body: 'Bringing experts together across medicine, science, regulation, and innovation.',
  },
]

function AboutSIAN() {
  return (
    <section id="about-sian" className="scroll-mt-24 bg-stone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>About SIAN</Eyebrow>
            <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight">
              What SIAN exists to do
            </h2>
          </div>
          <div className="md:col-span-7 max-w-2xl">
            <p className="text-graphite text-lg leading-relaxed">
              SIAN was established to provide an independent forum for advancing the science,
              standards, and clinical relevance of metabolic nutrition. Its purpose is to bring
              together leading experts across medicine, nutritional science, regulation, and
              innovation to define the evidence required for responsible progress in BHB and
              related advanced nutrition applications.
            </p>
            <p className="text-graphite text-lg leading-relaxed mt-6">
              The institute places particular emphasis on high-quality, indication-specific
              clinical data, robust scientific and manufacturing standards, and clear
              translational pathways that allow clinicians, researchers, and regulators to engage
              with the field confidently. SIAN’s work is grounded in scientific rigour,
              transparency, and the belief that advanced nutrition products must be supported by
              both credible evidence and reliable supply if they are to be used with confidence
              in practice.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 mt-16">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-line pt-7 pb-2">
              <span className="eyebrow text-graphite-soft">Pillar {i + 1}</span>
              <h3 className="font-serif text-xl text-charcoal mt-3 mb-2">{pillar.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────── MEETING 1 OUTCOMES ──────────────── */

const OUTCOME_AREAS = [
  'Neuroprotection',
  'Migraine',
  'Diabetes-related hypoglycaemia',
  'Cognition',
  'Performance',
  'Epilepsy',
  'Mitochondrial health',
  'Production innovation',
  'Regulatory landscape',
  'Polycystic kidney disease',
]

function MeetingOutcomes() {
  return (
    <section id="outcomes" className="scroll-mt-24 bg-stone-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="max-w-3xl">
          <Eyebrow>Meeting 1 Outcomes</Eyebrow>
          <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight">
            What emerged from the first SIAN meeting
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-12">
          <div className="md:col-span-7 max-w-2xl space-y-6 text-graphite text-lg leading-relaxed">
            <p>
              SIAN’s inaugural special focus meeting brought together leading international
              speakers to examine the present and future role of beta-hydroxybutyrate in applied
              metabolic nutrition. Across keynote lectures, specialist sessions, and faculty
              discussion, the meeting explored the evidence base for BHB, its emerging clinical
              and functional applications, and the scientific, regulatory, and supply questions
              that must be addressed to move the field forward responsibly.
            </p>
            <p>
              A clear message emerged from the meeting: BHB is now being considered not simply as
              an alternative fuel, but as a molecule of growing interest across multiple areas of
              metabolic and neurological relevance. At the same time, the discussions underscored
              that future progress will depend on stronger indication-specific evidence, clearer
              standards, and closer alignment between scientific discovery, real-world
              application, and product quality.
            </p>
            <p>
              The programme highlighted key areas of current interest. Rather than concluding a
              conversation, the first meeting established a foundation for ongoing scientific
              collaboration and future SIAN work.
            </p>
            <a
              href="/meeting-2026"
              className="inline-flex items-center gap-2 text-forest font-medium border-b border-forest/40 pb-1 hover:border-forest transition-colors"
            >
              Review the full inaugural meeting programme
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Areas of current interest */}
          <div className="md:col-span-5">
            <h3 className="eyebrow text-graphite-soft mb-5">Areas of current interest</h3>
            <ul className="flex flex-wrap gap-2.5">
              {OUTCOME_AREAS.map((area) => (
                <li
                  key={area}
                  className="px-4 py-2 bg-stone-card border border-line text-sm text-charcoal rounded-full"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────── SELECTED INSIGHTS ──────────────── */

const INSIGHTS = [
  'BHB is moving into a more structured phase of scientific and translational development.',
  'The next stage of progress will require better evidence, more consistent standards, and a regulatory infrastructure that supports responsible innovation — without creating unnecessary barriers to consumer access.',
  'Meaningful advancement will depend on collaboration across clinical science, metabolic research, regulation, and manufacturing quality.',
]

function SelectedInsights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-stone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <Eyebrow>Selected Insights from Meeting 1</Eyebrow>
        <div className="grid md:grid-cols-3 gap-px bg-line border-y border-line mt-6">
          {INSIGHTS.map((insight, i) => (
            <blockquote key={i} className="bg-stone p-8 md:p-10">
              <span className="font-serif text-4xl text-forest/70 leading-none">0{i + 1}</span>
              <p className="font-serif text-xl md:text-[1.45rem] text-charcoal leading-snug mt-5">
                {insight}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────── FACULTY ──────────────── */

function FacultyCard({ person }: { person: (typeof FACULTY)[number] }) {
  // Fall back to the monogram if no portrait is provided or the image fails to load.
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(person.image) && !imageFailed

  return (
    <figure className="group">
      <div className="aspect-[3/4] bg-stone-deep border border-line overflow-hidden flex items-center justify-center rounded-sm">
        {showImage ? (
          <img
            src={person.image}
            alt={person.name}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover object-top grayscale transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          // Refined monogram fallback — no portrait available.
          <span className="font-serif text-5xl text-forest/40 select-none" aria-hidden="true">
            {person.initials}
          </span>
        )}
      </div>
      <figcaption className="mt-4">
        <span className="eyebrow text-graphite-soft">{person.region}</span>
        <h3 className="font-serif text-lg text-charcoal mt-1.5 leading-snug">{person.name}</h3>
        <p className="text-sm text-graphite leading-snug mt-1">{person.focus}</p>
      </figcaption>
    </figure>
  )
}

function Faculty() {
  return (
    <section id="faculty" className="scroll-mt-24 bg-stone-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="max-w-3xl mb-14">
          <Eyebrow>International Faculty &amp; Featured Speakers</Eyebrow>
          <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight">
            A faculty spanning Europe, Japan, and the United States
          </h2>
          <p className="text-graphite text-lg leading-relaxed mt-6">
            SIAN’s work is guided by an international faculty of clinical investigators, metabolic
            scientists, regulatory experts, and production innovators — bringing deep,
            indication-specific expertise to the science of BHB and applied metabolic nutrition.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {FACULTY.map((person) => (
            <FacultyCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────── SPECIAL WORKING GROUP ON BHB ──────────────── */

const WORKSTREAMS = [
  {
    title: 'Clinical evidence and prioritisation',
    body: 'Identifying the indication-specific studies and evidence standards needed to advance the field responsibly.',
  },
  {
    title: 'Applications and translation',
    body: 'Connecting mechanism and discovery to clinically and functionally relevant applications.',
  },
  {
    title: 'Supply, quality, and manufacturing',
    body: 'Addressing reliable supply and consistent product quality as prerequisites for confident use.',
  },
  {
    title: 'Regulation and standards',
    body: 'Aligning on the regulatory frameworks and standards required for credible, responsible progress.',
  },
]

function WorkingGroup() {
  return (
    <section id="working-group" className="scroll-mt-24 bg-stone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Special Working Group on BHB</Eyebrow>
            <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight">
              Carrying the discussion into structured work
            </h2>
            <p className="text-graphite text-lg leading-relaxed mt-6">
              Following the first meeting, SIAN is developing a Special Working Group on BHB to
              carry the discussion forward into a more structured programme of activity. The aim
              of the group is to connect scientific insight with practical next steps by aligning
              experts around evidence priorities, translational opportunities, supply and
              production considerations, and the standards needed for responsible field
              development.
            </p>
          </div>

          <div className="md:col-span-7">
            <ol className="border-t border-line">
              {WORKSTREAMS.map((stream, i) => (
                <li
                  key={stream.title}
                  className="flex gap-5 md:gap-8 py-7 border-b border-line"
                >
                  <span className="font-serif text-2xl text-forest/70 leading-none w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">{stream.title}</h3>
                    <p className="text-graphite leading-relaxed mt-1.5">{stream.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────── DECEMBER MEETING ──────────────── */

function DecemberMeeting() {
  return (
    <section id="december" className="scroll-mt-24 bg-charcoal text-stone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-stone/40" aria-hidden="true" />
              <span className="eyebrow text-stone/60">Next Meeting</span>
            </div>
            <h2 className="font-serif font-medium text-stone leading-[1.05] text-4xl md:text-5xl lg:text-6xl">
              SIAN Meeting 2
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-stone/80 mt-4">
              South Florida &middot; 8–9 December 2026
            </p>
            <p className="text-stone/70 text-lg leading-relaxed mt-8 max-w-2xl">
              SIAN’s next convening is planned for South Florida on 8–9 December 2026 and will build
              directly on the momentum of the inaugural meeting. The programme is expected to bring
              together keynote leaders in BHB science alongside parallel workstreams focused on
              therapeutic and applied use cases, supply and manufacturing quality, and the evidence
              and regulatory frameworks needed for credible progress.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-card text-charcoal font-medium hover:bg-stone transition-colors rounded-full"
              >
                Register interest for South Florida
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* TODO: route partnership/faculty enquiries to a dedicated address if required. */}
              <a
                href="mailto:info@advancednutrition.institute?subject=Partnership%20and%20faculty%20enquiries"
                className="inline-flex items-center gap-2 text-stone font-medium border-b border-stone/30 pb-1 hover:border-stone transition-colors"
              >
                Partnership and faculty enquiries
              </a>
            </div>
          </div>

          {/* Expected programme shape — structured so detail can be added later. */}
          <aside className="md:col-span-5 md:pl-8 md:border-l border-stone/15">
            <h3 className="eyebrow text-stone/50 mb-6">Expected programme</h3>
            <ul className="space-y-5">
              {[
                'Keynote speakers on BHB science',
                'Parallel workstream — therapeutic and applied use cases',
                'Parallel workstream — supply and manufacturing quality',
                'Parallel workstream — scientific and regulatory standards',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-stone/80 leading-snug">
                  <span className="text-stone/40 mt-2 h-1.5 w-1.5 rounded-full bg-stone/40 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-stone/40 text-sm mt-8 leading-relaxed">
              {/* TODO: agenda, venue, and confirmed speakers to be added closer to the meeting. */}
              Full agenda, venue, and speaker details to follow.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ──────────────── REGISTER INTEREST ──────────────── */

function RegisterInterest() {
  return (
    <section id="register" className="scroll-mt-24 bg-stone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8 mobile-section-px">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
            <span className="eyebrow text-forest">Register Interest</span>
            <span className="h-px w-8 bg-forest/50" aria-hidden="true" />
          </div>
          <h2 className="fluid-section-heading font-serif font-medium text-charcoal leading-tight">
            Stay connected with SIAN
          </h2>
          <p className="text-graphite text-lg leading-relaxed mt-5 max-w-xl mx-auto">
            Register your interest to receive updates on the December 2026 meeting, future institute
            activities, faculty announcements, and developments from the Special Working Group on BHB.
          </p>
        </div>
        <RegisterInterestForm />
      </div>
    </section>
  )
}

/* ──────────────── PAGE ──────────────── */

function SIANHome() {
  return (
    <div className="min-h-screen bg-stone">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSIAN />
        <MeetingOutcomes />
        <SelectedInsights />
        <Faculty />
        <WorkingGroup />
        <DecemberMeeting />
        <RegisterInterest />
      </main>
      <SiteFooter />
    </div>
  )
}
