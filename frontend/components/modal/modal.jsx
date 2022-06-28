import React from "react";
import LoginFormContainer from "../session/LoginFormContainer";
import SignupFormContainer from "../session/SignupFormContainer";
// import LocationContainer from "../searchmod/location_container";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    // case "popup":
    //   component = <PopupContainer />;
    //   break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
