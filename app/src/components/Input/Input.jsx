import React, { useState } from "react";
import { InputStyled, InputWrapperStyled } from "./style";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <InputWrapperStyled>
      <h3>Input</h3>
      <InputStyled
        placeholder="Name"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapperStyled>
  );
};

export default Input;
