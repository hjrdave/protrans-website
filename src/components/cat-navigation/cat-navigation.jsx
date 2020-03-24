import React, { Fragment, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'gatsby';
import "./_cat-navigation.scss";

export default function CatNavigation({ catQuery }) {



  return (
    <>
      <ListGroup as="ul" variant='flush'>
        <h4 className='pl-3'>Categories</h4>
        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === true) ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news`}>Recent</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Lean Management') ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news?category=Lean%20Management`}>Lean Management<br />&amp; Six Sigma</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Trucking') ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news?category=Trucking`}>Trucking</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Logistics Technology') ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news?category=Logistics%20Technology`}>Logistics Technology</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Regulation') ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news?category=Regulation`}>Regulation</Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={`pt-1 ${(catQuery === 'Sustainability') ? 'logistics-news-menu-active' : ''}`}>
          <Link to={`/logistics-news?category=Sustainability`}>Sustainability</Link>
        </ListGroup.Item>

      </ListGroup>
    </>
  )
}

