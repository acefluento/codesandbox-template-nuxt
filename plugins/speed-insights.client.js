import { injectSpeedInsights } from '@vercel/speed-insights'

export default () => {
  injectSpeedInsights({
    framework: 'nuxt',
  })
}
