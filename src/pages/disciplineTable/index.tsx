import React from "react";

const DisciplineTable: React.FC = () => {
  const colsData = [
    "Codigo_disciplina",
    "Nome disciplina",
    "Professor",
    "Nota",
    "Faltas",
  ];
  const tableData = [
    {
      codigo_disciplina: "MAT101",
      Nome_disciplina: "Matemática Básica",
      Professor: "Carlos Silva",
      Nota: 8.5,
      Faltas: 2,
    },
    {
      codigo_disciplina: "FIS201",
      Nome_disciplina: "Física Clássica",
      Professor: "Ana Pereira",
      Nota: 7.8,
      Faltas: 3,
    },
    {
      codigo_disciplina: "QUI301",
      Nome_disciplina: "Química Orgânica",
      Professor: "Fernando Costa",
      Nota: 9.2,
      Faltas: 1,
    },
    {
      codigo_disciplina: "HIS401",
      Nome_disciplina: "História Medieval",
      Professor: "Maria Oliveira",
      Nota: 7.5,
      Faltas: 4,
    },
    {
      codigo_disciplina: "LIT501",
      Nome_disciplina: "Literatura Brasileira",
      Professor: "Roberto Freitas",
      Nota: 8.0,
      Faltas: 2,
    },
  ];

  return (
    <div>
      <div>
        <h1>Dados</h1>
        <ul>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <h2>Nome:</h2>
            <h2>Victor Hugo Z.</h2>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <h2>Matricula:</h2>
            <h2>09309.44425.02</h2>
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <h2>Ano Entrada:</h2>
            <h2>2019.01</h2>
          </li>
        </ul>
      </div>
      <div>
        <h1>Historico</h1>
        <table>
          <thead>
            <tr>
              {colsData.map((el) => {
                return <td>{el}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((disciplina) => (
              <tr key={disciplina.codigo_disciplina}>
                {Object.values(disciplina).map((valor, index) => (
                  <td key={index}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Detalhes do Aluno:</h1>
      </div>
    </div>
  );
};

export default DisciplineTable;
