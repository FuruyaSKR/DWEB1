import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;

export const HomeFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-height: 300px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: #fff;
  border-top: 1px solid var(--Border, rgba(0, 0, 0, 0.23));
  > div {
    display: flex;
    max-width: 1440px;
    margin: auto;
    align-items: center;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  height: 100%;
  max-height: 300px;
  padding: 20px 44px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  > h1 {
    color: #242424;
    text-align: center;
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 76.19% */
  }
  > p {
    color: #494949;
    text-align: justify;
    font-family: Roboto;
    font-size: 17px;
    font-style: normal;
    line-height: 16px; /* 94.118% */
  }
  > div {
    display: flex;
    justify-content: end;
    width: 100%;
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
  }
`;

export const RightFooter = styled.div`
  display: flex;
  height: 100%;
  max-height: 300px;
  width: 100%;
  padding: 20px 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: auto;
    gap: 10px;
  }
`;

export const Divider = styled.div`
  height: 230px;
  width: 1px;
  background: var(--Border, rgba(0, 0, 0, 0.11));
`;

export const SocialMediaLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: auto;
  > h1 {
    color: #454545;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 88.889% */
    margin: 0px;
  }
  > p {
    color: var(--Text-color-Light-Mode-Primary, rgba(0, 0, 0, 0.87));
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    text-align: justify;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.1px;
    margin: 0px;
  }
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

export const CardHome = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  height: 400px;
  border-radius: 13px;
  background: #fff;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  > img {
    border-radius: 4px 4px 0px 0px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
  }
  > div {
    padding: 10px 15px;
    height: 100%;
    > p {
      color: var(--Text-color-Light-Mode-Primary, rgba(0, 0, 0, 0.87));
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      text-align: justify;
      line-height: 24px; /* 171.429% */
      letter-spacing: 0.1px;
      margin: 0px;
      text-indent: 1.5em;
    }
    > h1 {
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 100% */
      letter-spacing: 0.1px;
      text-align: center;
    }
  }
`;
