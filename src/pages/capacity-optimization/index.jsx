import React from "react";
import SEO from '../../components/seo';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title="Capacity Optimization" />
      <PageContainer id='capacity-optimization-page' activePath={location}>
        <PageBanner
          title={'Capacity Optimization'}
          cta={'Talk to a Pro'}
        />
        <PageContent>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">How We Optimize Trailers To Save You Money</h2>
              <p className='text-center'>An idea turned into a reality when our founder, Craig Roeder, discovered a way to help companies by taking partial truckloads of manufacturer's raw materials, putting them into one trailer, and only charging the customer for their portion of the linehaul. This revolutionary idea set the stage for a consolidation network that has no rival.</p>
            </div>
          </div>

          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                1: Before Optmization
              </h3>
              <p>Before optimization occurs you are left shipping multiple LTL shipments long distances. You have to compete for the best rates and are overall paying too much money for what you need to do.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-truck"></i>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-8'>
              <h3 className="mt-4 pt-4 pb-3 text-uppercase">
                2: Optimization (Tetris Modeling)
              </h3>
              <p>Optimization tools, such as logistics posts, allow ProTrans to fully utilize trailer capacity. Fully utilized loads lowers the cost of the shared network per customer.</p>
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
                3: Optmization Result
              </h3>
              <p>Optimizing your shipments utilizes less trucks (less CO2 emissions), significantly decreases damages, and SAVES YOU MONEY! The amazing thing about optimization is, you may be paying a higher rate for this one truck below, but overall, you are saving $1,650 on that entire shipment. </p>
            </div>
          </div>
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8 d-flex justify-content-center'>
              <i className="fad fa-warehouse"></i>
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
          <div className='row d-flex justify-content-center pt-4'>
            <div className='col-8'>
              <h2 className="mt-4 pt-4 pb-3 text-center text-uppercase">Tetris Modeling Saving You Time and Money</h2>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

