module.exports = {
  siteMetadata: {
    title: `Assellalou`,
    description: `Assellalou personal website.`,
    author: `Assellalou`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-images` }],
      },
    },
  ],
}
