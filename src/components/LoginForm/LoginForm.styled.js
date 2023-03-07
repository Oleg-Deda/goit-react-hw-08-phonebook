import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
  font-size: 24px;
  background-color: #e0f8cc;
  border: 2px solid black;
`;

export const Title = styled.h1`
  font-weight: 600;
`;

export const InputForm = styled(Field)`
  display: block;
  padding: 10px 10px;
  width: 300px;
  background-color: e0f8cc;
  border: 2px solid black;
  border-radius: 4px;
  // font: 0.6em 'typewriter', sans-serif;
  color: black;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 2px solid #71c2da;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 20px;
  color: #4169e1;
  font: 0.7em 'typewriter', sans-serif;
`;