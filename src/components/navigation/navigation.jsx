import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";
import NavItem from './nav-item';
import NavDropdown from "./dropdown";
import SearchBox from './search-box';
import uniqid from "uniqid";
import "./_navigation.scss";

function Navigation({ navItems, type }) {
  return (

    <>
      {/** Desktop Menu */}
      {
        (type !== 'mobile') ?
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
          </Navbar> : null
      }

      {/*Mobile Menu*/}
      {
        (type === 'mobile') ?
          <Navbar className="navigation-mobile mr-4 d-flex d-lg-none">

            <Nav className="mr-auto d-block p-4">
              <div className='navigation-mobile-header d-flex justify-content-between pb-2'>
                <h1>
                  Main Menu
                </h1>
                <div>
                  <i class="far fa-times"></i>
                </div>
              </div>
              <div className="pt-4 pb-3">
                <SearchBox type={'mobile'} />
              </div>
              <div className='navigation-mobile-list-container'>
                {navItems?.map(item => {
                  return (
                    <React.Fragment key={uniqid()}>
                      {!item.subMenu ? (
                        <NavItem item={item} />
                      ) : (
                          <NavDropdown item={item} type={'mobile'} />
                        )}
                    </React.Fragment>
                  )
                })}
              </div>
            </Nav>
          </Navbar> : null
      }
    </>
  )
}

export default Navigation
