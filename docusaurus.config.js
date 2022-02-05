// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gitploy',
  tagline: 'Builds your deployment system around GitHub.',
  url: 'https://www.gitploy.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gitploy-io', // Usually your GitHub org/user name.
  projectName: 'gitploy', // Usually your repo name.

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            // Redirect the old link for the "deploy.yml" documentation.
            to: '/docs/concepts/deploy.yml', 
            from: ['/concepts/deploy.yml'], 
          },
        ],
      },
    ], 
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gitploy-io/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/gitploy-io/website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DWC4MY4M08',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'og:image', content: '/img/logo.svg'},
        {name: 'keywords', content: 'github, github deployment api, github environment, deploy, continuous deployment, continuous delivery, cicd'}
      ],
      navbar: {
        title: 'Gitploy',
        logo: {
          alt: 'Gitploy',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'https://cloud.gitploy.io',
            label: 'Cloud',
            position: 'left',
          },
          {
            to: '/enterprise',
            label: 'Enterprise',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/gitploy-io/gitploy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussion',
                href: 'https://github.com/gitploy-io/gitploy/discussions',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/gitploy/shared_invite/zt-112wz7qtz-HuZXMM_DaEEo1VDdsCUSRg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Cloud',
                href: 'https://cloud.gitploy.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gitploy-io/gitploy',
              },
              {
                label: 'Terms of service',
                to: '/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gitploy.IO`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
