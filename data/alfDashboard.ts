export type Platform = 'google' | 'yelp' | 'facebook' | 'assistedlivingcenter'

export type SentimentScore = 'positive' | 'neutral' | 'negative'

export interface Review {
  id: string
  platform: Platform
  author: string
  rating: number
  date: string
  body: string
  sentiment: SentimentScore
  flagged: boolean
  responded: boolean
  aiDraftAvailable: boolean
}

export interface AiDraftResponse {
  reviewId: string
  draft: string
  tone: 'empathetic' | 'professional' | 'appreciative'
}

export interface PlatformStats {
  platform: Platform
  displayName: string
  currentRating: number
  reviewCount: number
  accentColor: string
}

export interface SentimentDataPoint {
  month: string
  positive: number
  neutral: number
  negative: number
}

export interface DashboardStats {
  overallRating: number
  totalReviews: number
  responseRate: number
  newReviewsThisMonth: number
  flaggedUnresponded: number
  campaignsSentThisMonth: number
}

export interface ReviewCampaign {
  id: string
  residentName: string
  status: 'sent' | 'opened' | 'clicked' | 'reviewed' | 'queued'
  channel: 'sms' | 'email'
  sentDate: string
  platform: Platform
}

export const dashboardStats: DashboardStats = {
  overallRating: 4.7,
  totalReviews: 84,
  responseRate: 100,
  newReviewsThisMonth: 11,
  flaggedUnresponded: 2,
  campaignsSentThisMonth: 18,
}

export const platformStats: PlatformStats[] = [
  {
    platform: 'google',
    displayName: 'Google',
    currentRating: 4.7,
    reviewCount: 51,
    accentColor: 'text-yellow-400',
  },
  {
    platform: 'yelp',
    displayName: 'Yelp',
    currentRating: 4.4,
    reviewCount: 17,
    accentColor: 'text-brand-red',
  },
  {
    platform: 'facebook',
    displayName: 'Facebook',
    currentRating: 4.8,
    reviewCount: 12,
    accentColor: 'text-blue-400',
  },
  {
    platform: 'assistedlivingcenter',
    displayName: 'AssistedLivingCenter',
    currentRating: 4.6,
    reviewCount: 4,
    accentColor: 'text-emerald-400',
  },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    platform: 'google',
    author: 'Sandra K.',
    rating: 5,
    date: '2024-01-14',
    body: 'Moving my mother into Magnolia Manor was one of the best decisions we ever made. The staff genuinely care, and she has blossomed since arriving. Every concern we had was addressed within hours. I cannot recommend this place highly enough.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r2',
    platform: 'google',
    author: 'James T.',
    rating: 5,
    date: '2024-01-10',
    body: 'We toured six facilities before choosing Magnolia Manor. The difference was obvious from the first visit — clean, warm, attentive. Our father has been there three months and he loves it.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r3',
    platform: 'google',
    author: 'Patricia W.',
    rating: 2,
    date: '2024-01-08',
    body: 'The care quality has been inconsistent. On weekends the staffing feels thin and it takes too long to get assistance with basic needs. My mom deserves better responsiveness.',
    sentiment: 'negative',
    flagged: true,
    responded: false,
    aiDraftAvailable: true,
  },
  {
    id: 'r4',
    platform: 'yelp',
    author: 'Michael B.',
    rating: 4,
    date: '2024-01-07',
    body: 'Overall a solid facility. Staff are friendly and the common areas are well-kept. My only minor note is that communication around care plan updates could be a bit more proactive.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r5',
    platform: 'facebook',
    author: 'Dorothy H.',
    rating: 5,
    date: '2024-01-05',
    body: 'The team at Magnolia Manor has been incredible. My father was nervous about transitioning but they made him feel at home immediately. The activities program keeps him engaged and happy every day.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r6',
    platform: 'google',
    author: 'Linda R.',
    rating: 1,
    date: '2024-01-03',
    body: 'Deeply disappointed. We had a billing issue that took three weeks to resolve and I felt like I was being ignored every time I called. The care itself is fine but the administrative side needs serious improvement.',
    sentiment: 'negative',
    flagged: true,
    responded: false,
    aiDraftAvailable: true,
  },
  {
    id: 'r7',
    platform: 'assistedlivingcenter',
    author: 'Robert G.',
    rating: 5,
    date: '2023-12-28',
    body: 'Five stars without hesitation. We had a difficult placement timeline and the admissions team went above and beyond to make it work. My wife is thriving here.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r8',
    platform: 'google',
    author: 'Carol M.',
    rating: 3,
    date: '2023-12-20',
    body: 'Good facility overall. The memory care wing is excellent. Dining could use more variety — my father complains the menu cycles repeat too frequently.',
    sentiment: 'neutral',
    flagged: true,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r9',
    platform: 'yelp',
    author: 'Thomas N.',
    rating: 5,
    date: '2023-12-18',
    body: 'Every family member I have spoken to who has a parent here says the same thing — Magnolia Manor genuinely cares. The nursing staff, the aides, the front desk. It shows throughout.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r10',
    platform: 'facebook',
    author: 'Barbara J.',
    rating: 4,
    date: '2023-12-12',
    body: 'Very pleased overall. Moving a parent is incredibly stressful and this team made the transition feel manageable. Would give 5 stars but parking is genuinely a challenge.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r11',
    platform: 'google',
    author: 'Helen V.',
    rating: 3,
    date: '2023-12-08',
    body: "The facility itself is beautiful and well-maintained. Staffing feels stretched at times. On a few occasions my father had to wait longer than I'd like for personal care. Worth discussing with management.",
    sentiment: 'neutral',
    flagged: true,
    responded: true,
    aiDraftAvailable: false,
  },
  {
    id: 'r12',
    platform: 'assistedlivingcenter',
    author: 'George P.',
    rating: 5,
    date: '2023-12-02',
    body: 'Magnolia Manor was highly recommended by a social worker at MetroHealth and I understand why. Clean, compassionate, and efficient. The staff know every resident by name.',
    sentiment: 'positive',
    flagged: false,
    responded: true,
    aiDraftAvailable: false,
  },
]

export const aiDraftResponses: AiDraftResponse[] = [
  {
    reviewId: 'r3',
    draft:
      "Thank you for sharing this with us, Patricia — we take staffing responsiveness seriously and we're sorry your mother experienced inconsistency on weekends. This is not the standard we hold ourselves to. We'd appreciate the opportunity to speak with you directly and ensure her care is consistent every day of the week. Please reach out to our care coordinator at your earliest convenience so we can make this right.",
    tone: 'empathetic',
  },
  {
    reviewId: 'r6',
    draft:
      "Linda, we sincerely apologize for the difficulty you experienced resolving this billing matter and for the communication gaps along the way. You should never feel ignored, and three weeks is far too long. We've identified areas in our administrative process that need improvement and are actively addressing them. We'd welcome the chance to connect with you personally — please contact our administrator directly and we will prioritize your concern immediately.",
    tone: 'empathetic',
  },
  {
    reviewId: 'r8',
    draft:
      "Carol, thank you for the kind words about our memory care program and for taking the time to leave honest feedback. We've noted your father's concern about menu variety and have shared it with our dining team — resident satisfaction at mealtimes matters to us and we're working on expanding the rotation. We appreciate your continued trust in us.",
    tone: 'professional',
  },
  {
    reviewId: 'r11',
    draft:
      "Helen, thank you for this thoughtful review. We're glad the facility environment has made a positive impression, and we hear your concern about wait times for personal care. We're actively reviewing staffing levels across all shifts to ensure every resident receives timely, consistent attention. We'd welcome the opportunity to discuss your father's specific care schedule — please don't hesitate to reach out to our care coordinator.",
    tone: 'professional',
  },
]

export const sentimentHistory: SentimentDataPoint[] = [
  { month: 'Aug', positive: 38, neutral: 28, negative: 34 },
  { month: 'Sep', positive: 47, neutral: 27, negative: 26 },
  { month: 'Oct', positive: 58, neutral: 24, negative: 18 },
  { month: 'Nov', positive: 67, neutral: 21, negative: 12 },
  { month: 'Dec', positive: 74, neutral: 18, negative: 8 },
  { month: 'Jan', positive: 82, neutral: 12, negative: 6 },
]

export const reviewCampaigns: ReviewCampaign[] = [
  {
    id: 'c1',
    residentName: 'R. Thompson',
    status: 'reviewed',
    channel: 'sms',
    sentDate: '2024-01-10',
    platform: 'google',
  },
  {
    id: 'c2',
    residentName: 'M. Patterson',
    status: 'clicked',
    channel: 'email',
    sentDate: '2024-01-11',
    platform: 'yelp',
  },
  {
    id: 'c3',
    residentName: 'D. Whitfield',
    status: 'opened',
    channel: 'sms',
    sentDate: '2024-01-12',
    platform: 'google',
  },
  {
    id: 'c4',
    residentName: 'A. Nguyen',
    status: 'sent',
    channel: 'email',
    sentDate: '2024-01-13',
    platform: 'facebook',
  },
  {
    id: 'c5',
    residentName: 'L. Graham',
    status: 'reviewed',
    channel: 'sms',
    sentDate: '2024-01-05',
    platform: 'google',
  },
  {
    id: 'c6',
    residentName: 'C. Morrison',
    status: 'sent',
    channel: 'email',
    sentDate: '2024-01-14',
    platform: 'assistedlivingcenter',
  },
  {
    id: 'c7',
    residentName: 'E. Harrington',
    status: 'queued',
    channel: 'sms',
    sentDate: '2024-01-15',
    platform: 'google',
  },
  {
    id: 'c8',
    residentName: 'B. Crawford',
    status: 'queued',
    channel: 'email',
    sentDate: '2024-01-15',
    platform: 'yelp',
  },
]
