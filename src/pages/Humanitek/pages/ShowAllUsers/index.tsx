import { Dialog } from '@mui/material';
import React from 'react';
import {
  HomePage,
  ProfileHeader,
  StyledTable,
  TableContent,
  TitleLine,
  UserIcon,
} from './styled';
import userIcon from '../../../../assets/userIcon.png';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ShowAllUsers: React.FC<Props> = ({ open, setOpen }: Props) => {
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
          <p>Listar Pessoas</p>
        </TitleLine>
        <TableContent>
          <StyledTable>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Telefone Celular</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João</td>
                <td>Silva</td>
                <td>02/04/1980</td>
                <td>123.456.789-00</td>
                <td>Rio de Janeiro</td>
                <td>RJ</td>
                <td>(21) 91234-5678</td>
              </tr>
              <tr>
                <td>Maria</td>
                <td>Ferreira</td>
                <td>15/08/1987</td>
                <td>987.654.321-99</td>
                <td>São Paulo</td>
                <td>SP</td>
                <td>(11) 99876-5432</td>
              </tr>
              <tr>
                <td>Antônio</td>
                <td>Rodrigues</td>
                <td>09/11/1974</td>
                <td>132.465.798-10</td>
                <td>Belo Horizonte</td>
                <td>MG</td>
                <td>(31) 97654-3210</td>
              </tr>
              <tr>
                <td>Francisca</td>
                <td>Melo</td>
                <td>23/06/1990</td>
                <td>145.678.943-22</td>
                <td>Recife</td>
                <td>PE</td>
                <td>(81) 93456-7890</td>
              </tr>
              <tr>
                <td>Carlos</td>
                <td>Barbosa</td>
                <td>04/12/1979</td>
                <td>154.789.652-54</td>
                <td>Porto Alegre</td>
                <td>RS</td>
                <td>(51) 91234-5678</td>
              </tr>
              <tr>
                <td>Paula</td>
                <td>Andrade</td>
                <td>29/10/1985</td>
                <td>162.837.495-76</td>
                <td>Curitiba</td>
                <td>PR</td>
                <td>(41) 95432-1864</td>
              </tr>
              <tr>
                <td>Sérgio</td>
                <td>Moura</td>
                <td>15/03/1970</td>
                <td>171.945.837-98</td>
                <td>Manaus</td>
                <td>AM</td>
                <td>(92) 98123-4567</td>
              </tr>
              <tr>
                <td>Teresa</td>
                <td>Costa</td>
                <td>19/01/1988</td>
                <td>189.034.287-10</td>
                <td>Salvador</td>
                <td>BA</td>
                <td>(71) 91234-5678</td>
              </tr>
              <tr>
                <td>Lucas</td>
                <td>Gomes</td>
                <td>27/07/1992</td>
                <td>198.347.586-42</td>
                <td>Brasília</td>
                <td>DF</td>
                <td>(61) 91234-5678</td>
              </tr>
              <tr>
                <td>Sofia</td>
                <td>Ribeiro</td>
                <td>05/05/1995</td>
                <td>207.468.579-64</td>
                <td>Fortaleza</td>
                <td>CE</td>
                <td>(85) 93123-4567</td>
              </tr>
            </tbody>
          </StyledTable>
        </TableContent>
      </HomePage>
    </Dialog>
  );
};

export default ShowAllUsers;
