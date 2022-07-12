module.exports = {
  siteMetadata: {
    title: `Vinicius Freire`,
    author: {
      name: `viniciusfgx`,
      summary: `Full Stack Software Developer`,
      selfIntroduction: `Hello world!`,
    },
    description: `My personal blog to share all knowledge that I learned during my career.`,
    siteUrl: `http://viniciusfgx.com/`,
    social: {
      git: `https://github.com/viniciusfgx`,
      instagram: `https://www.instagram.com/viniciusfg_`,
      linkedin: `https://linkedin.com/in/viniciusfgx`,
      mail: `contact@viniciusfgx.com`,
    },
    commentInfo: {
      service: 'utterances', // select utterances or disqus
      disqusId: 'our-blog-starter', // your disqus shortname, check detail: disqus.com
      utterancesId: 'react-sprint/gatsby-blog-starter-with-typescript', // your gatsby repository, check detail: utteranc.es
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "./src/styles/variables.scss"; @import "./src/styles/mixins.scss";`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          'gatsby-remark-emoji',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vinicius Freire`,
        short_name: `viniciusfgx`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#141415`,
        display: `minimal-ui`,
        icon: `src/images/vx.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
