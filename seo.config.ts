import type { Metadata } from 'next';

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const seoConfig = defineMetadata({
  metadataBase: new URL('https://meveth.xyz'),
  title: {
    template: '%s - Manifold Finance',
    default: 'Manifold Finance - mevETH Protocol',
  },
  description: 'mevETH Protocol',
  themeColor: '#F6E458',
  openGraph: {
    images: '/og-image.png',
    url: 'https://meveth.xyz',
  },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' },
  ],
  twitter: {
    site: '@mevio',
    creator: '@foldfinance',
  },
});

export default seoConfig;
