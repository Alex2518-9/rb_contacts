import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "../Input";
import "./PasswordInput.css";

const PasswordInput = ({ value }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-container">
      <Input type={visible ? "text" : "password"} value={value} disabled />
      <i onClick={() => setVisible(!visible)}>
        {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </i>
    </div>
  );
};

export default PasswordInput;
