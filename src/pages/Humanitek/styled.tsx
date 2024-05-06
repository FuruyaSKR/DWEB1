import styled, { createGlobalStyle } from 'styled-components';

// Estilizando o corpo da página
export const StyledBody = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  min-height: 100vh; /* Faz com que o StyledBody tenha no mínimo a altura da tela */
  width: 100%;
  background-color: #e4e4e4; /* Cor de fundo suave para o StyledBody */
  color: #4b4b4b;
  font-family: Arial, sans-serif; /* Define a fonte padrão */
`;

// Estilizando o container que limita a largura máxima
export const Container = styled.div`
  width: 100%;
  max-width: 1440px; /* Largura máxima para a área de conteúdo */
  margin: auto; /* Centraliza o conteúdo na largura disponível */
  display: flex;
  justify-content: center;
`;

// Aplicando estilos específicos para telas maiores
export const GlobalStyle = createGlobalStyle`
    @media (min-width: 1441px) {
        body {
            background-color: #e8e8e8; /* Altera a cor de fundo em telas maiores */
        }
    }
`;

export const LoginCard = styled.div`
  display: flex;
  padding: 56px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 260px;
  border-radius: 13px;
  background: #fff;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;
`;

export const HeaderText = styled.h1`
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  width: 100%;
  text-align: center;
`;

export const InputOutline = styled.input`
  padding: 0px 10px;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.42);
`;

export const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`;

export const ForgotPass = styled.h3`
  display: flex;
  justify-content: flex-start;
  color: #c74d4d;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.15px;
  cursor: pointer;
`;

export const GroupPassAction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  width: 220px;
  height: 42px;
  padding: 6px 22px;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 4px;
  background: #3b86a4;
  color: white;

  /* Elevation / 2 */
  box-shadow:
    0px 3px 5px -2px rgba(0, 0, 0, 0.2),
    0px 2px 3px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;
