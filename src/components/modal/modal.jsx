/*
  modal.jsx
  Generic modal component
*/
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import './_modal-dark.scss';
import { useTreble } from 'treble-gsm';


function ModalBasic({
  show,
  onHide,
  children,
  title,
  className
}) {

  let modalID = `modal-id-${uniqid()}`;
  const [{ darkMode }] = useTreble();
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby={modalID}
        centered
      >
        <div className={`${className} ${(darkMode) ? 'dark-mode' : ''}`}>
          <Modal.Header closeButton>
            <Modal.Title id={modalID}>
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </div>

      </Modal>
    </>
  )
}

export default ModalBasic;