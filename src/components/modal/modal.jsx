/*
  modal.jsx
  Generic modal component
*/
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';


function ModalBasic({
  show,
  onHide,
  children,
  title,
  className
}) {

  let modalID = `modal-id-${uniqid()}`;
  return (
    <>
      <div className={className}>
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby={modalID}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id={modalID}>
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ModalBasic;