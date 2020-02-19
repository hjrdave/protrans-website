import React from "react"
import { graphql } from "gatsby";
import Img from 'gatsby-image';

interface Props {
  data: any
}

export default function Template({ data, }: Props) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  React.useEffect(() => {
    console.log(frontmatter.featuredImage);
  }, [])
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
