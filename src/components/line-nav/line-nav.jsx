import React from 'react';
import { Link } from 'gatsby';
import { ListGroup } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './_line-nav.scss';
import './_line-nav-dark.scss';

export default function LineNav() {
  return (
    <>
      <div className='line-nav'>
        <ListGroup variant="flush">
          <Scrollspy items={[
            'section-1',
            'section-2',
            'section-3',
            'section-4',
            'section-5',
            'section-6',
            'section-7',
            'section-8',
            'section-9',
            'section-10'
          ]} currentClassName="line-nav-active">
            <ListGroup.Item className='mt-0 pt-0'>
              <div onClick={() => scrollTo('#section-1')}><div className='rounded-circle line-nav-dot'></div><small>Consolidation</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-2')}><div className='rounded-circle line-nav-dot'></div><small>Optimization</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-3')}><div className='rounded-circle line-nav-dot'></div><small>Solutions</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-4')}><div className='rounded-circle line-nav-dot'></div><small>Logistics</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-5')}><div className='rounded-circle line-nav-dot'></div><small>3PL Manager</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-6')}><div className='rounded-circle line-nav-dot'></div><small>Warehousing</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-7')}><div className='rounded-circle line-nav-dot'></div><small>Client Focused</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-8')}><div className='rounded-circle line-nav-dot'></div><small>Sustainable</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2'>
              <div onClick={() => scrollTo('#section-9')}><div className='rounded-circle line-nav-dot'></div><small>Improver</small></div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-2 mb-0 pb-0'>
              <div onClick={() => scrollTo('#section-10')}><div className='rounded-circle line-nav-dot'></div><small>Global Logistics</small></div>
            </ListGroup.Item>
          </Scrollspy>
        </ListGroup>
      </div>
    </>
  )
}