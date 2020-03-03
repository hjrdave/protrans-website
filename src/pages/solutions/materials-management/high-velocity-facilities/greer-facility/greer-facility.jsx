import React from "react";
import { Link } from "gatsby";
import PageContainer from "../../../../../components/page-container";
import PageContent from "../../../../../components/page-content";
import './_greer-facility.scss';

export default function Page() {

  return (
    <>
      <PageContainer title={"Greer Facility"}>
        <PageContent>
          <h1>Hi from the Greer Facility page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
