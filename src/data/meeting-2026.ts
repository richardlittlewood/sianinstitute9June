// Archival content for SIAN's inaugural special focus meeting.
//
// "BHB in Applied Metabolic Nutrition" — held online on 9 June 2026.
// This data is preserved as supporting / archival material and is rendered
// by the /meeting-2026 route. It is no longer the primary narrative of the
// site, which now centres on the institute itself.

export interface ProgrammeItem {
  topic: string
  speaker: string
}

export interface ProgrammeSession {
  label: string
  items: ProgrammeItem[]
}

export const PROGRAMME_SESSIONS: ProgrammeSession[] = [
  {
    label: 'Session I — Keynote & Core Science',
    items: [
      { topic: 'Welcome & Introduction: SIAN Faculty Mission', speaker: 'Dr. Richard Littlewood (UK) & Dr. Jun Tsubota (JP)' },
      { topic: 'Keynote: The BHB Journey; What Is Its Full Potential?', speaker: 'Dr. Mary Newport (USA)' },
      { topic: 'BHB and Performance', speaker: 'Dr. Jacob Wilson (USA)' },
      { topic: 'Functional Effects of Oral BHB on Attention and Mental Fatigue in Healthy Adults', speaker: 'Mr. Satoshi Morita (JP)' },
    ],
  },
  {
    label: 'Session II — Specialised Applications',
    items: [
      { topic: 'The Metabolic Face of Migraine and Potential Protective Mechanisms of Ketone Bodies', speaker: 'Dr. Elena Gross (CH)' },
      { topic: 'BHB, Exercise and Long-term Brain Health', speaker: 'Prof. J. Walsh (CA)' },
    ],
  },
  {
    label: 'Session III — Workshop: Supply, Regulation & Legal',
    items: [
      { topic: 'Key Observations: BHB Potential', speaker: 'Gary Millet (USA) & Rob Rogers (USA)' },
      { topic: 'Innovation in BHB Biosynthesis & Industrial Supply', speaker: 'Dr. Jun Tsubota (JP)' },
      { topic: 'Global Standards: Navigating the Regulatory Landscape', speaker: 'Dr. Richard Littlewood (UK)' },
    ],
  },
  {
    label: 'Session IV — Specialised Applications 2',
    items: [
      { topic: 'BHB in Practice: Management of Diabetes and Hypoglycaemia', speaker: 'Prof. Dr. D. Russell-Jones (UK)' },
      { topic: 'BHB Transforms Outcomes in Polycystic Kidney Disease', speaker: 'Prof. Thomas Weimbs (USA)' },
    ],
  },
  {
    label: 'Closing Keynote',
    items: [
      { topic: 'Exogenous Ketones: Emerging Science, Clinical Applications, and the Case for Research Rigor', speaker: "Prof. Dominic D'Agostino (USA)" },
      { topic: 'Conclusions', speaker: 'Dr. Richard Littlewood & Dr. Jun Tsubota' },
    ],
  },
]

export interface Speaker {
  name: string
  country: string
  affiliation: string
  bio: string
  initials: string
}

export const SPEAKERS: Speaker[] = [
  { name: "Prof. Dominic D'Agostino", country: 'USA', affiliation: 'University of South Florida / IHMC', bio: 'Leading expert in neuroprotection, oxygen toxicity, and metabolic therapies.', initials: 'DD' },
  { name: 'Dr. Elena Gross', country: 'CH', affiliation: 'KetoSwiss / University of Basel', bio: 'Specialist in clinical neuroscience and the metabolic management of chronic migraine.', initials: 'EG' },
  { name: 'Dr. Richard Littlewood', country: 'UK', affiliation: 'Flow Health Science', bio: 'Inventor of Klario (BHB product for diabetes hypos).', initials: 'RL' },
  { name: 'Mr. Satoshi Morita', country: 'JP', affiliation: 'Suntory Global Innovation Center', bio: 'Specialist in the cognitive benefits of metabolic signalling metabolites.', initials: 'SM' },
  { name: 'Dr. Mary Newport', country: 'US', affiliation: 'TriVital Therapeutics', bio: 'Pioneer in ketone therapies for neuroprotection and cellular energy.', initials: 'MN' },
  { name: 'Prof. Dr. D. Russell-Jones', country: 'UK', affiliation: 'University of Surrey', bio: 'Clinical expert in diabetes, including BHB applications.', initials: 'DR' },
  { name: 'Dr. Jun Tsubota', country: 'JP', affiliation: 'Osaka Gas Co., Ltd', bio: 'Expert in microbial production of BHB.', initials: 'JT' },
  { name: 'Prof. J. Walsh', country: 'CA', affiliation: 'McMaster University', bio: 'Specialist in the influence of exercise and exogenous ketones on long-term brain health and cognition.', initials: 'JW' },
  { name: 'Prof. Thomas Weimbs', country: 'USA', affiliation: 'University of California, Santa Barbara', bio: 'Leads research on the molecular mechanisms and treatment of polycystic kidney disease.', initials: 'TW' },
  { name: 'Dr. Jacob Wilson', country: 'USA', affiliation: 'ASPI Tampa', bio: 'Specialist in BHB effects on body composition & muscle protein synthesis.', initials: 'JW' },
]
