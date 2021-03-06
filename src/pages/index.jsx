import React from "react";
import { Link } from 'gatsby';
import PageContainer from "../components/page-container";
import PageContent from "../components/page-content";
import HomeSlider from "../widgets/home-slider";
import Card from 'react-bootstrap/Card';
import SEO from '../components/seo';
import PageForm from '../widgets/page-form';
import LineNav from '../components/line-nav';
import Sticky from 'react-stickynode';
import './_styles.scss';
import './_styles-dark.scss';

export default function Page({ location }) {
  return (
    <>
      <SEO
        title={'ProTrans 3PL - A Perfect Fit Solution For Your Logistics Needs'}
        homePage
      />
      <PageContainer id='home-page' activePath={location}>

        <HomeSlider />
        <PageContent>

          <div className='row d-flex justify-content-center'>
            <div className='homepage-floating-card pb-4 col-12'>
              <Card body>
                <div className='row d-flex justify-content-center '>
                  <div className='col-10 p-4 d-md-flex justify-content-md-between'>
                    <div className='text-center p-4 p-md-0'>
                      <i className="fas fa-truck-loading"></i>
                      <p className='pt-2'>Foo Trucking</p>
                    </div>
                    <div className='text-center p-4 p-md-0'>
                      <i className="fas fa-box-check"></i>
                      <p className='pt-2'>Foo Shipping</p>
                    </div>
                    <div className='text-center p-4 p-md-0'>
                      <i className="fas fa-phone-laptop"></i>
                      <p className='pt-2'>Foo Technology</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <Sticky bottomBoundary=".break-sticky">
            <div className='d-none d-lg-flex'>
              <LineNav
                navItems={[
                  'Consolidation',
                  'Optimization',
                  'Solutions',
                  'Logistics',
                  '3PL Manager',
                  'Warehousing',
                  'Client Focused',
                  'Sustainable',
                  'Improver',
                  'Global Logistics'
                ]}
              />
            </div>
          </Sticky>
          <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Who is Protrans?</h1>
          <div className='page-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div>

          {/**Homepage Content row */}
          <div id={'section-1'} className='row d-flex justify-content-center py-4 page-content-row '>
            <div className='col-6'>
              <h4 className='mb-3'>Pioneers in North American Consolidation</h4>
              <p className='mb-3 font-weight-bold'><span className='badge badge-primary'>30</span> North American <span className='text-primary'>Locations</span></p>
              <p className='mb-3 font-weight-bold'>Let our Network Work for You!</p>
              <p className='text-capitalize'>Consolidating freight shipments with consistent capacity.</p>
              <Link to={'/north-american-shipping'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-chart-network"></i>
            </div>
          </div>

          <hr />
          {/**Homepage Content row */}
          <div id={'section-2'} className='row d-flex flex-row-reverse justify-content-between py-4 page-content-row '>
            <div className='col-6'>
              <h4 className='mb-3'>Leader In Optimization</h4>
              <p className='mb-3 font-weight-bold'>Reduce Logistics with Full Optimizaiton!  </p>
              <p className='text-capitalize'>No more fighting for the best rates. We optimize your supply chain creating value adding benefits.</p>
              <Link to={'/capacity-optimization'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-boxes"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-3'} className='row d-flex justify-content-center py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>Strategic Planner and Solution Designer</h4>
              <p className='mb-3 font-weight-bold'>The more that is planned the more that is saved.</p>
              <p className='text-capitalize'>Over 95% of our customer networks are planned movements! We analyze, design, and plan your unique solution.</p>
              <Link to={'/engineering-analysis-design'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-clipboard-list-check"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-4'} className='row d-flex flex-row-reverse justify-content-between py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>Innovator in Logistics Technology</h4>
              <p className='mb-3 font-weight-bold'>Cradle to grave visibility and real time reporting!</p>
              <p className='text-capitalize'>See everything in your supply chain and have the data necessary to make strategic decisions.</p>
              <Link to={'/'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-laptop"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-5'} className='row d-flex justify-content-center py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>Versatile 3PL Manager</h4>
              <p className='mb-3 font-weight-bold'>Large yet nimble as the admin and operation in your supply chain.</p>
              <p className='text-capitalize'>We focus on your every need while managing all aspects of your supply chain. Leave the difficult things to us while you focus on core competencies.</p>
              <Link to={'/total-3pl-management'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-traffic-light"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-6'} className='row d-flex flex-row-reverse justify-content-between py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>High Velocity Warehouser</h4>
              <p className='mb-3 font-weight-bold'>Warehousing and cross-docking fit to your capacity</p>
              <p className='text-capitalize'>Our state of the art facilities surround your materials with cleaniness, organization, efficiency, and new sustainability standards.</p>
              <Link to={'/warehousing'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-warehouse-alt"></i>
            </div>
          </div>
          <hr />

          {/**Homepage Content row */}
          <div id={'section-7'} className='row d-flex justify-content-center py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>Client Focused Builder</h4>
              <p className='mb-3 font-weight-bold'>Strategic descisions are made based on your needs.</p>
              <p className='text-capitalize'>We have changed in various ways to fit the needs of our customers. With you, things will be no different!</p>
              <Link to={'/'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-user-friends"></i>
            </div>
          </div>
          <hr />
          <div className='break-sticky'></div>
          {/**Homepage Content row */}
          <div id={'section-8'} className='row d-flex flex-row-reverse justify-content-between py-4 page-content-row '>
            <div className='col-6'>
              <h4 className='mb-3'>Sustainable Supply Chain Initiator</h4>
              <p className='mb-3 font-weight-bold'>We help reduce your carbon footprint.</p>
              <p className='text-capitalize'>Less trucks equals less carbon. Our efficient practices strengthen your supply chain's sutainability.</p>
              <Link to={'/'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-leaf"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-9'} className='row d-flex justify-content-center py-4 page-content-row '>
            <div className='col-6'>
              <h4 className='mb-3'>Continuous Improver</h4>
              <p className='mb-3 font-weight-bold'>We don't stop looking for efficiency and savings.</p>
              <p className='text-capitalize'>Our solutions aren't one and done. We continually look for innovative ways to save you money and operate efficiently!</p>
              <Link to={'/'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
          <hr />
          {/**Homepage Content row */}
          <div id={'section-10'} className='row d-flex flex-row-reverse justify-content-between py-4 page-content-row'>
            <div className='col-6'>
              <h4 className='mb-3'>Global Logistics Manager</h4>
              <p className='mb-3 font-weight-bold'>Our processes and savings are available globally.</p>
              <p className='text-capitalize'>International shipping is nothing new to us. We have an established global footprint that uses our NA consolidation model to create savings for international shippers.</p>
              <Link to={'/international-shipping'}><button className='btn-primary'>Learn More</button></Link>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <i className="fas fa-globe-americas"></i>
            </div>
          </div>

        </PageContent>
        <PageForm />
      </PageContainer>
    </>
  )
}
