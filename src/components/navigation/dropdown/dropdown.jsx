import React, { Fragment, useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import NavLink from "react-bootstrap/NavLink"
import NavItem from "react-bootstrap/NavItem"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from "gatsby"
import uniqid from "uniqid"

function NavDropdown({ item, type }) {

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
      {
        !(type === 'mobile') ?
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
          </Dropdown> : null
      }

      {
        (type === 'mobile') ?
          <div className='dropdown-mobile'>
            <Accordion defaultActiveKey="0" as={NavItem}>
              <Accordion.Toggle as={NavLink} eventKey="0">
                <i className="fas fa-caret-down pr-3"></i> {item.text}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <ul className='pb-2 mt-3 pt-3'>
                  {item.subMenu.map(subMenuItem => {
                    let key = uniqid();
                    return (
                      <React.Fragment key={key}>
                        <Dropdown.Item
                          onClick={() => toggleDropdown()}
                          onBlur={() => toggleDropdown()}
                          as={'li'}
                          className={'pt-2 pl-2'}
                        >
                          <Link to={subMenuItem.path}>{subMenuItem.text}</Link>
                        </Dropdown.Item>
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </div> : null
      }
    </>
  )
}

export default NavDropdown
