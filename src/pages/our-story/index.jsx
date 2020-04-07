import React from "react";
import { Link } from 'gatsby';
import Sticky from 'react-stickynode';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import LineNav from '../../components/line-nav';
import InfoCard from '../../components/info-card';
import { Button } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <PageContainer id='our-story-page' activePath={location}>
        <PageBanner
          title={<>About Protrans</>}
          cta={'Im A Carrier'}
        />

        <PageContent>
          <Sticky bottomBoundary=".break-sticky">
            <div className='d-none d-lg-flex'>
              <LineNav
                navItems={[
                  'Our Story',
                  'Mission and Values',
                  'Executive Leadership',
                  'Partner with Us'
                ]}
              />
            </div>
          </Sticky>
          <div id={'section-1'} className='col-12 our-story-page-info-row'>
            <div className='row d-flex justify-content-center'>
              <div className='col-8'>
                <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Our Growth Lead by<br />Our Customers</h1>
                <p className='text-center'>We have changed in various ways to fit the needs of our customers. We do all that we can to become a perfect fit to our customers needs.</p>
                {/* <div className='page-caret-down text-center'><i className="fas fa-angle-down"></i></div> */}
              </div>
            </div>
          </div>
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="1993"
              style={{ color: '#e86971' }}
            >
              <h3 className='mb-2'>Protrans Founded</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="1997"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              style={{ color: '#61b8ff' }}
              bodyContainerStyle={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className='mb-2' style={{ color: '#990000' }}>Original ProTrack TMS</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="1999"
              dateInnerStyle={{ background: '#76bb7f', color: '#fff' }}
              style={{ color: '#76bb7f' }}
            >
              <h3 className='mb-2'>Protrans De Mexico</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <h3 className='mb-2'>ISO Certification</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="2002"
              style={{ color: '#76bb7f' }}
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3 className='mb-2'>Opened El Paso Multi-Client Facility</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="005"
              dateText="2004"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              style={{ color: '#61b8ff' }}
            >
              <h3 className='mb-2'>Opened Laredo Multi-Client Facility</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="006"
              dateText="2005"
              style={{ color: '#e86971' }}
            >
              <h3 className='mb-2'>International Integrated Services (IIS)</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="007"
              dateText="2006"
              style={{ color: '#e86971' }}
            >
              <h3 className='mb-2'>3PL Services</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="008"
              dateText="2007"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3 className='mb-2'>C-TPAT Certification</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="009"
              dateText="2008"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              style={{ color: '#61b8ff' }}
            >
              <h3 className='mb-2'>ProMex Direct</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="010"
              dateText="2010"
              dateInnerStyle={{ background: '#76bb7f' }}
              style={{ color: '#76bb7f' }}
            >
              <h3 className='mb-2'>SmartWay Certification</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="011"
              dateText="2012"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              style={{ color: '#61b8ff' }}
            >
              <h3 className='mb-2'>Optimiz TMS Implemented</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="012"
              dateText="2015"
              style={{ color: '#e86971' }}
            >
              <h3 className='mb-2'>Opened Laredo, TX Velocity Center</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="013"
              dateText="2017"
              style={{ color: '#e86971' }}
            >
              <h3 className='mb-2'>Aquired Toc Logistics International Inc. and Millennial Transportation</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
              <h3 className='mb-2'>Opened Greer, SC Velocity Center</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
            <TimelineItem
              key="014"
              dateText="2018"
              dateInnerStyle={{ background: '#76bb7f' }}
              style={{ color: '#76bb7f' }}
            >
              <h3 className='mb-2'>Opening San Luis Potosi, MX Velocity Center</h3>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est.</p>
            </TimelineItem>
          </Timeline>
          <div id={'section-2'} className='col-12 our-story-page-info-row mb-3'>
            <div className='row d-flex justify-content-center'>
              <div className='col-8'>
                <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Protrans Mission, Values, and Culture</h1>
                <p className='text-center'>We believe in empowering our experts to create strategic solutions and develop leading-edge technology that strengthens our customers and sets the standard for service in the logistics industry</p>
                {/* <div className='page-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div> */}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <i class="fas fa-question-circle" style={{ fontSize: '10rem' }}></i>
          </div>
          <div id={'section-3'} className='col-12 our-story-page-info-row mb-3'>
            <div className='row d-flex justify-content-center'>
              <div className='col-8'>
                <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Executive Leadership</h1>
                {/* <div className='page-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div> */}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Gary Cardenas | CEO</h3>
                  <p>Gary began his career with ProTrans International in 1996 as a Business Development Mgr., quickly becoming Director Of Sales and then Vice President of Sales/Marketing before leaving in 2009/2010 to become Owner and President of TOC Logistics International, Inc. In 2017, he returned to serve as President of ProTrans, integrating TOC into the ProTrans Holdings operations. In 2019, ProTrans named Gary CEO.</p>

                  <p>Gary is an accomplished supply chain solutions professional with over thirty years of increasing responsibility in the International/Domestic logistics industry. He has a strong background in operating environments and is proficient in establishing continuous improvement processes and quality-based problem-solving. He also has a keen understanding of, and can effectively penetrate internal and external business practices and industrial processes to maximize revenues, improve operations, and strengthen business relationships.</p>

                  <p>Gary received his education in International Marketing from William Rainey Harper College and National-Louis University.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Lisa Doerner | CFO</h3>
                  <p className=''>Lisa leads all accounting and analysis activities, along with strategic planning. She first joined ProTrans in 1995 through the accounting department, worked in the analysis department from 1999 to 2004, and later served as Manager of Analysis from 2004 to 2009. These many years of experience gave her deep insight into the inner-workings of a company she would soon lead.</p>
                  <p>A graduate of Indiana University, Lisa has a degree in accounting.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Shawn Masters | CCO</h3>
                  <p className=''>Shawn is responsible for the commercial strategy and development of the organization, the customer interface, and product and service expansion. He leads all activities related to marketing, account management, supply chain management and transportation management operations. Since joining ProTrans in 2006, Shawn has previously held the title of Vice President of Logistics and is responsible for the startup of the company’s third-party logistics service offering and Vice President of Operations while leading all consolidation and transportation operations activities.</p>

                  <p>Before joining ProTrans, he was Director of Customer Logistics at Ryder Logistics, involved in many account startups including top-tier one and OEM manufacturing accounts. A 1993 graduate of Central Michigan University, Shawn holds a Bachelor of Science degree in logistics management and marketing.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>John Woods | Executive Vice President of Sales</h3>
                  <p className=''>John joined ProTrans in 1999 as a Sales Consultant in California. He later served roles as Regional Director of Border Sales in Texas and General Director of ProTrans de Mexico in Queretaro, Mexico, overseeing Sales, Operations and Administration. He currently serves as EVP of Sales, a position he has held since 2009.</p>

                  <p>Prior to joining ProTrans, John held a variety of Sales and Operations positions in the international ocean shipping division of Consolidated Freightways in Seattle and Los Angeles. He holds a Bachelor’s degree from Texas Christian University.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Chris Blunk | COO</h3>
                  <p className=''>Chris is responsible for all operational activities including Consolidation Operations in the United States and Mexico, Transportation Management and Freight Management; assuring these functions are aligned to meet the objectives of ProTrans and its customers.</p>

                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Allen Phelps | CIO</h3>
                  <p className=''>Allen leads all strategic development in bringing technology and business solutions together — all in an effort to make ProTrans a leader in providing innovative and consistent results. Prior to joining ProTrans, he served as IT Director for Celadon Trucking.</p>

                  <p>A graduate of Ivy Technical College of Indiana, Allen holds an Associates degree in computer science and technology.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='col-12 col-lg-12 pt-4 pb-4'>
            <InfoCard>
              <div className='d-flex'>
                <div className='d-flex justify-content-center pr-4'>
                  <i className="fad fa-user-tie p-4" style={{ fontSize: '8rem' }}></i>
                </div>
                <div>
                  <h3 className='pt-3'>Ratnam Philip | CAO</h3>
                  <p className=''>Ratnam serves as ProTrans’ Chief Analytics Officer. In this role, he brings strong data science background empowering both people and companies with strategic data. Ratnam has over 30 years’ experience in supply chain, logistics, transportation, and customs compliance. He has worked for Fortune 500 companies and managed global organizations.</p>

                  <p>Ratnam holds an MBA from Andhra University, India.</p>
                </div>
              </div>
            </InfoCard>
          </div>
          <div className='break-sticky'></div>
          <div id={'section-4'} className='col-12 our-story-page-info-row mb-4'>
            <div className='row d-flex justify-content-center'>
              <div className='col-8 text-center'>
                <h4 className="mt-4 pt-4 pb-3 text-center text-uppercase">Interested in Partnering with Us?</h4>
                {/* <div className='page-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div> */}
                <Link to={'/'} className='mx-2'><Button>Im a Carrier</Button></Link>
                <Link to={'/'} className='mx-2'><Button>I Need a 3PL</Button></Link>
                <Link to={'/'} className='mx-2'><Button>I Need a Job!</Button></Link>
              </div>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

