import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { default as GraphicHexBk } from '../../assets/GraphicHexBk';
import './_page-banner.scss';
import './_page-banner-dark.scss';

export default function PageBanner({ title, cta }) {

  return (
    <>
      <div className='page-banner col-12'>
        <div className='page-banner-graphic'>
          <GraphicHexBk />
        </div>
        <div className='row d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          <div className='col-8'>
            <h1 className='text-uppercase'>{title}</h1>
            {
              (cta) ?
                <Button className='mt-4'>{cta}</Button> : null
            }
          </div>
        </div>
      </div>
    </>
  )
}