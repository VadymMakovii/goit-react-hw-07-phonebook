import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: space-between;
  border-bottom: 1px solid #cbc9c9cf;
`;

export const ContactBox = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0;
`;

export const Number = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
