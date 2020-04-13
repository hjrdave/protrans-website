/*
  header.jsx
  Site header.  Includes company logo, main navigation, and top masthead navigation
*/

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./_header.scss";
import "./_header-dark-mode.scss";
import { Form } from 'react-bootstrap';
import Image from "../../images/register";
import LogoProtrans from '../../assets/LogoProtrans';
import MainNav from "../../widgets/main-nav";
import Sticky from 'react-stickynode';
import { updateStore, useTreble } from "treble-gsm";

function Header() {

  const [{ darkMode }, dispatch] = useTreble();
  const [darkModeSwitchState, setDarkModeSwitchState] = useState(0);

  const handleDarkMode = () => {
    if (darkMode) {
      updateStore('darkMode', false, dispatch);
    } else {
      updateStore('darkMode', true, dispatch);
    }
  }


  useEffect(() => {
    setDarkModeSwitchState((darkMode) ? 1 : 0);
  }, [darkMode]);

  return (
    <>
      <div className='mast-head'>
        <div className='header-top d-flex justify-content-end p-1 pr-4'>
          <p className='mb-0 py-1'>
            <small>
              <a href='/' target='_blank' className='px-1'>Apps</a>  |
            <a href='/' target='_blank' className='px-1'>Business Intel</a>  |
            <a href='/' target='_blank' className='px-1'>Optimiz</a> |
            <a href='/' target='_blank' className='px-1'>Track Shipment</a>
            </small>
          </p>
          <Form className='dark-mode-toggle py-1 pl-3'>
            <Form.Check
              checked={darkModeSwitchState}
              type="switch"
              id="dark-mode-switch"
              label=""
              onChange={() => handleDarkMode()}
            />
          </Form>
        </div>
        <Sticky enabled={true} enableTransforms={true} activeClass={'header-sticky'}>
          <header className="px-4 d-flex justify-content-between align-content-center">
            <div className="header-logo pl-4 pt-1">
              <Link to="/">
                <LogoProtrans />
              </Link>
            </div>
            <div className='header-nav pr-4'>
              <MainNav />
              <p className='mb-0 d-flex align-items-center d-lg-none '>
                <i onClick={() => updateStore('updateMobileNavState', true, dispatch)} className="far fa-bars"></i>
              </p>
            </div>
          </header>
        </Sticky>
      </div>
      <MainNav type={'mobile'} />
    </>
  )
}

export default Header
