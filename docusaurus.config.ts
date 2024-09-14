import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Egglord Documentation',
  tagline: 'Documentation to the best open source projects.',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.egglord.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Egglord', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Egglord-Discord-Bot/docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Egglord Docs',
      logo: {
        alt: 'Egglord Documentation Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Spiderjockey02',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Bot setup',
              to: '/docs/category/setting-up-egglord',
            },
            {
              label: 'Lavalink setup',
              to: '/docs/category/lavalink-setup',
            },
            {
              label: 'API Server setup',
              to: '/docs/category/api-server-setup',
            },
            {
              label: 'Auto poster & Notifications setup',
              to: '/docs/category/setting-up-auto-poster-and-notifications',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Spiderjockey02',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/8g6zUQu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'API Website',
              href: 'https://api.egglord.dev',
            },
            {
              label: 'Dashboard',
              href: 'https://egglord.dev',
            },
            {
              label: 'Donation',
              href: 'https://ko-fi.com/spiderjockey02'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
