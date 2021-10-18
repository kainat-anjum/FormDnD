import React from "react";
import {FileWrapperStyled} from './style'

const FileUploader1 = () => {
  return (
    <FileWrapperStyled>
      <h3>Upload File</h3>
      <input type="file" id="myFile" name="filename" />
    </FileWrapperStyled>
  );
};

export default FileUploader1;
