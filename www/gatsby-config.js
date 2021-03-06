require(`dotenv`).config()

const thoughtsFeed = require(`./src/utils/feed`)
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID
const githubToken = process.env.GITHUB_TOKEN
const intro = "We are designed for junior developers to step into blockchain DAPP development.  Here, they can get close to DeFi, NFT, DAO, CRYPTO projects."

module.exports = {
  siteMetadata: {
    title: `Dapp-Learning`,
    titleAlt: `Dapp-Learning free & open source courses of DeFi, NFT, DAO, CRYPTO projects`,
    siteUrl: `https://dapp-learning.com`,
    description: intro,
    headline: intro,
    language: `en`,
    image: `/data/dapp-learning-cover.png`,
    author: `@Dapp-Learning`,
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/thoughts`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    githubToken && {
      resolve: `gatsby-source-github-api`,
      options: {
        token: githubToken,
        variables: {},
        graphQLQuery: `
          query {
            repository(owner: "rebase-network", name: "Dapp-Learning") {
              stargazers {
                totalCount
              }
            }
          }
        `,
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`],
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Themes`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: thoughtsFeed,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dapp-Learning`,
        short_name: `DappLearning`,
        description: intro,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#81a8f8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
