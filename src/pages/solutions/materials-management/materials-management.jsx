import React from "react"
import { Link } from "gatsby"
import PageContainer from "../../../components/page-container"
import PageContent from "../../../components/page-content"
import "./_materials-management.scss"

export default function Page({ location }) {
  return (
    <>
      <PageContainer activePath={location}>
        <PageContent>
          <h1>Hi from the Materials Management page</h1>
          <p>Welcome to foo page</p>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageContainer>
    </>
  )
}
