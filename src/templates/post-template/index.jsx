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
  const { posts, prev, next } = pageContext;
  const { markdownRemark, site } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  const { siteMetadata } = site;
  const { title, date, featuredImage, category, path, tags } = frontmatter;
  const disqusShortname = "protrans";
  const disqusConfig = { identifier: path, title: title };
  const [{ categories }] = useTreble();

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        thumbnail={featuredImage.childImageSharp.fluid.src}
      />
      <PageContainer activePath={location} id={'post-template'}>

        <PostBanner
          featuredImage={featuredImage.childImageSharp.fluid}
          category={category}
          title={title}
          tags={tags}
          publishDate={date}
          shareUrl={`${siteMetadata.domain}/${path}`}
        />
        <PageContent type='post'>
          <div className='row d-flex'>
            <div className='pt-4 pr-0 pr-md-4 col-12 col-lg-9'>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className='row py-4'>
                <div className='d-flex justify-content-between col-12'>
                  {prev &&
                    <Link to={prev.frontmatter.path}><strong>&lt;&lt; Previous:</strong> {prev.frontmatter.title}</Link> || <div></div>
                  }
                  {next &&
                    <Link to={next.frontmatter.path}>{next.frontmatter.title}<strong>: Next &gt;&gt;</strong></Link> || <div></div>
                  }
                </div>
              </div>


              {/**Mobile Category */}
              <div className='col-12 d-block d-lg-none post-menu post-menu-mobile py-4'>
                <Card body>
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
                    {
                      categories.map((item) => {
                        return (
                          <Fragment key={uniqid()}>
                            <ListGroup.Item as="li" className={`pt-1`}>
                              <Link to={`/logistics-news?category=${item.slug}`}>{item.name}</Link>
                            </ListGroup.Item>
                          </Fragment>
                        )
                      })
                    }
                  </ListGroup>
                </Card>
              </div>

              {/** Comments */}
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
            <div className='pl-0 pl-md-4 col-12 col-lg-2 d-none d-lg-block post-menu'>

              <Sticky enabled={true} top={90} >
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
                  {
                    categories.map((item) => {
                      return (
                        <Fragment key={uniqid()}>
                          <ListGroup.Item as="li" className={`pt-1`}>
                            <Link to={`/logistics-news?category=${item.slug}`}>{item.name}</Link>
                          </ListGroup.Item>
                        </Fragment>
                      )
                    })
                  }
                </ListGroup>
              </Sticky>
            </div>
          </div>



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
              excerpt
      frontmatter {
            date
            path
            title
            tags
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

