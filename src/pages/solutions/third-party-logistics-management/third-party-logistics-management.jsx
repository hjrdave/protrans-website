import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../../components/page-container"
import PageContent from "../../../components/page-content"
import "./_third-party-logistics-management.scss"

export default function Page() {
  return (
    <>
      <PageContainer title={"Third Party Logistics Management"}>
        <PageContent>
          <h1>Hi from the 3PL page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
