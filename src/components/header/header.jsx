import { Link } from "gatsby"
import React, { useEffect } from "react"
import "./_header.scss"
import Image from "../../images/register"
import MainNav from "../../widgets/main-nav"

function Header({ siteTitle }) {
  useEffect(() => {
    console.log('Render: header')
  }, []);
  return (
    <>
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
    </>
  )
}

export default Header
