import React from 'react';
import PageContent from '../../components/page-content';
import SubscribeForm from '../../components/forms/subscribe-form';
import GraphicHexBk from '../../assets/GraphicHexBk';
import './_page-form.scss';

export default function PageForm() {

  return (
    <>
      <PageContent type='banner' className='page-form-container'>
        <GraphicHexBk />
        <div className='row d-flex justify-content-center'>
          <div className='col-5 py-4'>
            <p className='text-center text-capitalize mb-3 h4'>
              Want to get started saving on Logistics spend in your supply chain?
              </p>
            <p className='text-center text-capitalize h1 mb-4'>
              Let's get to work!
              </p>
            <SubscribeForm />
          </div>
        </div>
      </PageContent>
    </>
  )
}