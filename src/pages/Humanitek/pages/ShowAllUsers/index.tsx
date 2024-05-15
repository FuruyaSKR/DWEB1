import { Dialog } from '@mui/material';
import React from 'react';
import { HomePage, ProfileHeader, UserIcon } from './styled';
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
      </HomePage>
    </Dialog>
  );
};

export default ShowAllUsers;
