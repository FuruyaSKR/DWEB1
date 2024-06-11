import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import {
  CardHome,
  Divider,
  HomeContent,
  HomeFooter,
  HomePage,
  LeftFooter,
  ProfileHeader,
  RightFooter,
  SocialMediaLine,
  UserIcon,
} from './styled';
import userIcon from '../../../../assets/userIcon.png';
import listPersonImage from '../../../../assets/listPerson.png';
import signinPersonImage from '../../../../assets/signinPerson.png';
import {
  Call,
  FacebookOutlined,
  Instagram,
  Mail,
  Twitter,
} from '@mui/icons-material/';
import ShowAllUsers from '../ShowAllUsers';
import ContactUs from '../ContactUs';
import RegisterNewUser from '../RegisterNewUser';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Home: React.FC<Props> = ({ open, setOpen }: Props) => {
  const [openShowAllUsers, setOpenShowAllUsers] = useState<boolean>(false);
  const [openContactUs, setOpenContactUs] = useState<boolean>(false);
  const [openRegisterNewUser, setOpenRegisterNewUser] =
    useState<boolean>(false);

  return (
    <Dialog
      open={open}
      fullScreen
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#eaeaea',
          overflowY: 'scroll',
        },
      }}
    >
      <HomePage>
        <ProfileHeader>
          <button onClick={() => setOpen(false)}>VOLTAR</button>
          <UserIcon src={userIcon} />
        </ProfileHeader>
        <HomeContent>
          <p>Inicio</p>
          <div>
            <CardHome onClick={() => setOpenRegisterNewUser(true)}>
              <img src={signinPersonImage} alt="Cadastrar Pessoa" />
              <div>
                <h1>Cadastro de pessoas</h1>
                <p>
                  Aqui, você pode registrar uma nova pessoa, fornecendo
                  informações essenciais como nome, idade e contato, para manter
                  as informações organizadas.
                </p>
              </div>
            </CardHome>

            <CardHome onClick={() => setOpenShowAllUsers(true)}>
              <img src={listPersonImage} alt="Listar Pessoas" />
              <div>
                <h1>Listar pessoas</h1>
                <p>
                  Visualize a lista de todas as pessoas cadastradas, facilitando
                  a pesquisa e a consulta de suas informações rapidamente.
                </p>
              </div>
            </CardHome>
          </div>
        </HomeContent>
      </HomePage>
      <HomeFooter>
        <div>
          <LeftFooter>
            <h1>Contrate-nos</h1>
            <p>
              Estamos aqui para ajudar! Se precisar de suporte ou tiver dúvidas,
              entre em contato conosco pelo e-mail ou telefone fornecidos. Nossa
              equipe está pronta para responder rapidamente e fornecer o suporte
              necessário.
            </p>
            <div>
              <button onClick={() => setOpenContactUs(true)}>SOBRE NÓS</button>
            </div>
          </LeftFooter>
          <Divider />
          <RightFooter>
            <div>
              <SocialMediaLine>
                <Instagram sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Instagram:</h1>
                <p>@Humanitek</p>
              </SocialMediaLine>
              <SocialMediaLine>
                <Twitter sx={{ color: '#454545' }} fontSize="medium" />
                <h1>X (Twitter): </h1>
                <p>@HumanitekApp</p>
              </SocialMediaLine>
              <SocialMediaLine>
                <FacebookOutlined sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Facebook: </h1>
                <p>/Humanitek</p>
              </SocialMediaLine>
            </div>
            <div>
              <SocialMediaLine>
                <Call sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Número de telefone: </h1>
                <p>+55 21 4002-8922</p>
              </SocialMediaLine>
              <SocialMediaLine>
                <Mail sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Email: </h1>
                <p>contato@humanitek.com.br</p>
              </SocialMediaLine>
            </div>
          </RightFooter>
        </div>
      </HomeFooter>
      <ShowAllUsers open={openShowAllUsers} setOpen={setOpenShowAllUsers} />
      <ContactUs open={openContactUs} setOpen={setOpenContactUs} />
      <RegisterNewUser
        open={openRegisterNewUser}
        setOpen={setOpenRegisterNewUser}
      />
    </Dialog>
  );
};

export default Home;
