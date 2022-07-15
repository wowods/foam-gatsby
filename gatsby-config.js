module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/about`,
      },
    },
  ],
  siteMetadata: {
    title: `wowods' notes`,
  },
}
