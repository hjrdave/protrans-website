/*
  main-layout.jsx
  Main default layout for website
*/

import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingBtn from '../../components/floating-btn';
import { useTreble } from 'treble-gsm';
import '../../styles';

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
