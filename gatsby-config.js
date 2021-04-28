module.exports = {
  siteMetadata: {
    title: `Richard Westmoreland`,
    description: `Hi, I'm Richard. I'm a web developer based in Houston, Texas. I build high-quality, responsive websites and applications`,
    author: `Richard Westmoreland`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-53GFDEJJ71", "UA-92825458-5"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
