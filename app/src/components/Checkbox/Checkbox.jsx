import React, { useState } from "react";
import { CheckboxStyled } from "./style";

const Checkbox = () => {
  const [addExtraCheese, setAddExtraCheese] = useState(false);
  return (
    <CheckboxStyled className="squaredFour">
      <h3>Checkbox</h3>
      <input
        className="form-check-input"
        type="checkbox"
        id="addExtraCheese"
        value={addExtraCheese}
        onChange={(e) => setAddExtraCheese(e.target.checked)}
      />
      <label className="form-check-label" htmlFor="addExtraCheese">
        Check
      </label>
    </CheckboxStyled>
  );
};

export default Checkbox;
