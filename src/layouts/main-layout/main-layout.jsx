/*
  main-layout.jsx
  Main default layout for website
*/

import React, { useState } from "react";
import '../../styles';
import Header from "../../components/header";
import Footer from "../../components/footer";
import FloatingBtn from '../../components/floating-btn';
import Modal from '../../components/modal';
import SubscribeForm from '../../components/forms/subscribe-form';
import { useTreble } from 'treble-gsm';


export default function MainLayout({ children }) {

  const [{ darkMode }] = useTreble();
  const [contactFloatingIconModal, setContactFloatingIconModal] = useState(false);

  return (
    <>
      <Modal
        className={'contact-floating-btn-modal'}
        show={contactFloatingIconModal}
        onHide={() => setContactFloatingIconModal(false)}
        title={'Contact Us'}>
        <SubscribeForm />
      </Modal>
      <div className={(darkMode) ? 'dark-mode' : ''}>
        <Header siteTitle={"Protrans"} />
        <FloatingBtn icon={<i className="fas fa-user-headset"></i>} onClickHandler={() => setContactFloatingIconModal(true)} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
