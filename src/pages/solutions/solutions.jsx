import React from "react";
import { Link } from 'gatsby';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import InfoCard from '../../components/info-card';
import "./_solutions.scss";

export default function Page({ location }) {


  return (
    <>
      <PageContainer activePath={location}>
        <PageBanner
          title={<>Strategic Solutions<br />Unique to Your Needs</>}
          cta={'Get an Analysis'}
        />
        <PageContent>
          <div className='solutions-page-card-container row d-flex pb-4'>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-boxes"></i>
                  </div>
                  <h4 className='text-center pt-3'>Capacity Optimization</h4>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-shipping-fast"></i>
                  </div>
                  <h4 className='text-center pt-3'>North American Shipping</h4>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-globe-americas"></i>
                  </div>
                  <h4 className='text-center pt-3'>International Shipping</h4>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-warehouse-alt"></i>
                  </div>
                  <h4 className='text-center pt-3'>Warehousing and Distribution</h4>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-laptop"></i>
                  </div>
                  <h4 className='text-center pt-3'>Supply Chain Analysis/Design</h4>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-6 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-chart-network"></i>
                  </div>
                  <h4 className='text-center pt-3'>Total 3PL Management</h4>
                </InfoCard>
              </Link>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

