import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import seoConfig from './seo.config';
import Link from 'next/link'
import type { NextraThemeLayoutProps } from 'nextra'

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts


const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter();
    const { url, images } = seoConfig.openGraph;

    if (route === '/') {
      return { titleTemplate: 'Panda – %s' };
    }

    return {
      titleTemplate: seoConfig.title.template,
      openGraph: { url, images: [{ url: `${url}${images}` }] },
    };
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="mevETH" />
      <meta property="og:description" content="Maximal Extraction Validators on Ethereum" />
    </>
  ),
  banner: {
    key: '1.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 mevETH Launches soon - Read more →
      </a>
    ),
  },
  logo: <span>mevETH</span>,
  project: {
    link: 'https://github.com/manifoldfinance/meveth2',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/manifoldfinance/meveth2',
  footer: {
    text: 'mevETH Protocol',
  },
  navigation: {
    prev: true,
    next: true,
  }
};

return (
  <div>
    <h1>My Theme</h1>
    {pageMap.map(item => {
      if (item.kind === 'MdxPage') {
        return (
          <Link key={item.name} href={item.route}>
            {item.route}
          </Link>
        )
      }
      return null
    })}
    <div style={{ border: '1px solid' }}>{children}</div>
  </div>
)
};
