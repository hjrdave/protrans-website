import React, { Fragment, useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import ListGroup from 'react-bootstrap/ListGroup';
import PageContainer from "../../components/page-container";
import uniqid from 'uniqid';
import PageContent from "../../components/page-content";
import PostCard from '../../components/post-card';
import './_logistics-news.scss';

export default function Page({
  data: {
    allMarkdownRemark: { edges },
  },
  location
}) {

  const catQuery = new URLSearchParams(location.search).get("category") || true;

  return (
    <>
      <PageContainer title={"Logistics News"} activePath={location} className={'logistics-news'}>
        <PageContent type={'full'}>
          <h1>Logistic News and Trends</h1>
          <h3 className="pt-4">{(catQuery === true) ? 'Recent Posts' : `Category: ${catQuery}`}</h3>
          <div className='d-flex justify-content-between'>

            <div className='row pr-4'>
              {edges
                .filter(edge => !!edge.node.frontmatter.date)
                .map(edge => {
                  if (catQuery !== true) {
                    if (catQuery === edge.node.frontmatter.category.toString()) {
                      return (
                        <Fragment key={uniqid()}>
                          <PostCard key={edge.node.id} post={edge.node} />
                        </Fragment>
                      )
                    }
                    return null
                  }
                  else if (catQuery === true) {
                    return (
                      <Fragment key={uniqid()}>
                        <PostCard key={edge.node.id} post={edge.node} />
                      </Fragment>
                    )
                  }
                })}
            </div>
            <div className='logistics-news-menu'>
              <ListGroup as="ul" variant='flush'>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === true) ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news`}>Recent</Link>
                </ListGroup.Item>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Lean Management') ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news?category=Lean%20Management`}>Lean Management<br />&amp; Six Sigma</Link>
                </ListGroup.Item>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Trucking') ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news?category=Trucking`}>Trucking</Link>
                </ListGroup.Item>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Logistics Technology') ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news?category=Logistics%20Technology`}>Logistics Technology</Link>
                </ListGroup.Item>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Regulation') ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news?category=Regulation`}>Regulation</Link>
                </ListGroup.Item>

                <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Sustainability') ? 'logistics-news-menu-active' : ''}`}>
                  <Link to={`/logistics-news?category=Sustainability`}>Sustainability</Link>
                </ListGroup.Item>

              </ListGroup>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

export const pageQuery = graphql`
  query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
        edges {
        node {
        id
        excerpt(pruneLength: 250)
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
}
}
`


