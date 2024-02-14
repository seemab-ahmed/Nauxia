import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Backdrop = ({ children, onClose }) => {
  const [backdropEl, setBackdropEl] = useState(null);

  useEffect(() => {
    setBackdropEl(document.getElementById("backdrop"));
  }, []);

  if (!backdropEl) return null;

  const handleBackdropClicked = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed flex justify-center items-center z-50 bg-black bg-opacity-60 w-screen h-screen bg-blend-saturation backdrop-blur-lg"
      onClick={handleBackdropClicked}
    >
      {children}
    </div>,
    backdropEl,
  );
};
