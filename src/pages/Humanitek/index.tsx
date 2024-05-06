import { Dialog } from '@mui/material';
import {
  Container,
  GlobalStyle,
  LoginCard,
  HeaderText,
  InputOutline,
  GroupInputs,
  ForgotPass,
  GroupPassAction,
  HeaderDiv,
  LoginButton,
  SocialMediaButtons,
} from './styled';
import Home from './pages/Home';
import { useState } from 'react';

const Humanitek: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Dialog
        open
        fullScreen
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#eaeaea',
          },
        }}
      >
        <GlobalStyle />
        <Container>
          <LoginCard>
            <HeaderDiv>
              <HeaderText>Login</HeaderText>
              <GroupInputs>
                <InputOutline type="email" placeholder="Usuário:" />
                <GroupPassAction>
                  <InputOutline type="password" placeholder="Senha:" />
                  <ForgotPass>Esqueceu a senha?</ForgotPass>
                </GroupPassAction>
              </GroupInputs>
              <LoginButton onClick={() => setOpen(true)}>LOGIN</LoginButton>
            </HeaderDiv>
            <SocialMediaButtons>
              <LoginButton
                style={{ backgroundColor: '#F85151', width: '100%' }}
              >
                GOOGLE
              </LoginButton>
              <LoginButton style={{ backgroundColor: '#000', width: '100%' }}>
                X
              </LoginButton>
            </SocialMediaButtons>
          </LoginCard>
        </Container>
      </Dialog>
      <Home open={open} setOpen={setOpen} />
    </>
  );
};

export default Humanitek;
