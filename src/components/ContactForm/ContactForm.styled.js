import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
`;

export const Input = styled(Field)`
  font-size: 18px;
  line-height: 1.6;
  padding: 5px;
  border: 1px solid #cccaca;
  border-radius: 5px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 11px;
  font-weight: 400;

  color: #d80919;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #9c9a9a;
  border-radius: 6px;
  background-color: #56e9f0;
  
  &:hover,
  &:focus,
  &:active {
    background-color: #d9e97d;
  }
`;