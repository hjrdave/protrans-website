import React from 'react';
import { useTreble, updateStore } from 'treble-gsm';
import { Nav, Navbar } from 'react-bootstrap';
import NavItem from '../nav-item';
import SearchBox from '../search-box';
import uniqid from 'uniqid';
import NavDropdown from '../dropdown';

export default function MobileMenu({ navItems }) {

  const [{ mobileNavState }, dispatch] = useTreble();

  return (
    <>
      <Navbar className={`navigation-mobile mr-4 d-flex d-lg-none ${(mobileNavState) ? 'navigation-mobile-open' : ''}`}>

        <Nav className="mr-auto d-block p-4">
          <div className='navigation-mobile-header d-flex justify-content-between pb-2'>
            <h1>
              Main Menu
            </h1>
            <div>
              <i onClick={() => updateStore('updateMobileNavState', false, dispatch)} className="far fa-times"></i>
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
      </Navbar>
    </>
  )
}