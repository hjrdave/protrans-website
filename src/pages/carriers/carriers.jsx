import React from "react";
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import InfoCard from '../../components/info-card';
import "./_carriers.scss";
import PageForm from "../../widgets/page-form";

export default function Page({ location }) {


  return (
    <>
      <PageContainer activePath={location}>
        <PageBanner
          title={<>Want to Become a<br />Protrans Carrier Partner?</>}
          cta={'Get an Analysis'}
        />
        <PageContent>
          <div className='col-12 carrier-page-info-row pb-4'>
            <div className='row d-flex justify-content-center'>
              <div className='col-9'>
                <p className='text-center'>ProTrans wants to provide you with a dedicated and long-term solution. As your outsourced sales partner (we bring you the business), we will build together and provide a service beyond the standard. As with everything we do, we want a partnership that is the perfect fit. Let us learn more about you by filling out our carrier packet.</p>
                <p className='text-center font-weight-bold'>When filled out, submit to<br /><a href='mailto:Lyncprocurement@protrans.com'>Lyncprocurement@protrans.com</a></p>
                <div className='d-flex justify-content-center pt-3'>
                  <a href=''><Button><i className="fas fa-arrow-to-bottom pr-2"></i>Carrier Packet</Button></a>
                </div>
              </div>
            </div>
          </div>
          <h2 className='text-uppercase text-center mt-4'>What we will do together!</h2>
          <div className='solutions-page-card-container row d-flex pb-4'>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-file-contract"></i>
                  </div>
                  <h5 className='text-center pt-3'>Long Term Strategic Partners</h5>
                  <p className='text-center'>We will become strategic long-term partners that grow together to reach our goals</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-users"></i>
                  </div>
                  <h5 className='text-center pt-3'>Outsourced Sales Team</h5>
                  <p className='text-center'>We will be your outsourced sales team, bringing you volume and extended relationships</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-network-wired"></i>
                  </div>
                  <h5 className='text-center pt-3'>System Connection for Total Communication</h5>
                  <p className='text-center'>We will connect our systems to communicate with the highest efficiency so that all parties are on the same page</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-credit-card-front"></i>
                  </div>
                  <h5 className='text-center pt-3'>Simplified Payment Procedures</h5>
                  <p className='text-center'>We will organize and simplify the payment procedures so that we can both build trust</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-user-tie"></i>
                  </div>
                  <h5 className='text-center pt-3'>Dedicated Carrier Development Manager</h5>
                  <p className='text-center'>We will provide you dedicated Carrier development managers to assist your drivers</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-4 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex justify-content-center pt-3'>
                    <i className="fad fa-boxes"></i>
                  </div>
                  <h5 className='text-center pt-3'>Consistent Volume</h5>
                  <p className='text-center'>We will provide you with consistent volume so that you stay busy</p>
                </InfoCard>
              </Link>
            </div>
            <div className='col-12 col-lg-12 pt-4'>
              <Link to={'/'}>
                <InfoCard>
                  <div className='d-flex'>
                    <div className='d-flex justify-content-center pr-4'>
                      <i className="fad fa-user-tie p-4"></i>
                    </div>
                    <div>
                      <h3 className='pt-3'>Dedicated Carrier Development Managers</h3>
                      <p className=''>ProTrans Carrier Development Managers are dedicated to building a perfect fit relationship with you on the basis of consistent face-to-face communication, thorough understanding, and hard work. We want to make sure that things are done right and your needs and wants are understood.</p>
                    </div>
                  </div>
                </InfoCard>
              </Link>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

