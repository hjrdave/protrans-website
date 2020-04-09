import React from "react";
import { Button } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <PageContainer id='total-3pl-management' activePath={location}>
        <PageBanner
          title={'Versatile 3PL Management'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Our 3pl Management Simplified</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                1: Our Experts, Your Unique Plan
              </h3>
              <p>
                Our experts have handled countless supply chain situations and scenarios. They take pride in working with you to find the logistics solutions that are a perfect fit. Our teams execute 24/7 to ensure your best operational performance. Our resources include:</p>
              <p>Customer Support Groups | Route Planners | Carrier Teams | Procurement Group | Cost Analysis | Account Managers | Tracking Team | Implementation Team | Supply Chain Managers.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                2: Our Network, Your Advantage
              </h3>
              <p>Regionally placed teams allow ProTrans to consistently provide face to face customer support, as well as find cost-effective ways to operate your network.</p>
              <p>Our strategically located facilities can make your supply chain and operations more efficient and effective. We simplify the process, streamline, and keep your freight secure.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                3: Our Technology, Your Full Visibility
              </h3>
              <p>We give you the technological resources that you need to see everything that is happening in your supply chain. Our innovative technology has all been developed in-house and has the flexibility to be fit to you.</p>
              <p>We will manage your data and give you full visibility through real-time data reporting metrics, heat map visuals, and live shipment tracking. WE WANT YOU TO HAVE THE CONTROL TO MAKE STRATEGIC DECISIONS!</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                4: We Manage, You Focus
              </h3>
              <p>24hrs around the clock!</p>
              <p>From planning all the way to your customer satisfaction, we manage the workload. Today, the supply chain can be extremely complex due to multiple factors, but we manage everything allowing you to focus on your core competencies. </p>
              <p>We are flexible for everchanging requirement. We don't make you fit to us, we change to create a perfect fit for you.</p>
              <div className='d-flex justify-content-center'>
                <Button>Talk with Us</Button>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Part of Full 3PL Management is Continuous Improvement</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <p>We don't want to create a one time savings plan for you, we want to create something that adapts, evolves, and continually brings you savings and efficiency.</p>
              <p>ProTrans has a quality team dedicated to auditing and mitigating, while our engineers never stop creating new solutions.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Have Immediate / Expedited Premium Freight Needs?</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <p>ProTrans will work to get your freight when and where you need it as soon as possible. We offer these services:</p>

              <p>NEXT DAY AIR<br />
                ProTrans will work to get your freight when and where you need it. With priority boarding, experienced employees, and experienced service providers ProTrans will get you your shipment to you the next day.</p>

              <p>CHARTER<br />
                We have built and continue to build relationships with charter companies so that you can have faster responses, better pricing, and efficient pickups and clearances.</p>

              <p>HAND-CARRY<br />
                We are dedicated to providing you personal service and will hand deliver your shipment when necessary</p>

              <p>WHITE GLOVE<br />
                We know your shipment is precious cargo and we will deliver it as such with all precautions and delicate handling.</p>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

