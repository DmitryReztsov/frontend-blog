import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Frontend blog`,
    siteUrl: `https://www.dmitryreztsovblog.gatsbyjs.io`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": "16Z920GQaX2OBiPovtKX3WJ5TKUUaQ5W0kXn_rc4xik",
        "spaceId": "c361nios9eet"
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Orbitron`,
            file: `https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap`,
          },
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }]
};

export default config;
