import { Link } from "gatsby";
import React from "react";
import './_header.scss';
import Image from '../../images/register';
import MainNav from '../../widgets/main-nav';

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className='p-4 d-flex justify-content-between align-content-center'>
    <div className='header-logo'>
      <Link to="/" ><Image name={'logoProtrans'} /></Link>
    </div>
    <MainNav />
  </header>
)

export default Header
