export interface AlfFeature {
  icon: string
  title: string
  description: string
  color: 'blue' | 'red' | 'emerald' | 'purple'
}

export interface AlfCaseStudyMetric {
  label: string
  before: string
  after: string
  accent: string
}

export interface AlfPricingTier {
  name: string
  price: string
  period: string
  description: string
  includes: string[]
  cta: string
  featured: boolean
  badge?: string
}

export interface AlfFaq {
  question: string
  answer: string
}

export interface AlfStep {
  number: string
  title: string
  description: string
  icon: string
}

export const alfFeatures: AlfFeature[] = [
  {
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    title: 'Auto-Monitoring',
    description:
      'Never miss a review. We pull new reviews from Google, Yelp, Facebook, and AssistedLivingCenter.com every day and surface them in one dashboard.',
    color: 'blue',
  },
  {
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    title: 'Negative Review Alerts',
    description:
      'Any review 3 stars or below triggers an immediate staff notification with the full review text, platform, and reviewer name attached.',
    color: 'red',
  },
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'AI-Drafted Responses',
    description:
      "Every flagged review gets a GPT-drafted response in your facility's voice — empathetic, professional, and ready to publish or edit before posting.",
    color: 'emerald',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Review Request Campaigns',
    description:
      "Automated SMS and email drip sequences go to residents' families after move-in, requesting a review on whichever platform needs the most support.",
    color: 'purple',
  },
]

export const alfCaseStudyMetrics: AlfCaseStudyMetric[] = [
  {
    label: 'Google Rating',
    before: '3.2★',
    after: '4.7★',
    accent: 'text-emerald-400',
  },
  {
    label: 'Response Rate',
    before: '0%',
    after: '100%',
    accent: 'text-brand-blue',
  },
  {
    label: 'Monthly Inquiries',
    before: '4',
    after: '11',
    accent: 'text-brand-blue',
  },
  {
    label: 'Move-ins Attributed',
    before: '0',
    after: '3',
    accent: 'text-emerald-400',
  },
]

export const alfPricingTiers: AlfPricingTier[] = [
  {
    name: 'Foundation',
    price: '$297',
    period: '/mo',
    description:
      'Everything you need to monitor, get alerted, and respond to reviews — without lifting a finger on the tech.',
    includes: [
      'Monitoring across 4 platforms (daily)',
      'Negative review alert system',
      'AI-drafted responses for flagged reviews',
      'Monthly reputation performance report',
    ],
    cta: 'Start with Foundation',
    featured: false,
  },
  {
    name: 'Managed',
    price: '$497',
    period: '/mo',
    description:
      'Full done-for-you reputation management. We monitor, respond, and run campaigns so your staff never has to think about it.',
    includes: [
      'Everything in Foundation',
      'Done-for-you response publishing',
      'Review request campaign management',
      'Quarterly reputation strategy call',
      'Priority support',
      'Platform expansion on request',
    ],
    cta: 'Get Full Management',
    featured: true,
    badge: 'Most Popular',
  },
]

export const alfFaqs: AlfFaq[] = [
  {
    question: 'Which platforms do you monitor?',
    answer:
      'We monitor Google Reviews, Yelp, Facebook, and AssistedLivingCenter.com. These are the four platforms families use most when evaluating assisted living options.',
  },
  {
    question: 'Do we have to publish the AI responses ourselves?',
    answer:
      'On the Foundation plan, yes — we draft the response and you publish it. On the Managed plan, we handle publishing for you after a brief approval window.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most facilities are fully configured and live within 48 hours of signup. We handle the platform connections and initial audit — you just provide access.',
  },
  {
    question:
      'We already have a Google Business account. Does that still work?',
    answer:
      'Yes. We connect to your existing Google Business Profile — no migration, no disruption to what you already have set up.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts. Both plans are month-to-month and you can cancel at any time. Setup is included at no extra cost.',
  },
]

export const alfSteps: AlfStep[] = [
  {
    number: '01',
    title: 'Connect Your Profiles',
    description:
      'You provide access to your Google Business, Yelp, Facebook, and ALC profiles. Takes about 10 minutes.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  },
  {
    number: '02',
    title: 'We Configure Alerts',
    description:
      'We add your staff email addresses and phone numbers, set the alert thresholds, and test the notification flow.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    number: '03',
    title: 'First Monitoring Run',
    description:
      "All platforms are scanned and a baseline reputation report is generated. You'll see where you stand across every platform before we begin.",
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    number: '04',
    title: 'Campaigns Go Live',
    description:
      'Review request sequences are activated for new move-ins. From day one, your facility is building a healthier review profile automatically.',
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  },
]
