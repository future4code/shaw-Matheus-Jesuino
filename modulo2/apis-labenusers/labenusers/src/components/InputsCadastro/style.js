import styled from "styled-components";

export const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CaixasInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 120px;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 3px 3px 4px 2px grey;

  button {
    border-radius: 5px;
    background: #f2f2f2;
    border: 1px solid black;
    height: 20px;
    transition: transform 0.3s;

    :hover {
      background-color: #cdcdcd;
      color: black;
    }
  }

  input {
    margin-bottom: 10px;
  }
`;
