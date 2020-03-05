import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import PostLink from "../components/post-link";
import PageContainer from "../components/page-container";
import CardDeck from 'react-bootstrap/CardDeck';
import uniqid from 'uniqid';
import PageContent from "../components/page-content";
// import './_blog.scss';

function BlogPage({
  data: {
    allMarkdownRemark: { edges },
  },
  location
}) {
  return (
    <>
      <PageContainer title={"Blog"} activePath={location}>
        <PageContent>
          <h1>Blog</h1>
          <h3 className="pt-4">Recent Posts</h3>
          <div className='row'>
            {edges
              .filter(edge => !!edge.node.frontmatter.date)
              .map(edge => {
                return (
                  <Fragment key={uniqid()}>
                    <PostLink key={edge.node.id} post={edge.node} />
                  </Fragment>
                )
              })}
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
`

export default BlogPage
