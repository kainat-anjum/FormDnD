import styled from "styled-components";

export const FormTemplatesStyled = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: calc(100vh - 112px);
  position:relative;

  .back-link {
    color: blue;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
  }

  .components-wrapper {
    border: 1px solid #ccc;
    height: 100%;
    padding: 20px;

    h3 {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  .template-name-wrapper {
    background: #027aff;
    height: 100%;
    color: #fff;
    padding: 20px;
  }
`;
