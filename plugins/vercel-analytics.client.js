export default () => {
  // Dynamically load Vercel Analytics script
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { inject } = require('@vercel/analytics')
    inject()
  }
}
