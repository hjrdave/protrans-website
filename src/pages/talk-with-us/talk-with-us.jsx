import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_talk-with-us.scss"

export default function Page({ location }) {
  return (
    <>
      <PageContainer title={"Talk With Us"} activePath={location}>
        <PageContent>
          <h1>Hi from the Talk With US page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
