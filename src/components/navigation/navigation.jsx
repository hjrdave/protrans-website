import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";
import NavItem from './nav-item';
import NavDropdown from "./dropdown";
import SearchBox from './search-box';
import uniqid from "uniqid";
import "./_navigation.scss";

function Navigation({ navItems }) {
  return (
    <>
      <Navbar className="navigation mr-4">
        <Nav className="mr-auto">
          {navItems?.map(item => {
            return (
              <React.Fragment key={uniqid()}>
                {!item.subMenu ? (
                  <NavItem item={item} />
                ) : (
                    <NavDropdown item={item} />
                  )}
              </React.Fragment>
            )
          })}
          <div className="pl-2">
            {/* <Link to={"/search"} style={{ fontSize: "1.5rem", color: "black" }}> */}
            <SearchBox />
            {/* </Link> */}
          </div>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
