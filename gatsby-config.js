/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `the-emerald-room`,
        short_name: `room`,
        start_url: `/`,
        display: `minimal-ui`,
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
} 
