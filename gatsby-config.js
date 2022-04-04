module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.vizao.co`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
            "UA-224149803-1", // Google Analytics / GA
          ],
          pluginConfig: {
            head: true,
            anonymize_ip: true,
          },
        },
      },
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
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 253%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
    },
  },`gatsby-plugin-smoothscroll`,`gatsby-plugin-sitemap`,

    ]
}
