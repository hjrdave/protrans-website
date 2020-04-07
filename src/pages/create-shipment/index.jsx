import React from "react";
import { Link } from "gatsby";
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import "./_styles.scss";

export default function Page({ location }) {
  return (
    <>
      <PageContainer activePath={location}>
        <PageContent>
          <h1>Hi from the Create Shipment page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
