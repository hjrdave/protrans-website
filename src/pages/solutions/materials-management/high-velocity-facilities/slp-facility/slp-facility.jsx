import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../../../../components/page-container"
import PageContent from "../../../../../components/page-content"
import "./_slp-facility.scss"

function Page() {
  return (
    <>
      <PageContainer title={"SLP Facility"}>
        <PageContent>
          <h1>Hi from the SLP Facility page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default Page
