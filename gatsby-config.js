module.exports = {
  siteMetadata: {
    title: 'Cirugia Ósea Instrumental',
    description: `Instrumental Quirúrgico `,
    author: `@hernandiazz99`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-source-datocms',
      options:{
        apiToken:'b9e80d0a2c3efffc7a4f2ff7a59525',
      }
    },
  ],
}
