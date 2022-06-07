import styled from 'styled-components';

export const MainDiv = styled.div`
  padding: 32px 24px;
  max-width: 450px;
  margin: auto;
`;

export const WelcomeBack = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #86868F;
  margin-bottom: 8px;
`;

export const UserNmae = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
`;

export const AmoutSpent = styled.div`
  background: linear-gradient(105.91deg, #F53069 4.86%, rgba(247, 84, 131, 0.513666) 34.34%, rgba(247, 84, 131, 0.03) 89.34%);
  border-radius: 32px;
  width: 312px;
  height: 147px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin: 32px auto;

  h2 {
    margin-left: 40px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  p {
    margin-left: 81px;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
  }
`;

export const HrElement = styled.hr`
  width: 100%;
  height: 0px;
  left: 24px;
  top: 299px;
  margin: 12px 0 24px 0;
  border: 1px solid #86868F;
`;

export const MainParagraph = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

export const CurrenciesDiv = styled.div`
  display: flex;
  overflow: auto;
  gap: 4px;
`;

export const CurrencysDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ExpenseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #272A3E;
  border: solid #2C2C2C 2px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const ExpenseValue = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
