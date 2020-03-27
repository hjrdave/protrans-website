/*
  main-layout.jsx
  Main default layout for website
*/

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTreble } from 'treble-gsm';
import '../../styles';

export default function MainLayout({ children }) {

  const [{ darkMode }] = useTreble();
  return (
    <>
      <div className={(darkMode) ? 'dark-mode' : ''}>
        <Header siteTitle={"Protrans"} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
