import React, { Fragment, useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import NavLink from "react-bootstrap/NavLink"
import NavItem from "react-bootstrap/NavItem"
import { Link } from "gatsby"
import uniqid from "uniqid"

function NavDropdown({ item }) {

  const [showDropdown, setShowDropdown] = useState(false);

  //handlers
  const toggleDropdown = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  }

  return (
    <>
      <Dropdown as={NavItem} >
        <Dropdown.Toggle as={NavLink} >
          {item.text}
        </Dropdown.Toggle>
        <Dropdown.Menu className="px-3" >
          <ul className='pb-2'>
            {item.subMenu.map(subMenuItem => {
              let key = uniqid();
              return (
                <React.Fragment key={key}>
                  <Dropdown.Item
                    onClick={() => toggleDropdown()}
                    onBlur={() => toggleDropdown()}
                    as={'li'}
                    className={'pt-2'}
                  >
                    <Link to={subMenuItem.path}>{subMenuItem.text}</Link>
                  </Dropdown.Item>
                </React.Fragment>
              )
            })}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default NavDropdown
