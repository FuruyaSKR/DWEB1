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

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Home: React.FC<Props> = ({ open, setOpen }: Props) => {
  return (
    <Dialog
      open={open}
      fullScreen
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#eaeaea',
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
            <CardHome
              onClick={() => console.log(`🚀 ~ Teste ~ CardHome:`, CardHome)}
            >
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

            <CardHome
              onClick={() => console.log(`🚀 ~ Teste ~ CardHome:`, CardHome)}
            >
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
              <button>SOBRE NÓS</button>
            </div>
          </LeftFooter>
          <Divider />
          <RightFooter>
            <div>
              <SocialMediaLine>
                <Instagram sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Instagram: @Humanitek</h1>
              </SocialMediaLine>
              <SocialMediaLine>
                <Twitter sx={{ color: '#454545' }} fontSize="medium" />
                <h1>X (Twitter): @HumanitekApp</h1>
              </SocialMediaLine>
              <SocialMediaLine>
                <FacebookOutlined sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Facebook: /Humanitek</h1>
              </SocialMediaLine>
            </div>
            <div>
              <SocialMediaLine>
                <Call sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Número de telefone: +55 21 4002-8922</h1>
              </SocialMediaLine>
              <SocialMediaLine>
                <Mail sx={{ color: '#454545' }} fontSize="medium" />
                <h1>Email: contato@humanitek.com.br</h1>
              </SocialMediaLine>
            </div>
          </RightFooter>
        </div>
      </HomeFooter>
    </Dialog>
  );
};

export default Home;
