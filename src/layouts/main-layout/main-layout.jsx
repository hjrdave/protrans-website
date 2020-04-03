/*
  main-layout.jsx
  Main default layout for website
*/

import React from "react";
import '../../styles';
import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingBtn from '../../components/floating-btn';
import { useTreble } from 'treble-gsm';


export default function MainLayout({ children }) {

  const [{ darkMode }] = useTreble();

  return (
    <>
      <div className={(darkMode) ? 'dark-mode' : ''}>
        <Header siteTitle={"Protrans"} />
        <FloatingBtn icon={<i className="fas fa-user-headset"></i>} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
