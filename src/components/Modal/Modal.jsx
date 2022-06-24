import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div
        className={`child-container`}
      >
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};
