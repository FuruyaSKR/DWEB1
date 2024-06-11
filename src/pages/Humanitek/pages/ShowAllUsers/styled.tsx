import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;

export const ProfileHeader = styled.div`
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  display: flex;
  > button {
    cursor: pointer;
    display: flex;
    width: 156px;
    height: 42px;
    padding: 6px 22px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #3b86a4;
    color: white;
    border: none;

    /* Elevation / 2 */
    box-shadow:
      0px 3px 5px -2px rgba(0, 0, 0, 0.2),
      0px 2px 3px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const UserIcon = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  > p {
    color: #4b4b4b;
    text-align: center;
    font-family: Roboto;
    font-size: 45px;
    font-style: normal;
    line-height: 16px;
    font-weight: 700;
  }
  > div {
    display: flex;
    flex-direction: row;
    gap: 95px;
  }
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > p {
    color: #4b4b4b;
    text-align: center;
    font-family: Roboto;
    font-size: 45px;
    font-style: normal;
    line-height: 16px;
    font-weight: 700;
  }
`;

export const TableContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 1200px;
  margin-top: 20px;
  border-collapse: collapse;

  th,
  td {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
  }

  th {
    background-color: #f5f5f5;
    color: #3f3f3f;
    font-weight: 500;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }
`;
