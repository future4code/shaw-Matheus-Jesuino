import styled from "styled-components";

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  width: 250px;
  border-radius: 10px;
  box-shadow: 3px 3px 4px 2px grey;
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;

  button {
    border-radius: 5px;
    background-color: #f2f2f2;
    border: 1px solid black;
    height: 20px;
    transition: transform 0.3s;
    color: red;

    :hover {
      background-color: red;
      color: white;
    }
  }

  :hover {
    background-color: #c2c2c2;
  }

  :active {
    background-color: gray;
    color: white;
  }
`;

export const ContainerBusca = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;

  input {
    width: 140px;
    border-radius: 5px;
    border: 1px solid black;
    height: 16px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background: #f2f2f2;
  border: 1px solid black;
  height: 20px;
  transition: transform 0.3s;

  :hover {
    background-color: #cdcdcd;
    color: black;
  }
`;
