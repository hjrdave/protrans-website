import React from "react";
import { Link } from 'gatsby';
import PageBanner from '../../components/page-banner';
import Sticky from 'react-stickynode';
import LineNav from '../../components/line-nav';
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_technology.scss"

export default function Page({ location }) {
  return (
    <>
      <PageContainer activePath={location}>

        <PageBanner
          title={<>Protrans Proprietary<br />Logistics Technology</>}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <Sticky bottomBoundary=".break-sticky">
            <div className='d-none d-lg-flex'>
              <LineNav
                navItems={[
                  'Optimiz (TMS)',
                  'Smartmetrics (BI Tool)',
                  'Heat Map Visualation',
                  'Warehouse Management',
                  'Proprietary Software Benefits'
                ]}
              />
            </div>
          </Sticky>
          <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Providing Full Cradle<br />to Grave Visibility</h1>
          <div className='homepage-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div>

          {/**Page Content row */}
          <div id={'section-1'} className='row d-flex justify-content-center pt-4 homepage-content-row '>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fas fa-laptop"></i>
            </div>
            <div className='col-8 pt-4'>
              <h4 className='mb-3'>Optimiz (TMS)</h4>
              <p>Optimiz, our advanced Transportation Management System (TMS), is a web based proprietary logistics management software that not only ensures your materials move flawlessly from one point to the next, but also provides the control and visibility you demand to effectively manage your supply chain. </p>
              {/* <Link to={'/'}><button className='btn-primary'>Learn More</button></Link> */}
            </div>
          </div>
          <hr />
          {/**Page Content row */}
          <div id={'section-2'} className='row d-flex justify-content-center pt-4 homepage-content-row '>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fas fa-laptop"></i>
            </div>
            <div className='col-8 pt-4'>
              <h4 className='mb-3'>Smartmetrics (BI Tool)</h4>
              <p>One system, one software, one place. Manage orders real-time with complete visibility throughout the supply chain process. </p>
              <p>MOBILE APP: Track and Trace is available through www.protrans.com on any smart phone, tablet or computer that has internet access. The screen is responsive to the size of the platform (device) it is viewed on.</p>
              <p>The key isn’t just information… It is also how it is used. With ProTrans, all your data is available in dashboard format or sent to you in any output format you prefer in a scheduled manner.</p>
              <h5>Daily In-Transit Reports</h5>
              <p>Automated *xls and *pdf reports are delivered to you every single day. Main fields included in our reports are:</p>

              <p>Supplier | Status | Pickup Data and Time | Transportation Mode | Weight | PO Numbers | Pallets | Estimated Time of Arrival | Customer & Bill To Informaton | Protrans Load ID</p>
              {/* <Link to={'/'}><button className='btn-primary'>Learn More</button></Link> */}
            </div>
          </div>
          <hr />
          {/**Page Content row */}
          <div id={'section-3'} className='row d-flex justify-content-center pt-4 homepage-content-row '>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fas fa-laptop"></i>
            </div>
            <div className='col-8 pt-4'>
              <h4 className='mb-3'>Heat Map Visualization</h4>
              <p>Web-based Google Map that Interfaces with Protrans TMS</p>
              <p>A graphic interface showing the last known location of our customers’ loads and their corresponding shipment on a map of North America; based on the zip code of the last update given by the carrier. This visibility tool allows you to see your supply chain in real-time at the part level! </p>
              <p>Green: The load is on time.</p>
              <p>Yellow: The load is behind schedule but will not dramatically affect the customer's operations.</p>
              <p>Green/Yellow/Red: The load has multiple shipments with varying statuses.</p>
              {/* <Link to={'/'}><button className='btn-primary'>Learn More</button></Link> */}
            </div>
          </div>
          <hr />
          {/**Page Content row */}
          <div id={'section-4'} className='row d-flex justify-content-center pt-4 homepage-content-row '>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fas fa-laptop"></i>
            </div>
            <div className='col-8 pt-4'>
              <h4 className='mb-3'>Customer Defined Inventory Management</h4>
              <p>the storage of raw material in either a vendor-owned or consignee-owned scenario brings control to an environment where chaos can actively reight. ProTrans' enables the following:</p>
              <p>
                Improved visibility of inventory<br />
                Supplier Mall<br />
                Improved forecasting of future demand<br />
                Vendor management<br />
                Secured and  different views for all parties<br />
                EDI capabilities-based Google Map that Interfaces with Protrans TMS</p>
              {/* <Link to={'/'}><button className='btn-primary'>Learn More</button></Link> */}
            </div>
          </div>
          <hr />
          {/**Page Content row */}
          <div id={'section-5'} className='row d-flex justify-content-center pt-4 homepage-content-row '>
            {/* <div className='col-8 d-flex justify-content-center'>
              <i className="fas fa-laptop"></i>
            </div> */}
            <div className='col-8 pt-4'>
              <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">Our Proprietary Softare Benefits</h1>
              <p>Cutting edge technology<br />
                Incredibly fast performance speed<br />
                Adaptive to mobile devices<br />
                All KPI's in one dashboard<br />
                Actionable Data visualization<br />
                Proprietary software that is adaptable to your needs<br />
                real-time data visibility<br />
                Track and trace</p>

              {/* <Link to={'/'}><button className='btn-primary'>Learn More</button></Link> */}
            </div>
          </div>
          {/* <div className='break-sticky'></div> */}
        </PageContent>
      </PageContainer>
    </>
  )
}
