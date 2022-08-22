import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLabelVisibility } from "../../hooks/useLabelVisibility";
import Input from "../Input";
import "./PasswordInput.css";

const PasswordInput = ({ value }) => {
  const { visible, setInvisible, setVisible } = useLabelVisibility();

  return (
    <div className="password-container">
      <Input type={visible ? "text" : "password"} value={value} disabled />
      {visible ? (
        <i onClick={() => setInvisible()}>
          <AiOutlineEye />
        </i>
      ) : (
        <i onClick={() => setVisible()}>
          <AiOutlineEyeInvisible />
        </i>
      )}
    </div>
  );
};

export default PasswordInput;
