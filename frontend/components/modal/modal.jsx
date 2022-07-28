import React from "react";
import LoginFormContainer from "../session/LoginFormContainer";
import SignupFormContainer from "../session/SignupFormContainer";
import { useModal } from "../../util/selectors";
import ThankYouContainer from "./thankyou";

const Modal = () => {
  const modal = useModal();

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
    case "thankyou":
      component = <ThankYouContainer />;
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
