import { Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Atividade1: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string | number>(0);
  const [iaa, setIaa] = useState<string | number>(0);
  const [course, setCourse] = useState<string>('');
  const [tableData, setTableData] = useState<any[]>([]);
  console.log(`🚀 ~ Teste ~ tableData:`, tableData);

  const handleClearValues = () => {
    setName('');
    setAge('');
    setIaa('');
    setCourse('');
  };

  const handleSaveData = () => {
    const payload = {
      name: name,
      age: age,
      iaa: iaa,
      course: course,
    };
    setTableData(dataINtable => [...dataINtable, payload]);
    handleClearValues();
  };

  const renderForm = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        backgroundColor: '#d7d7d7',
        padding: '20px 30px',
        borderRadius: 4,
      }}
    >
      <div>
        <TextField
          id="outlined-controlled"
          label="Nome:"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event?.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="age"
          label="Idade:"
          type="number"
          value={age}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAge(event?.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="iaa"
          type="number"
          label="IAA:"
          value={iaa}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setIaa(event?.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="course"
          label="Curso:"
          value={course}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCourse(event?.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="text" type="submit" onClick={handleClearValues}>
          Limpar
        </Button>
        <Button variant="text" type="submit" onClick={handleSaveData}>
          Salvar
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {renderForm()}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginTop: 20,
        }}
      >
        {tableData.map((el, index) => {
          if (el !== undefined) {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgb(119, 119, 119)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 4,
                  gap: 20,
                  padding: 6,
                }}
              >
                <Typography>{el?.name}</Typography>
                <Typography>{el?.age}</Typography>
                <Typography>{el?.iaa}</Typography>
                <Typography>{el?.course}</Typography>
                <IconButton
                  onClick={() => {
                    setTableData(tableData.splice(index + 1));
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Atividade1;
