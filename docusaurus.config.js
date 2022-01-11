// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gitploy',
  tagline: 'Builds your deployment system around GitHub.',
  url: 'https://www.gitploy.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gitploy-io', // Usually your GitHub org/user name.
  projectName: 'gitploy', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
