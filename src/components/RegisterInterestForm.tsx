import { useState } from 'react'
import { Check } from 'lucide-react'

// Reusable "Register Interest" form.
//
// Posts to the existing Netlify Function at /api/submit-registration, which
// persists submissions to Neon Postgres. Fields are scoped to professional
// scientific-event interest capture. The function accepts the new `country`
// and `area_of_interest` fields and is self-healing if those columns are not
// yet present in the database.

const AREAS_OF_INTEREST = [
  'Clinical evidence and prioritisation',
  'Applications and translation',
  'Supply, quality, and manufacturing',
  'Regulation and standards',
  'December 2026 meeting (South Florida)',
  'Partnership or faculty enquiry',
] as const

export function RegisterInterestForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    country: '',
    areaOfInterest: '',
    comments: '',
    // Honeypot: real users leave this empty; bots tend to fill every field.
    website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Silently succeed for honeypot hits without hitting the backend.
    if (form.website) {
      setSubmitted(true)
      return
    }
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          organisation: form.organisation || undefined,
          role: form.role || undefined,
          country: form.country || undefined,
          area_of_interest: form.areaOfInterest || undefined,
          comments: form.comments || undefined,
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

  const fieldClass =
    'w-full px-4 py-3 bg-stone-card border border-line text-charcoal placeholder-graphite-soft/70 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors rounded-sm'
  const labelClass = 'block text-sm font-medium text-charcoal mb-2'

  if (submitted) {
    return (
      <div
        className="py-14 px-8 border border-forest/25 bg-forest-wash text-center rounded-sm"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
          <Check className="w-6 h-6 text-stone-card" />
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-3">Thank you</h3>
        <p className="text-graphite max-w-md mx-auto leading-relaxed">
          Your interest has been registered. SIAN will be in touch with updates on
          the December 2026 meeting, institute activities, and the Special Working
          Group on BHB.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-stone-card p-7 md:p-9 rounded-sm"
      noValidate
    >
      {/* Honeypot — visually hidden, ignored by humans. */}
      <div className="absolute w-px h-px overflow-hidden -m-px" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update('website')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="reg-name" className={labelClass}>
            Full name <span className="text-forest">*</span>
          </label>
          <input
            id="reg-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            className={fieldClass}
            placeholder="Dr. A. Researcher"
          />
        </div>
        <div>
          <label htmlFor="reg-email" className={labelClass}>
            Email address <span className="text-forest">*</span>
          </label>
          <input
            id="reg-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            className={fieldClass}
            placeholder="name@institution.org"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="reg-org" className={labelClass}>
            Organisation / affiliation
          </label>
          <input
            id="reg-org"
            type="text"
            autoComplete="organization"
            value={form.organisation}
            onChange={update('organisation')}
            className={fieldClass}
            placeholder="University or institution"
          />
        </div>
        <div>
          <label htmlFor="reg-role" className={labelClass}>
            Role / position
          </label>
          <input
            id="reg-role"
            type="text"
            autoComplete="organization-title"
            value={form.role}
            onChange={update('role')}
            className={fieldClass}
            placeholder="e.g. Clinical researcher"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="reg-country" className={labelClass}>
            Country
          </label>
          <input
            id="reg-country"
            type="text"
            autoComplete="country-name"
            value={form.country}
            onChange={update('country')}
            className={fieldClass}
            placeholder="Country"
          />
        </div>
        <div>
          <label htmlFor="reg-area" className={labelClass}>
            Area of interest
          </label>
          <select
            id="reg-area"
            value={form.areaOfInterest}
            onChange={update('areaOfInterest')}
            className={fieldClass}
          >
            <option value="">Select an area…</option>
            {AREAS_OF_INTEREST.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-7">
        <label htmlFor="reg-comments" className={labelClass}>
          Additional comments
        </label>
        <textarea
          id="reg-comments"
          rows={3}
          value={form.comments}
          onChange={update('comments')}
          className={`${fieldClass} resize-none`}
          placeholder="Any specific areas of interest or enquiries…"
        />
      </div>

      {error && (
        <div
          className="mb-6 p-4 border border-red-300 bg-red-50 text-red-800 text-sm rounded-sm"
          role="alert"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-forest text-stone-card font-medium hover:bg-forest-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-full"
      >
        {submitting ? 'Submitting…' : 'Register interest'}
      </button>
    </form>
  )
}
