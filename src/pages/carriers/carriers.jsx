import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_carriers.scss"

export default function Page({ location }) {
  return (
    <>
      <PageContainer title={"Carriers"} activePath={location}>
        <PageContent>
          <h1>Hi from the Carriers page</h1>
          <p>Welcome to page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
