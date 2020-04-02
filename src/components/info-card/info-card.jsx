import React from 'react';
import { Card } from 'react-bootstrap';
import './_info-card.scss';
import './_info-card-dark.scss';

export default function InfoCard({ children }) {

  return (
    <>
      <div className='info-card'>
        <Card>
          <Card.Body>{children}</Card.Body>
        </Card>
      </div>
    </>
  )
}