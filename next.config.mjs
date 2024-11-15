import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import withPWA from 'next-pwa';

// Run Cloudflare's local dev setup only in development mode
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

// PWA configuration
const pwaConfig = withPWA({
  dest: 'public',  // Service worker will be generated in the public directory
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add any other configuration you need
};

export default pwaConfig(nextConfig);
