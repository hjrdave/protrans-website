
/*
  desktop-menu.jsx
  Generic desktop navigation.
*/
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import NavItem from '../nav-item';
import NavDropdown from "../dropdown";
import SearchBox from '../search-box';
import uniqid from "uniqid";

export default function DesktopMenu({ navItems }) {


  return (
    <>
      <Navbar className="navigation mr-4 d-none d-lg-flex">
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
            <SearchBox />
          </div>
        </Nav>
      </Navbar>
    </>
  )
}
