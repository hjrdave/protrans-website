module.exports = {
  siteMetadata: {
    title: `Protrans 3PL`,
    description: `With over 25 years of expertise, ProTrans 3PL is a full-spectrum logistics management enterprise...`,
    siteUrl: `https://hjrdave.github.io/protrans-website`,
    author: `@ProTrans3PL`,
    twitterHandle: `@ProTrans3PL`
  },
  pathPrefix: `protrans-website`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `play.mediafish.io/wordpress`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        // Specify which URL structures to fetch
        includedRoutes: [
          '**/posts',
          '**/tags',
          '**/categories'
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/protrans-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-schema-field-absolute-path",
      options: {
        // a. single directory
        dirs: "src/images",
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "content", store: true, attributes: { boost: 5 } },
          { name: "date", store: true },
          { name: "path", store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            date: node => node.frontmatter.date,
            path: node => node.frontmatter.path,
          },
        },
        filename: "search_index.json",
      },
    },
  ],
}
