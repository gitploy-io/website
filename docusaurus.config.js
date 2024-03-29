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
        // General 
        {name: 'description', content: 'Build the deployment system around GitHub.'},
        {name: 'keywords', content: 'github, github deployment api, github environment, deploy, continuous deployment, continuous delivery, cicd'},
        // Facebook
        {property: 'og:type', content: 'website'},
        {property: 'og:description', content: 'Build the deployment system around GitHub.'},
        {property: 'og:image', content: 'https://www.gitploy.io/img/logo_400.png'},
        // Twitter
        {property: 'twitter:domain', content: 'gitploy.io'},
        {property: 'twitter:url', content: 'https://www.gitploy.io/'},
        {name: 'twitter:title', content: 'Gitploy'},
        {name: 'twitter:description', content: 'Build the deployment system around GitHub.'},
        {name: 'twitter:image', content: 'https://www.gitploy.io/img/logo_400.png'},
      ],
      navbar: {
        title: 'Gitploy',
        logo: {
          alt: 'Gitploy',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/enterprise',
            label: 'Enterprise',
            position: 'left',
          },
          {
            href: 'https://github.com/gitploy-io/gitploy',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                href: 'https://github.com/gitploy-io/gitploy/issues',
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
              {
                label: 'Blog',
                to: '/blog',
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
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ZDLINYGROS',
        apiKey: 'd45b62469926927090c8af5e8b372f6e',
        indexName: 'gitploy',
        contextualSearch: true
      }
    }),
};

module.exports = config;
