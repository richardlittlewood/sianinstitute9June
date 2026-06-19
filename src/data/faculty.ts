// Faculty and featured speakers for the institute homepage.
//
// These are the international experts who took part in SIAN's inaugural
// special focus meeting (June 2026) and form the institute's faculty roster.
// Descriptors are kept short and aligned to each expert's primary field.
//
// Portraits live in `public/images/faculty/` named after each person
// (e.g. `dominic-dagostino.jpg`). Where a portrait is available, the card
// renders the photo (greyscale, cropped to the face); where it is absent the
// card falls back to an initial monogram.

export interface FacultyMember {
  name: string
  /** Primary field / focus area, shown beneath the name. */
  focus: string
  /** Region used as a small locator tag. */
  region: string
  /** Initials used for the monogram fallback. */
  initials: string
  /** Optional portrait path — falls back to the monogram when absent. */
  image?: string
}

export const FACULTY: FacultyMember[] = [
  { name: "Prof. Dominic D'Agostino", focus: 'Neuroprotection and metabolic therapies', region: 'United States', initials: 'DD', image: '/images/faculty/dominic-dagostino.jpg' },
  { name: 'Dr. Mary Newport', focus: 'Brain energy metabolism and neuroprotection', region: 'United States', initials: 'MN', image: '/images/faculty/mary-newport.jpg' },
  { name: 'Dr. Elena Gross', focus: 'Migraine and metabolic neuroscience', region: 'Switzerland', initials: 'EG', image: '/images/faculty/elena-gross.jpg' },
  { name: 'Prof. Dr. Ben Bikman', focus: 'Mitochondrial health and metabolic function', region: 'United States', initials: 'BB', image: '/images/faculty/ben-bikman.jpeg' },
  { name: 'Prof. Dr. Christina Heidt', focus: 'Clinical nutrition and rare metabolic disorders', region: 'Germany', initials: 'CH', image: '/images/faculty/christina-heidt.jpeg' },
  { name: 'Dr. Jacob Wilson', focus: 'Body composition and performance', region: 'United States', initials: 'JW', image: '/images/faculty/jacob-wilson.jpeg' },
  { name: 'Dr. Ryley Parrish', focus: 'Epilepsy and brain excitability', region: 'United States', initials: 'RP', image: '/images/faculty/ryley-parrish.jpeg' },
  { name: 'Prof. Dr. D. Russell-Jones', focus: 'Diabetes and clinical evidence', region: 'United Kingdom', initials: 'DR', image: '/images/faculty/david-russell-jones.jpeg' },
  { name: 'Dr. Jun Tsubota', focus: 'BHB production and precision fermentation', region: 'Japan', initials: 'JT', image: '/images/faculty/jun-tsubota.png' },
  { name: 'Mr. Satoshi Morita', focus: 'Cognition and mental performance', region: 'Japan', initials: 'SM', image: '/images/faculty/satoshi-morita.jpg' },
  { name: 'Dr. Richard Littlewood', focus: 'Clinical translation and regulation', region: 'United Kingdom', initials: 'RL', image: '/images/faculty/richard-littlewood.jpeg' },
  { name: 'Prof. Thomas Weimbs', focus: 'Polycystic kidney disease and metabolic signalling', region: 'United States', initials: 'TW', image: '/images/faculty/thomas-weimbs.jpg' },
  { name: 'Prof. J. Walsh', focus: 'Exercise, exogenous ketones, and long-term brain health', region: 'Canada', initials: 'JW', image: '/images/faculty/jeremy-walsh.png' },
]
