import { injectSpeedInsights } from '@vercel/speed-insights'

// Initialize Speed Insights for the application
export default function ({ app }) {
  if (typeof window !== 'undefined') {
    // Initialize Speed Insights
    const speedInsights = injectSpeedInsights({
      framework: 'nuxt',
    })

    // Update route on page navigation
    if (speedInsights && app.router) {
      app.router.afterEach((to) => {
        speedInsights.setRoute(to.path)
      })
    }
  }
}
