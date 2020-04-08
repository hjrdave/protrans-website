import React from "react";
import SEO from '../../components/seo';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title="International Shipping" />
      <PageContainer id='international-shipping-page' activePath={location}>
        <PageBanner
          title={'International Shipping'}
          cta={'Talk to a Pro'}
        />
        <PageContent>

        </PageContent>
      </PageContainer>
    </>
  )
}

