import React from "react";
import { Link } from "gatsby";
import { Form } from 'react-bootstrap';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import FloatingBtn from "../../components/floating-btn";
import "./_solutions.scss";
import { updateStore, useTreble } from "treble-gsm";

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
      <FloatingBtn icon={<i className="fas fa-user-headset"></i>} />
      <PageContainer activePath={location}>
        <PageContent>
        </PageContent>
      </PageContainer>
    </>
  )
}
