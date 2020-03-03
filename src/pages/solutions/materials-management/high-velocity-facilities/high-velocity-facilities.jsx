import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../../../components/page-container"
import PageContent from "../../../../components/page-content"
import "./_high-velocity-facilities.scss"

export default function Page() {
  return (
    <>
      <PageContainer title={"High Velocity Facilities"}>
        <PageContent>
          <h1>Hi from the High Velocity Facilities page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
