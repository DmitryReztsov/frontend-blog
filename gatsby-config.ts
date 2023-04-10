import type { GatsbyConfig } from "gatsby";
import * as process from 'process';

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Frontend blog',
    siteUrl: 'https://www.dmitryreztsovblog.gatsbyjs.io',
    description: "This is Frontzilla, Dmitry Reztsov's personal website"
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Frontzilla - blog about frontend development`,
        short_name: `Frontzilla`,
        start_url: `/`,
        background_color: `#0066CCFF`,
        theme_color: `#0066CCFF`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@style": "src/style",
          "@templates": "src/templates",
          "@uikit": "src/uikit",
          "@hooks": "src/hooks",
          "@assets": "src/assets",
          "@interfaces": "src/interfaces",
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    'gatsby-plugin-svgr',
  ]
};

export default config;
