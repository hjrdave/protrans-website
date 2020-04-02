import React, { Fragment, useEffect } from 'react';
import { Link } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import scrollTo from 'gatsby-plugin-smoothscroll';
import uniqid from 'uniqid';
import './_line-nav.scss';
import './_line-nav-dark.scss';

export default function LineNav({ navItems }) {

  const buildSections = navItems.map((item, index) => {
    return `section-${index + 1}`
  });

  return (
    <>
      <div className='line-nav'>
        <ListGroup variant="flush">
          <Scrollspy items={buildSections} currentClassName="line-nav-active">
            {
              navItems.map((item, index) => {
                return (
                  <ListGroup.Item className='pt-0' key={uniqid()}>
                    <div onClick={() => scrollTo(`#section-${index + 1}`)}><div className='rounded-circle line-nav-dot'></div><small>{item}</small></div>
                  </ListGroup.Item>
                )
              })
            }
          </Scrollspy>
        </ListGroup>
      </div>
    </>
  )
}