module.exports = {
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
