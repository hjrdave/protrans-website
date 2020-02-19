import { Link } from "gatsby";
import React from "react";
import './_header.scss';
import Image from '../../images/register';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className='p-4 d-flex justify-content-between align-content-center'>
    <div className='header-logo'>
      <Link to="/" ><Image name={'logoProtrans'} /></Link>
    </div>
    <Navbar>
      <Nav className="mr-auto">
        <Link to="/solutions" className='nav-link'>Solutions</Link>
        <Link to="/technology" className='nav-link'>Technology</Link>
        <Link to="/carriers" className='nav-link'>Carriers</Link>
        <Link to="/blog" className='nav-link'>Blog</Link>
        <Link to="/about-us" className='nav-link'>About Us</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </Nav>
    </Navbar>
  </header>
)

export default Header
