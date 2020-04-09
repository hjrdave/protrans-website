import React from "react";
import SEO from '../../components/seo';
import { Button } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title="Engineering, Analysis, and Design" />
      <PageContainer id='engineering-analysis-design-page' activePath={location}>
        <PageBanner
          title={'Engineering, Analysis, and Design'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">What Make Us Different From Every Other 3pl?</h2>
              <p className='text-center'>What makes us different from our competitors is that we use integrated customer release data to develop innovative and dynamic solutions. We use Logistics Plans to plan, execute and evaluate your network on a continuous basis.</p>
            </div>
          </div>

          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                The Key:
              </h3>
              <p>The key is logistics plans! On average, over 95% of our customer networks are planned movements. Using release data and logistics plans, our engineering teams dissect data to predictively analyze and develop lowest cost solutions. KNOWING YOUR HISTORY ALLOWS US TO ANTICIPATE YOUR FUTURE.</p>
              <div className='d-flex justify-content-center'>
                <Button>Get an Analysis</Button>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Our Logistics Analysis, Engineering, And Design Process</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                1: Data Review
              </h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                2: Data Cleanse
              </h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                3: Baseline
              </h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                4: Optimiz
              </h3>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                5: Summary
              </h3>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

