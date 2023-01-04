import styled from 'styled-components';

export const Form = styled.form`
  ${props =>
    props.name === 'editForm'
      ? `background-color: #a9a9a9; width: 500px;`
      : `background-color: #373e67; width: 300px;`};
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  padding: 12px;
  border: 1px solid #373e6750;
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-top: 8px;
  padding: 8px;
  border-radius: 20px;
  border: none;
  &:focus {
    outline: transparent;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 6px 20px;
  align-self: center;
  border: 1px solid #373e6750;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid #d5d3d3;
  outline: transparent;
  cursor: pointer;
  ${props => props.name === 'delete' && `color: #ef2323;`};
  ${props => props.name === 'cancel' && `color: #ef2323;`};
  &:hover:not(:disabled) {
    ${props =>
      props.type === 'submit'
        ? `background-color: #3d3df3; color: #ffffff; border-color: #3d3df3;`
        : props.name === 'delete' || props.name === 'cancel'
        ? `background-color: #ef2323; color: #ffffff; border-color: #ef2323;`
        : `background-color: #3d3df3; color: #ffffff; border-color: #3d3df3;`};
  }
`;
