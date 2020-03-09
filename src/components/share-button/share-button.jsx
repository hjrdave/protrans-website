import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

export const ShareButtons = ({ twitterHandle, url, title, tags, size }) => (
  <div className='d-flex'>
    <div className='px-1'>
      <FacebookShareButton url={url} >
        <FacebookIcon round={true} size={size} />
      </FacebookShareButton>
    </div>
    <div className='px-1'>
      <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
        <TwitterIcon round={true} size={size} />
      </TwitterShareButton>
    </div>
    <div className='px-1'>
      <LinkedinShareButton url={url}>
        <LinkedinIcon round={true} size={size} />
      </LinkedinShareButton>
    </div>
  </div>
)

export default ShareButtons