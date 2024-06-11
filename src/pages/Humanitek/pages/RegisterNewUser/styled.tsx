import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const FooterActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  gap: 10px;
  align-self: stretch;
`;

export const DefaultButton = styled.button`
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
  text-transform: uppercase;

  /* Elevation / 2 */
  box-shadow:
    0px 3px 5px -2px rgba(0, 0, 0, 0.2),
    0px 2px 3px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const InvisibleButton = styled.button`
  cursor: pointer;
  background: none;
  color: red;
  border: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: #ffffff2b;
  }
`;

export const InputsContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  > div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 1200px;
  }
`;
