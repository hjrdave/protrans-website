import React from "react";
import PageContainer from '../../components/page-container';
import PageContent from '../../components/page-content';
import SEO from "../../components/seo";
import "./_styles.scss";

export default function Page({ location }) {
  return (
    <>
      <SEO title="404: Not found" />
      <PageContainer activePath={location}>
        <PageContent>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </PageContent>
      </PageContainer>
    </>
  )
}
