import React from "react";
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <PageContainer id='north-american-shipping-page' activePath={location}>
        <PageBanner
          title={'North American Shipping'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Pioneer in North American Consolidation</h2>
              <p className='text-center'>An idea turned into a reality when our founder, Craig Roeder, discovered a way to help companies by taking partial truckloads of manufacturer's raw materials, putting them into one trailer, and only charging the customer for their portion of the linehaul. This revolutionary idea set the stage for a consolidation network that has no rival.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-globe-americas"></i>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">3 Phase Consolidation Process</h2>
              <p className='text-center'>After analyzing your supply chain and creating a logistics plan that provides the optimal solution, LTL shipments are picked up at the supplier and taken to the nearest cross-docking facility. These shipments are unloaded onto the facility dock.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                Phase 1
              </h3>
              <p>After analyzing your supply chain and creating a logistics plan that provides the optimal solution, LTL shipments are picked up at the supplier and taken to the nearest cross-docking facility. These shipments are unloaded onto the facility dock.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-warehouse-alt"></i>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                Phase 2
              </h3>
              <p>Consolidation is executed as multiple clients are loaded onto the same trailer. Each customer pays for the portion of the trailer that they use (part load pricing). With multiple strategic locations, a large carrier network, and expert capacity management, trucks are utilized to their highest capacity, which lowers the cost related to your materials.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-warehouse-alt"></i>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                Phase 3
              </h3>
              <p>The consolidated trailer carries the freight across the country to a location central to the point of consumption or border crossing.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-warehouse-alt"></i>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Promex Direct Cross Border Processing</h2>
              <p className='text-center'>Our specialized ProMex Direct service allows your freight to be moved into Mexico without unloading, additional handling or validation along the border. Freight is verified at the first point of consolidation while customs brokerage paperwork is filed while the truck is in transit. This solution allows for virtually non-stop delivery and aligns with our goals of shipping your goods quickly and eliminating all potentials for a delay.</p>
              <p className='text-center text-uppercase'>Validation and verification of part-level detail ahead of time, streamlining moving your freight across the border.</p>
              <h3 className="mt-4 pt-4 pb-3 text-center text-uppercase">In-House Brokers</h3>
              <p className='text-center'>Materials arrive at our transportation dock, then unloaded and distributed to the specific customer assigned border processing area avoiding local deliveries and allowing the goods to be processed under our roof. Each of our customers has their Mexico customs broker service within our facilities where their customs broker develops documents for imports.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">To the last mile distribution services</h2>
              <p className='text-center'>LEARN MORE about our warehousing and distribution services</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-warehouse-alt"></i>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

