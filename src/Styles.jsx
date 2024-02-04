import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #242424;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1.5px;
  }
  
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 2rem;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const Contacts = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  margin-left: 30px;
  color: ${(props) =>
    props.$green
      ? "green"
      : props.$red
      ? "red"
      : props.$yellow
      ? "yellow"
      : ""};
  cursor: pointer;
`;

export const UserName = styled.span`
  color: cyan;
`;
