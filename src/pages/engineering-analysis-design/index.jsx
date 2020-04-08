import React from "react";
import SEO from '../../components/seo';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <SEO title="Engineering, Analysis, and Design" />
      <PageContainer id='engineering-analysis-design-page' activePath={location}>
        <PageBanner
          title={'Engineering, Analysis, and Design'}
          cta={'Talk to a Pro'}
        />
        <PageContent>

        </PageContent>
      </PageContainer>
    </>
  )
}

