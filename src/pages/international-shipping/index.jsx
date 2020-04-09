import React from "react";
import SEO from '../../components/seo';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title="International Shipping" />
      <PageContainer id='international-shipping-page' activePath={location}>
        <PageBanner
          title={'International Shipping'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-2 d-flex align-items-center'>
              <i className="fas fa-question-circle" style={{ fontSize: '10rem' }}></i>
            </div>
            <div className='col-6 pl-4'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                Protrans Global Presence
              </h3>
              <p>
                ProTrans Holdings acquired TOC giving ProTrans an established global presence that operates with the very same ProTrans processes. This established network makes international shipping a breeze!
               </p>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

