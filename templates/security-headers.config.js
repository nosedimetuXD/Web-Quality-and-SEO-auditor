// security-headers.config.js (Next.js / Express / Node standard)
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload', // Fuerza HTTPS
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY', // Previene Clickjacking
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff', // Previene MIME-sniffing
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';",
  },
];

module.exports = {
  securityHeaders,
};
