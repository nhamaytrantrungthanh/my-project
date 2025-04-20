/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My project`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      options: {
        repositoryName: process.env.REPOSITORY_NAME,
        customTypesApiToken: process.env.CUSTOM_TYPES_API_TOKEN,
      }
    }
  ]
};
