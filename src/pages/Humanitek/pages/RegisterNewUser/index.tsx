import { Dialog } from '@mui/material';
import React from 'react';
import {
  DefaultButton,
  FooterActions,
  HomePage,
  InputsContent,
  InvisibleButton,
  ProfileHeader,
  TitleLine,
  UserIcon,
} from './styled';
import userIcon from '../../../../assets/userIcon.png';
import { InputOutline } from '../../styled';

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TitleLine>
            <p>Cadastro de Pessoas</p>
          </TitleLine>
          <InputsContent>
            <div>
              <InputOutline
                type="text"
                placeholder="Nome:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="Sobrenome:"
                style={{ width: '40%' }}
              />
              <InputOutline
                type="date"
                placeholder="Data de Nascimento:"
                style={{ width: '30%' }}
              />
            </div>
            <div>
              <InputOutline
                type="text"
                placeholder="CPF:"
                style={{ width: '40%' }}
              />
              <InputOutline
                type="text"
                placeholder="RG:"
                style={{ width: '40%' }}
              />
              <InputOutline
                type="text"
                placeholder="Gênero:"
                style={{ width: '20%' }}
              />
            </div>
            <div>
              <InputOutline
                type="text"
                placeholder="Endereço:"
                style={{ width: '40%' }}
              />
              <InputOutline
                type="text"
                placeholder="Número:"
                style={{ width: '20%' }}
              />
              <InputOutline
                type="text"
                placeholder="Complemento:"
                style={{ width: '40%' }}
              />
            </div>
            <div>
              <InputOutline
                type="text"
                placeholder="Cidade:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="Estado:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="Bairro:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="CEP:"
                style={{ width: '10%' }}
              />
            </div>
            <div>
              <InputOutline
                type="text"
                placeholder="E-mail:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="Profissão:"
                style={{ width: '30%' }}
              />
              <InputOutline
                type="text"
                placeholder="Telefone Celular:"
                style={{ width: '20%' }}
              />
              <InputOutline
                type="text"
                placeholder="Telefone Fixo:"
                style={{ width: '20%' }}
              />
            </div>
          </InputsContent>
        </div>
        <FooterActions>
          <InvisibleButton onClick={() => setOpen(false)}>
            Cancelar
          </InvisibleButton>
          <DefaultButton onClick={() => setOpen(false)}>
            Criar pessoa
          </DefaultButton>
        </FooterActions>
      </HomePage>
    </Dialog>
  );
};

export default RegisterNewUser;
