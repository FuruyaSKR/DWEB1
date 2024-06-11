import { Dialog } from '@mui/material';
import React from 'react';
import {
  ContactUSContent,
  HomePage,
  ProfileHeader,
  RatingUS,
  TitleLine,
  UserIcon,
} from './styled';
import userIcon from '../../../../assets/userIcon.png';
import contactUS from '../../../../assets/contactUS.png';
import location from '../../../../assets/location.png';
import ratingStars from '../../../../assets/ratingStars.png';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const RegisterNewUser: React.FC<Props> = ({ open, setOpen }: Props) => {
  return (
    <Dialog
      open={open}
      fullScreen
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#eaeaea',
          overflowY: 'hidden',
        },
      }}
    >
      <HomePage>
        <ProfileHeader>
          <button onClick={() => setOpen(false)}>VOLTAR</button>
          <UserIcon src={userIcon} />
        </ProfileHeader>
        <TitleLine>
          <p>Sobre nós</p>
        </TitleLine>
        <ContactUSContent>
          <div>
            <img src={contactUS} alt="contactUS" />
            <div>
              <text>
                Na Humanitek, estamos comprometidos em inovar de maneira que
                transforme o cotidiano das pessoas através da tecnologia. Desde
                a nossa fundação, focamos em desenvolver soluções que não apenas
                atendem às necessidades imediatas de nossos clientes, mas também
                antecipam os desafios do futuro. Com uma equipe altamente
                qualificada e apaixonada por tecnologia, cada projeto é
                conduzido com meticulosa atenção aos detalhes, garantindo
                produtos e serviços da mais alta qualidade.
              </text>
              <text>
                Valorizamos a transparência em todas as nossas operações e
                cultivamos uma cultura de respeito mútuo e inovação contínua.
                Nosso objetivo é estabelecer parcerias duradouras com nossos
                clientes, baseadas na confiança e na eficácia de nossas
                soluções. Em cada etapa, desde o planejamento até a execução,
                nosso compromisso é com a satisfação total e o sucesso de quem
                escolhe a Humanitek.
              </text>
            </div>
          </div>
          <div>
            <img
              src={location}
              alt="location"
              style={{ height: '400px', width: 'auto' }}
            />
            <RatingUS>
              <p>Avalie-nos</p>
              <text>
                Na Humanitek, seu futuro é o nosso presente. Estamos aqui para
                ouvir, colaborar e transformar suas ideias em realidade com
                eficiência e segurança.
              </text>
              <img src={ratingStars} alt="location" />
              <button>AVALIE</button>
            </RatingUS>
          </div>
        </ContactUSContent>
      </HomePage>
    </Dialog>
  );
};

export default RegisterNewUser;
