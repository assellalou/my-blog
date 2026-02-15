module.exports = {
  siteMetadata: {
    title: `Assellalou`,
    description: `Assellalou personal website.`,
    author: `Assellalou`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-images` }],
      },
    },
  ],
}
