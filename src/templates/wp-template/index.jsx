/*
  Post Template
  This template is used for blog posts.
*/

import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import Sticky from 'react-stickynode';
import { ListGroup, Card, Button } from 'react-bootstrap';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import { useTreble } from 'treble-gsm';
import SEO from '../../components/seo';
import { DiscussionEmbed } from 'disqus-react';
import PostBanner from '../../components/post-banner';
import uniqid from 'uniqid';
import './_styles.scss';
import './_styles-dark.scss';

export default function Template({ data, location, pageContext }) {

  React.useEffect(() => {
    console.log(data);
  }, [])

  return (
    <>
      {/* <SEO
        title={title}
        description={excerpt}
        path={path}
        thumbnail={featuredImage.childImageSharp.fluid.src}
      /> */}

      <PageContainer activePath={location} id={'wp-template'}>
        {/* <PostBanner
          featuredImage={featuredImage.childImageSharp.fluid}
          category={category}
          title={title}
          tags={tags}
          publishDate={date}
          shareUrl={`${siteMetadata.domain}/${path}`}
        /> */}
        <PageContent type='post'>
          <h4>Posts</h4>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </PageContent>
      </PageContainer>
    </>
  )
}

//graphQL query
export const pageQuery = graphql`
query {
  allWordpressPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        excerpt
      }
    }
  }
}
`

