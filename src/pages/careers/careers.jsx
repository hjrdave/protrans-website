import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_careers.scss"

export default function CareersPage({ location }) {
  return (
    <>
      <PageContainer title={"Careers"} activePath={location}>
        <PageContent>
          <h1>Hi from the Careers page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
