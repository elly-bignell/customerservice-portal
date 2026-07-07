/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/onboarding/hosting-audit',
        destination: '/hosting-audit.html',
      },
      {
        source: '/onboarding/website-audit',
        destination: '/website-audit.html',
      },
    ]
  },
}

module.exports = nextConfig
