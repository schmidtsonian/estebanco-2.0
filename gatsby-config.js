module.exports = {
  siteMetadata: {
    title: 'the page title',
  },
  plugins: [
    'gatsby-plugin-react-helmet',


    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Nova+Mono|Rozha+One|Anton`,
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
  ],
}
