// Central content config for Acefluento homepage
// Swap to headless CMS or MDX by replacing these exports

export interface Service {
  icon: string
  title: string
  description: string
  bestFor: string
}

export interface CaseStudy {
  brand: string
  industry: string
  focus: string
  summary: string
  quote?: string
  tag: string
  tagColor: string
  accentClass: string
  ongoingPartner?: boolean
}

export interface IndustryInsight {
  title: string
  icon: string
  challenge: string
  tactics: string[]
  accentColor: string
  anchor: string
}

export interface AITool {
  name: string
  useCase: string
  benefit: string
  icon: string
}

export interface LeadMagnetSystem {
  number: string
  title: string
  preview: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Package {
  name: string
  badge?: string
  description: string
  includes: string[]
  cta: string
  featured: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface WhoWeHelp {
  title: string
  description: string
  icon: string
}

export interface SystemCard {
  title: string
  subtitle: string
  bullets: string[]
  icon: string
  color: string
}

export const services: Service[] = [
  {
    icon: 'monitor',
    title: 'Web Design & Landing Pages',
    description: 'Modern websites built to communicate clearly and convert intentionally.',
    bestFor: 'Local businesses, organizations',
  },
  {
    icon: 'target',
    title: 'Paid Social Campaigns',
    description: 'Meta ad strategy and campaign execution designed to generate qualified attention.',
    bestFor: 'Lead generation, e-commerce',
  },
  {
    icon: 'message-square',
    title: 'Brand Messaging & Positioning',
    description: 'Sharper messaging so the right people understand why you matter faster.',
    bestFor: 'New brands, repositioning',
  },
  {
    icon: 'zap',
    title: 'Lead Flow & Automation',
    description: 'Follow-up systems that improve speed, consistency, and conversion.',
    bestFor: 'Service businesses, agencies',
  },
  {
    icon: 'layout',
    title: 'Content Direction',
    description: 'Content systems and creative guidance that support growth across channels.',
    bestFor: 'Digital brands, creators',
  },
  {
    icon: 'trending-up',
    title: 'Ongoing Optimization',
    description: 'Continuous testing, iteration, and refinement based on what actually performs.',
    bestFor: 'Existing campaigns',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    brand: 'JR Global',
    industry: 'Painting / Local Service',
    focus: 'Local lead generation + trust-building web presence',
    summary:
      'Built a cleaner digital presence designed to support local visibility, legitimacy, and quote intent.',
    tag: 'Local Service',
    tagColor: 'bg-brand-emerald/15 text-brand-emerald',
    accentClass: 'from-brand-emerald to-teal-400',
  },
  {
    brand: 'MissionCoach AI',
    industry: 'Software / AI',
    focus: 'Positioning + digital funnel clarity',
    summary:
      'Helped frame a modern AI product in a way that feels actionable, useful, and easier to understand.',
    tag: 'Software / AI',
    tagColor: 'bg-brand-blue/15 text-brand-blue',
    accentClass: 'from-brand-blue to-blue-400',
  },
  {
    brand: 'Euclid Church of Christ',
    industry: 'Church / Organization',
    focus: 'Digital presence + communication clarity',
    summary:
      'Created a stronger online presence to support outreach, credibility, and community engagement.',
    quote:
      'Acefluento helped us build a real digital presence and grow our congregation\'s online community effectively.',
    tag: 'Organization',
    tagColor: 'bg-purple-500/15 text-purple-400',
    accentClass: 'from-purple-500 to-indigo-400',
    ongoingPartner: true,
  },
  {
    brand: 'Creative Living Care Group',
    industry: 'Healthcare / Assisted Living',
    focus: 'Trust-centered design + inquiry flow',
    summary:
      'Built a more credible digital experience designed to support inquiries and reassure families.',
    quote:
      'From zero online visibility to a fully optimized, lead-generating digital presence — Acefluento engineered a complete digital transformation for our brand.',
    tag: 'Healthcare',
    tagColor: 'bg-teal-500/15 text-teal-400',
    accentClass: 'from-teal-500 to-cyan-400',
    ongoingPartner: true,
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit & Align',
    description:
      'We look at your business model, audience, current presence, and biggest growth bottlenecks.',
  },
  {
    number: '02',
    title: 'Plan the System',
    description:
      'We map the right combination of messaging, pages, campaigns, and follow-up.',
  },
  {
    number: '03',
    title: 'Build & Launch',
    description:
      'We design, write, refine, and launch the assets needed to move the business forward.',
  },
  {
    number: '04',
    title: 'Optimize & Improve',
    description:
      'We monitor performance, learn quickly, and keep improving what matters.',
  },
]

export const packages: Package[] = [
  {
    name: 'Starter Build',
    description: 'Best for businesses that need a stronger digital presence fast.',
    includes: [
      'Strategy call',
      'Homepage or landing page build',
      'Messaging refinement',
      'Booking CTA integration',
    ],
    cta: 'Start with a Build',
    featured: false,
  },
  {
    name: 'Growth System',
    badge: 'Most Popular',
    description: 'Best for businesses that need both presence and performance.',
    includes: [
      'Website / landing pages',
      'Campaign strategy',
      'Funnel guidance',
      'Follow-up recommendations',
      'Monthly optimization support',
    ],
    cta: 'Build My Growth System',
    featured: true,
  },
  {
    name: 'Ongoing Partner',
    description: 'Best for brands that want consistent strategic execution.',
    includes: [
      'Monthly support',
      'Optimization',
      'New page / campaign support',
      'Messaging updates',
      'Performance reviews',
    ],
    cta: 'Apply for Ongoing Support',
    featured: false,
  },
]

export const faqs: FAQ[] = [
  {
    question: 'Do you only work with one niche?',
    answer:
      'No. Acefluento works best with businesses and organizations that need a clearer digital growth system. The strategy adapts to the business model.',
  },
  {
    question: 'Do you build websites only, or handle marketing too?',
    answer:
      'Both. Some clients need a stronger site first. Others need strategy, campaigns, and follow-up layered together.',
  },
  {
    question: 'Do you offer monthly support?',
    answer:
      'Yes. Ongoing support is available when it makes sense for the project and growth goals.',
  },
  {
    question: 'Can I book a call before committing to anything?',
    answer:
      'Yes. The strategy call is the first step to see whether there\'s a strong fit.',
  },
  {
    question: 'Do you work with local businesses only?',
    answer:
      'No. Acefluento can support local businesses, organizations, and digital brands.',
  },
  {
    question: 'How soon can we get started?',
    answer:
      'Depends on project scope and availability, but the strategy call is the fastest first step.',
  },
]

export const whoWeHelp: WhoWeHelp[] = [
  {
    title: 'Local Service Businesses',
    description:
      'Painters, contractors, home service brands, and local operators who need more consistent lead flow.',
    icon: 'tool',
  },
  {
    title: 'Healthcare & Care-Driven Brands',
    description:
      'Assisted living, care businesses, and trust-sensitive industries that need a calm, credible digital presence.',
    icon: 'heart',
  },
  {
    title: 'Churches & Organizations',
    description:
      'Groups that need a stronger online presence, clearer communication, and better digital engagement.',
    icon: 'users',
  },
  {
    title: 'Software, AI & Digital Brands',
    description:
      'Modern products that need sharper positioning, cleaner funnels, and better conversion paths.',
    icon: 'cpu',
  },
]

export const systemCards: SystemCard[] = [
  {
    title: 'Attract',
    subtitle: 'Bring in the right attention with the right message.',
    bullets: ['Meta ads', 'Local visibility', 'Targeted campaigns', 'Strategic content direction'],
    icon: 'radio',
    color: 'brand-blue',
  },
  {
    title: 'Convert',
    subtitle: 'Turn visitors into inquiries, bookings, and buyers.',
    bullets: [
      'High-converting landing pages',
      'Website messaging',
      'Offer framing',
      'UX focused on action',
    ],
    icon: 'mouse-pointer',
    color: 'brand-red',
  },
  {
    title: 'Follow Through',
    subtitle: 'Keep leads from slipping through the cracks.',
    bullets: ['Lead routing', 'Automation', 'Retargeting', 'Nurture systems', 'Booking flow improvements'],
    icon: 'repeat',
    color: 'brand-emerald',
  },
]

export const industryInsights: IndustryInsight[] = [
  {
    title: 'Assisted Living & Care Brands',
    icon: 'heart',
    challenge:
      'Families research facilities for weeks before calling. You need trust before they ever pick up the phone.',
    tactics: [
      'AI-scripted follow-up sequences for family inquiry emails and calls',
      'Automated tour scheduling with SMS confirmation and reminders',
      'Review generation systems that prompt satisfied families post-move-in',
      'Trust-centered landing pages built for emotional decision-makers',
    ],
    accentColor: 'teal',
    anchor: '#contact',
  },
  {
    title: 'Churches & Organizations',
    icon: 'users',
    challenge:
      'Digital presence often lags behind the community you serve — making outreach harder and first impressions weaker.',
    tactics: [
      'AI-powered content calendars for sermon summaries, events, and announcements',
      'Automated welcome sequences for new visitors who find you online',
      'Event promotion systems across email, social, and local search',
      'Clear communication architecture so visitors know how to get involved',
    ],
    accentColor: 'purple',
    anchor: '#contact',
  },
  {
    title: 'Local Service Businesses',
    icon: 'tool',
    challenge:
      "You're competing on Google with larger companies while manually chasing every lead. The margin for lost follow-up is zero.",
    tactics: [
      'Automated quote request follow-ups within 5 minutes via SMS and email',
      'AI-assisted Google Business Profile optimization for local search dominance',
      'Lead routing systems that assign, notify, and track every inbound inquiry',
      "Retargeting campaigns that re-engage visitors who didn't book",
    ],
    accentColor: 'emerald',
    anchor: '#contact',
  },
]

export const aiTools: AITool[] = [
  {
    name: 'Claude / ChatGPT',
    useCase: 'Messaging frameworks, ad copy, email sequences, landing page drafts',
    benefit: 'Cuts content production time significantly while improving specificity',
    icon: 'cpu',
  },
  {
    name: 'Make.com / Zapier',
    useCase: 'Lead routing, CRM updates, follow-up triggers, notification systems',
    benefit: 'Closes the gap between lead capture and first contact — automatically',
    icon: 'zap',
  },
  {
    name: 'Meta AI + Ad Tools',
    useCase: 'Campaign optimization, audience targeting, creative testing',
    benefit: 'Identifies highest-performing ad angles faster and at lower cost',
    icon: 'target',
  },
  {
    name: 'Review & Reputation Tools',
    useCase: 'Automated review requests, response drafting, reputation monitoring',
    benefit: 'Builds social proof passively while protecting brand trust',
    icon: 'star',
  },
]

export const leadMagnetSystems: LeadMagnetSystem[] = [
  {
    number: '01',
    title: 'The Family Inquiry Automation System',
    preview:
      'A 3-step automated sequence that responds to every inquiry within 5 minutes — day or night.',
  },
  {
    number: '02',
    title: 'The AI-Powered Trust Page Framework',
    preview: 'How to structure your website so families feel confident before they ever visit.',
  },
  {
    number: '03',
    title: 'The Tour Scheduling & Reminder Flow',
    preview:
      'Reduce no-shows and increase booked tours with automated confirmations and SMS reminders.',
  },
  {
    number: '04',
    title: 'The Post-Move-In Review Engine',
    preview:
      'A simple system that generates authentic 5-star reviews from satisfied families — consistently.',
  },
  {
    number: '05',
    title: 'The Retargeting Loop for Undecided Families',
    preview:
      "How to stay in front of families who visited your site but haven't called yet — without being pushy.",
  },
]
