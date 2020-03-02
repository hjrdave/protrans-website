import React, { Fragment } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import uniqid from "uniqid"
import "./_navigation.scss"

function Navigation({ navItems }) {
  return (
    <>
      <Navbar className="navigation">
        <Nav className="mr-auto">
          {navItems?.map(item => {
            return (
              <React.Fragment key={uniqid()}>
                <Link to={item.path} className="nav-link">
                  {item.text}
                </Link>
              </React.Fragment>
            )
          })}
          {/* <Search /> */}
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
