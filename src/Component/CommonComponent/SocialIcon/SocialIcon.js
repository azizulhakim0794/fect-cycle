import React from 'react'
import facebookPng from '../../../image/logo-icon/facebook.png'
import gmailPng from '../../../image/logo-icon/gmail.png'
import linkedinPng from '../../../image/logo-icon/linkedin.png'
import twitterPng from '../../../image/logo-icon/twitter.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SocialIcon = () => {
    return (
        <div><a href="https://www.facebook.com" className='text-decoration-none'><LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={facebookPng} title="Social media icon" /></a>
            <a className='text-decoration-none' href="https://twitter.com/?lang=en"><LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={twitterPng} title="Social media icon" /> </a>
            <a className='text-decoration-none' href="https://www.linkedin.com/feed/"> <LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={linkedinPng} title="Social media icon" /> </a>
            <a className='text-decoration-none' href="https://accounts.google.com"> <LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={gmailPng} title="Social media icon" /></a>
        </div>
    )
}

export default SocialIcon
