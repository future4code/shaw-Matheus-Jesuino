import styled from "styled-components";

export const ContainerInformacoes = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 0;
  box-shadow: 3px 3px 4px 2px grey;
  border-radius: 10px;

  h3 {
    margin: 0;
  }
`;

export const ContainerNomeEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  p {
    margin: 0;
  }

  p:nth-child(1) {
    margin-bottom: 5px;
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

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  height: 16px;
  width: 250px;
`;

export const BotaoRemover = styled.button`
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
`;

export const ContainerEdicao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  Input {
    margin-bottom: 5px;
  }
`;
