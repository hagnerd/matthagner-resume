module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "utils/typography"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/assets/images/`
      }
    },
    {
      resolve: "gatsby-plugin-sharp"
    },
    {
      resolve: "gatsby-transformer-sharp"
    }
  ]
};
