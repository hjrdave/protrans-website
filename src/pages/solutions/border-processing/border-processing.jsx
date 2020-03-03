import React from "react";
import { Link } from "gatsby";
import PageContainer from "../../../components/page-container";
import PageContent from "../../../components/page-content";
import './_border-processing.scss';

export default function Page() {

  return (
    <>
      <PageContainer title={"Border Processing Page"}>
        <PageContent>
          <h1>Hi from the Border Processing Page page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
