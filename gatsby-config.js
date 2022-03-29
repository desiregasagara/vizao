module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      'gatsby-plugin-sass', "gatsby-plugin-image",
      "gatsby-plugin-sharp",`gatsby-plugin-styled-components`,
     `gatsby-plugin-anchor-links` ,`gatsby-plugin-netlify`,`gatsby-plugin-offline`,`gatsby-transformer-sharp`,
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vizao`,
        short_name: `Vizao`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/Vizao Logo Linkedin.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-224149803-1", // Google Analytics / GA
        
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared acrosgs all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          anonymize_ip: true,
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    ]
}
