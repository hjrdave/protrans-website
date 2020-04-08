import React from "react";
import SEO from '../../components/seo';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import CareerManager from '../../widgets/career-manager';
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title={'Careers'} />
      <PageContainer id='careers-page' activePath={location}>
        <PageBanner
          title={'Protrans Careers'}
        />
        <PageContent>
          <CareerManager />
          <h1 className="mt-4 pt-4 pb-3 text-center text-uppercase">More About Working<br />at Protrans</h1>
          <div className='page-caret-down text-center pb-4'><i className="fas fa-angle-down"></i></div>
          <h2>Working at Protrans</h2>
          <p>At ProTrans, we have a strong commitment to quality and continuous improvement, and that’s why we have internal programs that empower our people to improve best practices for themselves, their team, the company, and our customers.</p>
          <p>In addition, we embrace our corporate values – beliefs, principles, and standards that do not change over time. These values are the resources we draw on when asked to make decisions, forming the groundwork for our ethical behavior at work and in our community.. </p>
          <h2>Protrans, Mission, Values, and Culture</h2>
          <p>We believe in empowering our experts to create strategic solutions and develop leading-edge technology that strengthens our customers and sets the standard for service in the logistics industry</p>
        </PageContent>
      </PageContainer>
    </>
  )
}

