import React, { useEffect } from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import Img from "gatsby-image";
import './_post-card.scss';

export default function PostCard({ post }) {

  const postData = post.frontmatter;
  const { path, date, title, featuredImage } = postData;
  const excerpt = post.excerpt;

  return (
    <>
      <div className='col-12 col-lg-4 post-card-container'>
        <Link to={path}>
          <Card className="mt-3 post-card">
            <Img fluid={featuredImage.childImageSharp.fluid} />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <small>{date}</small>
              </Card.Subtitle>
              <Card.Title>
                {title}
              </Card.Title>
              <Card.Text>
                {excerpt}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  )
}

