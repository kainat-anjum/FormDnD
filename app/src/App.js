import React from "react";
import "@atlaskit/css-reset";

import { useSelector } from "react-redux";
import FormTemplatesScreen from "./screens/FormTemplatesScreen/FormTemplatesScreen";
import CreateFormScreen from "./screens/CreateFormScreen/CreateFormScreen";

function App() {
  const screenState = useSelector((state) => state.screenReducer);

  return screenState === "MAIN_SCREEN" ? (
    <CreateFormScreen />
  ) : (
    <FormTemplatesScreen />
  );
}

export default App;
