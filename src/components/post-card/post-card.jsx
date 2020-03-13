import React, { useEffect } from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import Img from "gatsby-image";
import './_post-card.scss';

export default function PostCard({ post }) {

  return (
    <>
      <div className='col-4 post-card-container'>
        <Link to={post.frontmatter.path}>
          <Card className="mt-3 post-card">
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>
                {post.frontmatter.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <small>{post.frontmatter.date}</small>
              </Card.Subtitle>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  )
}

