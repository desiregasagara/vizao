module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      'gatsby-plugin-sass', "gatsby-plugin-image",
      "gatsby-plugin-sharp",`gatsby-plugin-styled-components`,
     `gatsby-plugin-anchor-links` ,`gatsby-plugin-netlify`,`gatsby-plugin-offline`,
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
    ]
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}