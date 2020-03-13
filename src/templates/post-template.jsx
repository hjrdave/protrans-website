import React, { useEffect, Fragment } from "react";
import { graphql, Link } from "gatsby";
import Sticky from 'react-stickynode';
import ListGroup from 'react-bootstrap/ListGroup';
import BackgroundImage from 'gatsby-background-image';
import PageContainer from "../components/page-container";
import PageContent from "../components/page-content";
import ShareButton from '../components/share-button';
import { DiscussionEmbed } from 'disqus-react';
import uniqid from 'uniqid';
import './_post-template.scss';

function PostTemplate({ data, location, pageContext }) {
  const { posts } = pageContext;
  const { markdownRemark, site } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { siteMetadata } = site;
  const { title, date, featuredImage, category, path } = frontmatter;
  const disqusShortname = "protrans";
  const disqusConfig = { identifier: path, title: title }
  useEffect(() => {
    console.log(pageContext)
  }, [pageContext])
  return (
    <>
      <PageContainer title={title} location={location}>
        <BackgroundImage
          Tag="section"
          fluid={featuredImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className={'featured-image'}
        >
          <div className={'featured-image-container d-flex justify-content-center align-items-center'}>
            <div className='col-8 featured-image-content'>
              <p>Category: {category}</p>
              <h1>{title}</h1>
              <div className='d-flex justify-content-start'>
                <div>
                  <p><small>Published: {date}</small></p>
                  <ShareButton
                    url={`${siteMetadata.domain}/${path}`}
                    title={title}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>

        </BackgroundImage>

        <PageContent type='post'>
          <div className='row d-flex'>
            <div
              className="blog-post-content pt-4 pr-4 col-9"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className='col-3 post-menu'>

              <Sticky enabled={false} top={90}>
                <h4>Recent Posts</h4>
                <ListGroup as="ul" variant='flush'>
                  {
                    posts.map((post) => {
                      let path = post.node.frontmatter.path;
                      let title = post.node.frontmatter.title;
                      return (
                        <Fragment key={uniqid()}>
                          <ListGroup.Item as="li" className={`pt-1`}>
                            <Link to={path}>{title}</Link>
                          </ListGroup.Item>
                        </Fragment>
                      )
                    })
                  }
                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={'/logistics-news'}><strong>See More</strong></Link>
                  </ListGroup.Item>
                </ListGroup>
                <h4 className='pt-4'>Categories</h4>
                <ListGroup as="ul" variant='flush'>

                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={`/logistics-news?category=Lean%20Management`}>Lean Management<br />&amp; Six Sigma</Link>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={`/logistics-news?category=Trucking`}>Trucking</Link>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={`/logistics-news?category=Logistics%20Technology`}>Logistics Technology</Link>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={`/logistics-news?category=Regulation`}>Regulation</Link>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className={`pt-1`}>
                    <Link to={`/logistics-news?category=Sustainability`}>Sustainability</Link>
                  </ListGroup.Item>

                </ListGroup>
              </Sticky>
            </div>
          </div>
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
