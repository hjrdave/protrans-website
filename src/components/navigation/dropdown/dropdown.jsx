import React, { Fragment } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import NavLink from "react-bootstrap/NavLink"
import NavItem from "react-bootstrap/NavItem"
import { Link } from "gatsby"
import uniqid from "uniqid"

function NavDropdown({ item }) {
  return (
    <>
      <Dropdown as={NavItem} >
        <Dropdown.Toggle as={NavLink}>{item.text}</Dropdown.Toggle>
        <Dropdown.Menu className="p-3" >
          <ul>
            {item.subMenu.map(subMenuItem => {
              let key = uniqid();
              return (
                <React.Fragment key={key}>
                  <li className="pt-2">
                    <Link to={subMenuItem.path}>{subMenuItem.text}</Link>
                  </li>
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
