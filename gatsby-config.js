require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://www.hive-berlin.de/graphql`,
        verbose: true,
        // for wp-graphql-gutenberg, attributes currently breaks due
        // to the origin schema. It works if we exclude attributes
        excludeFields: [`attributes`],
        schema: {
          queryDepth: 5,
          typePrefix: `Wp`,
          timeout: 30000, 
        },
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: false,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: false,
            copyQueryOnError: false,
            panicOnError: false,
            // a critical error is a WPGraphQL query that returns an error and response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production
                  5000,
          },
        },
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     // {
     // resolve: 'gatsby-source-vimeo-all',
     
     //options: {
     //   clientId: 'YOUR_CLIENT_ID',
     //   clientSecret: 'YOUR_CLIENT_SECRET',
     //   accessToken: 'YOUR_ACCESS_TOKEN'
     // },
    //},
   // clientId: 'd99289e2e45ecf5d4d07b70513882724d66a68f9',
   // clientSecret: '9wsMndqQG6pfzS8ttxixByI9o9l61g/ki5ZBbRMu5HWvPKnawwUUtLgbFKU9NYK8127Sa/tK+rAFQKGSzaB4pE1IYF3oV22hmySOlBKXV0/HKGFfUa7VdPjlvtBG+Gzb',
   // accessToken: '385c0f88a45733c3520c4a51c6ce9dec'
 
  ],
}
