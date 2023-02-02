import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// will pass children through else if no children, will not render
const Modal = ({ children }) => {
  const elRef = useRef(undefined);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // this works to remove modal - sort of like componentWillUnmount()
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
