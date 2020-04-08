import React from "react";
import { Link } from "gatsby";
import SEO from '../../components/seo';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import "./_styles.scss";

export default function Page({ location }) {
  return (
    <>
      <SEO title="Customer Support" />
      <PageContainer id='customer-support-page' activePath={location}>
        <PageContent>
          <h1>Hi from the Customer Support page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
