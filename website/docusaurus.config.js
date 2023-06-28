// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ROBOT FRAMEWORK',
  tagline: 'Yes, we are open source!',
  url: 'https://docs.robotframework.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rf_favicon.png',
  organizationName: 'marketsquare', // Usually your GitHub org/user name.
  projectName: 'robotframeworkguides', // Usually your repo name.
  trailingSlash: false,
  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.robotframework.org'}],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MarketSquare/robotframeworkguides',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'docs.robotframework.org',
        logo: {
          alt: 'Robot Framework Logo',
          src: 'img/robot-framework.svg',
          srcDark: 'img/robot-framework-dark.svg',
        },
        items: [
          {
            label: 'Guides',
            to: '/docs',
            position: 'right',
          },
          {
            href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
            label: 'User Guide',
            position: 'right',
          },
          {
            href: 'https://robotframework.org/robotframework/#standard-libraries',
            label: 'Standard Library',
            position: 'right',
          },
          {
            href: 'https://robot-framework.readthedocs.io/en/stable/',
            label: 'API Documentation',
            position: 'right',
          },

          {
            href: 'https://slack.robotframework.org/',
            label: 'Slack',
            position: 'right',
          },
          {
            href: 'https://github.com/MarketSquare/robotframeworkguides',
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
                label: 'Guides',
                to: '/docs',
              },
              {
                href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
                label: 'User Guide',
              },
              {
                href: 'https://robotframework.org/robotframework/#standard-libraries',
                label: 'Standard Library',
              },
              {
                href: 'https://robot-framework.readthedocs.io/en/stable/',
                label: 'API Documentation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'http://forum.robotframework.org/',
              },
              {
                label: 'Slack',
                href: 'https://slack.robotframework.org/',
              },
              {
                label: 'Twitter',
                href: 'http://twitter.com/robotframework',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MarketSquare/robotframeworkguides',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robot Framework Guides Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['robotframework', 'rust'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'GMGW7XXAQB',
  
        // Public API key: it is safe to commit it
        apiKey: 'b14e514cb158f8bb5360fe8622d36ea5',
  
        indexName: 'robotframeworkguides',
  
        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
};

module.exports = config;
