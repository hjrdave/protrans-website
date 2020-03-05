import React, { useState, useEffect } from "react"
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import SearchForm from "../../components/search-form"
import SearchResults from "../../components/search-results"
import "./_search.scss"

export default function Page({ location }) {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

  useEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      })
    }
  }, [location.search])

  return (
    <>
      <PageContainer id={"search-page"} title={"Search"} activePath={location}>
        <PageContent>
          <h1>Search Site</h1>
          <SearchForm query={searchQuery} />
          <SearchResults query={searchQuery} results={results} />
        </PageContent>
      </PageContainer>
    </>
  )
}
