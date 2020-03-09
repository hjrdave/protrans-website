import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import PageContainer from "../components/page-container";
import PageContent from "../components/page-content";
import ShareButton from '../components/share-button';
import { DiscussionEmbed } from 'disqus-react'

function PostTemplate({ data, location }) {
  const { markdownRemark, site } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { siteMetadata } = site;
  const { title, date, featuredImage, category, path } = frontmatter;
  const disqusShortname = "protrans";
  const disqusConfig = { identifier: path, title: title }

  return (
    <>
      <PageContainer title={title} location={location}>
        <PageContent type='post'>
          <Img fluid={featuredImage.childImageSharp.fluid} />
          <p className='pt-4'>Category: {category}</p>
          <p>{date}</p>
          <h1 className="pt-4">{title}</h1>
          <ShareButton
            url={`${siteMetadata.domain}/${path}`}
            title={title}
            size={32}
          />

          <div
            className="blog-post-content pt-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </PageContent>
      </PageContainer>
    </>
  )
}

//graphQL query
export const pageQuery = graphql`
  query($path: String!) {
              site {
              siteMetadata {
              domain: siteUrl
          }
        }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
              html
      frontmatter {
              date(formatString: "MMMM DD, YYYY")
            path
            title
            category
        featuredImage {
              childImageSharp {
              fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
            }
          }
        }
      }
    }
  `

export default PostTemplate;
