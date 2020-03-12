import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_about-us.scss"

export default function AboutUsPage({ location }) {
  return (
    <>
      <PageContainer title={"About Us"} activePath={location}>
        <PageContent>
          <h1>Hi from the About Us page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}