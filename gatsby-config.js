module.exports = {
  /* access this with graphql:
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }

  playground: http://localhost:8000/___graphql
  */
  siteMetadata: {
    title: 'the page title',
  },


  plugins: [
    'gatsby-plugin-layout',
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
  ],
}
