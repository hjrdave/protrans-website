import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../../../../components/page-container"
import PageContent from "../../../../../components/page-content"
import "./_laredo-facility.scss"

function Page({ location }) {
  return (
    <>
      <PageContainer title={"Laredo Facility"} activePath={location}>
        <PageContent>
          <h1>Hi from the Laredo Facility page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default Page
