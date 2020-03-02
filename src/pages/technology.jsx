import React from "react"
import { Link } from "gatsby"
import PageContainer from "../components/page-container"
import PageContent from "../components/page-content"

function TechnologyPage() {
  return (
    <>
      <PageContainer title={"Technology"}>
        <PageContent>
          <h1>Hi from the Technology page</h1>
          <p>Welcome to Foo Lorum Page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default TechnologyPage
