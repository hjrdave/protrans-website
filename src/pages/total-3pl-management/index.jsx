import React from "react";
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import './_styles.scss';

export default function Page({ location }) {


  return (
    <>
      <PageContainer id='total-3pl-management' activePath={location}>
        <PageBanner
          title={'Total 3PL Management'}
          cta={'Talk to a Pro'}
        />
        <PageContent>

        </PageContent>
      </PageContainer>
    </>
  )
}

