import React, { useEffect } from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import Img from "gatsby-image";
import './_post-link.scss';

function PostLink({ post }) {
  useEffect(() => {
    console.log(post.frontmatter.featuredImage.childImageSharp.fluid);
  }, [])
  return (
    <>
      <div className='col-4 post-link-container'>
        <Link to={post.frontmatter.path}>
          <Card className="mt-3 post-link">
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>
                {post.frontmatter.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.frontmatter.date}
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

export default PostLink