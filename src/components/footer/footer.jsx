import React from "react";
import { Link } from 'gatsby';
import "./_footer.scss"

function Footer() {
  return (
    <>
      <footer className="mt-4">
        <div className='d-flex justify-content-center'>
          <div className='col-8'>
            <div className='p-4 d-flex justify-content-between footer-content'>
              <div className='d-flex'>
                <div className='footer-apps-logins mr-4'>
                  <p className='text-uppercase font-weight-bold'>Apps and Logins</p>
                  <ul>
                    <li><Link to='/'>Optimiz</Link></li>
                    <li><Link to='/'>Business Intelligence</Link></li>
                    <li><Link to='/'>Applications</Link></li>
                    <li><Link to='/'>Claims</Link></li>
                    <li><Link to='/'>ADP</Link></li>
                    <li><Link to='/'>Track Shipment</Link></li>
                  </ul>
                </div>
                <div className='footer-contact-us ml-4'>
                  <p className='text-uppercase font-weight-bold'>Contact Us</p>
                  <ul>
                    <li><Link to='/'>Sales Inquires</Link></li>
                    <li><Link to='/'>Customer Service</Link></li>
                    <li><Link to='/'>Create a Shipment</Link></li>
                    <li><Link to='/'>Locations</Link></li>
                  </ul>
                </div>
              </div>

              <div className='footer-social-media'>
                <p className='text-uppercase font-weight-bold text-center'>Social Media</p>
                <div className='footer-social-media-icons d-flex'>
                  <a href='/' target='_blank'><i className="fab fa-facebook px-1"></i></a>
                  <a href='/' target='_blank'><i className="fab fa-twitter px-1"></i></a>
                  <a href='/' target='_blank'><i className="fab fa-linkedin px-1"></i></a>
                  <a href='/' target='_blank'><i className="fab fa-youtube px-1"></i></a>
                  <a href='/' target='_blank'><i className="fab fa-instagram px-1"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='footer-copyright p-2 px-3 d-flex justify-content-between'>
          <p className='mb-0 text-uppercase' >
            <small>Site Map | Privicy Policy | Terms of Use | Careers</small>
          </p>
          <p className='mb-0'><small>&copy; 1993 - {new Date().getFullYear()}, ProTrans International Inc. All Rights Reserved.</small></p>
          <p className='mb-0 text-uppercase' style={{ opacity: '0' }}>
            <small><Link to='/'>Site Map</Link> | <Link to='/'>Privicy Policy</Link> | <Link to='/'>Terms of Use</Link> | <Link to='/'>Careers</Link></small>
          </p>

        </div>
      </footer>
    </>
  )
}

export default Footer
