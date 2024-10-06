import React from 'react';
import './Modal.css'; // Assuming you will create a CSS file for styling

const Modal = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
