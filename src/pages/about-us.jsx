import React from "react"
import { Link } from "gatsby"
import PageContainer from "../components/page-container"
import PageContent from "../components/page-content"

function AboutUsPage() {
  return (
    <>
      <PageContainer title={"About Us"}>
        <PageContent>
          <h1>Hi from the About Us page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default AboutUsPage