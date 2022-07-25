import React from "react";
import LoginFormContainer from "../session/LoginFormContainer";
import SignupFormContainer from "../session/SignupFormContainer";
import { useSelector } from "react-redux";

const Modal = () => {
  const modal = useSelector((state) => state.ui.modal);

  if (!modal) return null;

  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
