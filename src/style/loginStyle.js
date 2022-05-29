import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Title = styled.h1`

`;

export const Image = styled.img`
  width: 294px;
`;

export const Container = styled.form`
  width: 202px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  input {
    width: 100%;
    height: 35px;
    padding: 10px;
    margin-top: 10px;

    color: white;

    background: #272A3E;
    border: none;
    border-bottom: 1px solid #F75483;
    border-radius: 5px;
  }

  button {
    width: 100%;
    height: 35px;

    color: white;
    font-weight: bold;
    font-size: 16px;
    
    background: #F63069;
    border: none;
    border-radius: 5px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Warning = styled.p`
  display: ${(props) => props.warning};
  color: red;
`;
