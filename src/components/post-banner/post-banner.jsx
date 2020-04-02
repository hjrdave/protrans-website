import React, { Fragment } from 'react';
import BackgroundImage from 'gatsby-background-image';
import ShareButton from '../share-button';
import uniqid from 'uniqid';
import './_post-banner.scss';
import './_post-banner-dark.scss';

export default function PostBanner({ featuredImage, category, title, publishDate, tags, shareUrl }) {

  return (
    <>
      <div className='post-banner'>
        <BackgroundImage
          Tag="section"
          fluid={featuredImage}
          backgroundColor={`#040e18`}
          className={'featured-image'}
        >
          <div className={'featured-image-container d-flex justify-content-center align-items-center'}>
            <div className='col-12 px-4 px-lg-0 col-lg-8 featured-image-content'>
              <p>Category: {category}</p>
              <h1>{title}</h1>
              <div className='d-flex'>
                {
                  tags.map((tag) => {
                    return (
                      <Fragment key={uniqid()}>
                        <span className="badge badge-primary px-2 mx-1">{tag}</span>
                      </Fragment>
                    )
                  })
                }
              </div>

              <div className='d-flex justify-content-start'>
                <div>
                  <p><small>Published: {publishDate}</small></p>
                  <ShareButton
                    url={shareUrl}
                    title={title}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>

        </BackgroundImage>
      </div>
    </>
  )
}