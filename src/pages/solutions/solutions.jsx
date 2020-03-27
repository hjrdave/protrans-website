import React from "react"
import { Link } from "gatsby"
import { Form } from 'react-bootstrap';
import PageContainer from "../../components/page-container"
import PageContent from "../../components/page-content"
import "./_solutions.scss"
import { updateStore, useTreble } from "treble-gsm"

export default function Page({ location }) {
  const [{ darkMode }, dispatch] = useTreble();

  const handleDarkMode = () => {
    if (darkMode) {
      updateStore('darkMode', false, dispatch);
    } else {
      updateStore('darkMode', true, dispatch);
    }
  }

  return (
    <>
      <PageContainer activePath={location}>
        <PageContent>
          <h1>Hi from the Solutions page</h1>
          <p>{(darkMode) ? 'true' : 'false'}</p>
          <button onClick={() => handleDarkMode()}>Click</button>

        </PageContent>
      </PageContainer>
    </>
  )
}
