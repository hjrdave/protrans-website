import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './_line-nav.scss';

export default function LineNav() {
  return (
    <>
      <div className='line-nav'>
        <ListGroup variant="flush">
          <ListGroup.Item className='mt-0 pt-0'><div className='rounded-circle line-nav-dot'></div><small>Consolidation</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Optimization</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Solutions</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Logistics</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>3PL Manager</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Warehousing</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Client Focused</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Sustainable</small></ListGroup.Item>
          <ListGroup.Item className='mt-4'><div className='rounded-circle line-nav-dot'></div><small>Improver</small></ListGroup.Item>
          <ListGroup.Item className='mb-0 pb-0'><div className='rounded-circle line-nav-dot'></div><small>Global Logistics</small></ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}