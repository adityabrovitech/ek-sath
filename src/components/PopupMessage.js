import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopupMessage({ firstName,onCloseCallback }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onCloseCallback();
  };

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Body>
       <p>Dear {firstName}</p>
        <p>Thank you for your interest and effort in supporting us.</p>
        <p>We are currently working to bring you a more efficient and delightful website experience. Please bookmark this site and visit us again.</p>
        <p>Till then, we are reaching out to users via their given numbers and emails for donations. We shall write to you soon and connect with you.</p>
        <p>Thank you, once again.</p>
        <p>Warm regards,<br/>The Ek Saath Team</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupMessage;
