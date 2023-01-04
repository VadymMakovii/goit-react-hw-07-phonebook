import styled from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-top: 8px;
  padding: 6px 16px;
  border-radius: 20px;
  &:focus {
    outline: transparent;
  }
`;
