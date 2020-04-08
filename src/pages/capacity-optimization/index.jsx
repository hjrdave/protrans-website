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

        </PageContent>
      </PageContainer>
    </>
  )
}

