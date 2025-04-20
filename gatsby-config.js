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
        repositoryName: "johna-go-dev",
        customTypesApiToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImpvaG5hLWdvLWRldi05ODgwOGEwMC0xZGQ3LTQwM2YtYjkzMS1kNjI4Zjk3ZDI1NTBfNSIsImRhdGUiOjE3NDUxNDM3OTcsImRvbWFpbiI6ImpvaG5hLWdvLWRldiIsImFwcE5hbWUiOiJqb2huYS1nby1kZXYiLCJpYXQiOjE3NDUxNDM3OTd9.cfcJgK7t4Qv90cXwmWDcAkKKXdy0jOFK85CyrdSCSXc",
      },
    },
  ],
};
