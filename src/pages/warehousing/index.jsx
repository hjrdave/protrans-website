import React from "react";
import { Button } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <PageContainer id='warehousing-page' activePath={location}>
        <PageBanner
          title={'Warehousing'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Two Main Materials Management Functions</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                1: Warehousing
              </h3>
              <p>
                Our flexible warehousing solutions respond to your unique inventory and fulfilment needs. (A solutions for minimal space)
               </p>
              <h4 className='text-uppercase'>Customer Defined Inventory Management</h4>
              <p>In situations with drastically fluctuating inventory volumes, a shared solution delivers the greatest value. Not only will you be able to quickly respond to tracking needs and pay only for space used, you will also share the costs of overhead, personnel, and equipment.</p>
              <p>Alternatively, when inventory levels stabilize over time, dedicated management is the ideal option. We help you establish an inventory center in your facility, near plant sites or within one of our established facilities, then manage and operate the warehouse in an outsourced manner that meets your established business requirements.</p>
              <ul>
                <li>
                  Supplier<br />
                  Each supplier is only able to view its own inventory. Can also view/print reports directly from the website.
                </li>
                <li>
                  Consignee View<br />
                  Our system provides consignees access to inventory information for all locations. Can view/print reports directly from the website
                </li>
                <li>
                  EDI Capabilities<br />
                  Customer order entry can be uploaded to our Warehouse Management System (WMS) or can be made through EDI transaction sets.
                </li>
                <li>
                  Secure Access<br />
                  Real-time data at your fingertips via our website
                </li>
                <li>
                  Bar Code<br />
                  A bar coding system emphasizes accuracy and data integrity over manual processes
                </li>
              </ul>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                2: Distribution
              </h3>
              <p>With ProTrans distribution, your shipments will not be held waiting for the next departure. Consistent volume allows us to create cost reductions with a shared linehaul and zone skipping strategies. Due to the use of a shared line haul, there is a lower LTL length of haul to the final destination.</p>
              <div className='d-flex justify-content-center'>
                <i className="fad fa-warehouse" style={{ fontSize: '15rem', color: '#A80532' }}></i>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                Warehousing and Distribution Benefits:
              </h3>
              <ul>
                <li>Reduced on-site inventory</li>
                <li>Increased production space</li>
                <li>J.I.T. service from Supplier mall</li>
                <li>Reduced premium freight</li>
                <li>Increased supplier control</li>
                <li>Improved visibility of inventory</li>
              </ul>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

