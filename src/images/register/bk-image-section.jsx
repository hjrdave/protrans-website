import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import './styles/_bk-image-section.scss';

export default function BkImageSection({ name, className }) {
  const data = useStaticQuery(graphql`
      query {

        slide1: file(relativePath: { eq: "slide-1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        slide2: file(relativePath: { eq: "slide-2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        slide3: file(relativePath: { eq: "slide-3.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

      }
    `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data[name].childImageSharp.fluid}
      backgroundColor={`#040e18`}
      className={className}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  )

}



