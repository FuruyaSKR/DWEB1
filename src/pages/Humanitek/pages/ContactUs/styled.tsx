import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 40px;
  align-items: center;
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

export const ContactUSContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > div {
    display: flex;
    width: 600px;
    height: 90%;
    align-items: center;
    flex-direction: column;
    padding: 30px 25px;
    border-radius: 13px;
    background: #fff;
    box-shadow:
      0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    > img {
      width: 100%;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      gap: 12px;
      > text {
        color: #494949;
        text-align: justify;
        font-size: 17px;
        font-style: normal;
        line-height: 16px;
        text-indent: 1.5em;
      }
    }
  }
`;

export const RatingUS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 25px;
  > p {
    color: #4b4b4b;
    text-align: center;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    margin: 0px;
  }
  > text {
    color: #494949;
    text-align: justify;
    font-size: 17px;
    font-style: normal;
    line-height: 16px;
    text-indent: 1.5em;
  }
  > img {
    height: 25px;
  }
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
