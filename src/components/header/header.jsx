import { Link } from "gatsby";
import React, { useEffect } from "react";
import "./_header.scss";
import Image from "../../images/register";
import MainNav from "../../widgets/main-nav";
import Sticky from 'react-stickynode';

function Header({ siteTitle }) {
  useEffect(() => {
    console.log('Render: header')
  }, []);
  return (
    <>
      <div className='header-top d-flex justify-content-end p-1 pr-4'>
        <p className='mb-0 py-1'>
          <small>
            <a href='/' target='_blank' className='px-1'>Apps</a>  |
            <a href='/' target='_blank' className='px-1'>Business Intel</a>  |
            <a href='/' target='_blank' className='px-1'>Optimiz</a> |
            <a href='/' target='_blank' className='px-1'>Track Shipment</a>
          </small>
        </p>
      </div>
      <Sticky enabled={true} enableTransforms={true} activeClass={'header-sticky'}>
        <header className="px-4 d-flex justify-content-between align-content-center">
          <div className="header-logo pl-4 pt-1">
            <Link to="/">
              <Image name={"logoProtrans"} />
            </Link>
          </div>
          <div className='header-nav pr-4'>
            <MainNav />
          </div>
        </header>
      </Sticky>
    </>
  )
}

export default Header
