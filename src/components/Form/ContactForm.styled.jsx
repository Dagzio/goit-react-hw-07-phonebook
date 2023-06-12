import styled from 'styled-components';

export const CurrentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 12px 8px;
  width: 320px;
  border: 1px solid black;
  background-color: #e4e4e4;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 180px;
  margin-bottom: 20px;
  padding: 2px 4px;
`;

export const Button = styled.button`
width 112px;
border-radius: 6px;
padding: 4px 12px;
cursor: pointer;
border: transparent;
outline: 1px solid black;
&:active{
    background-color: grey;
}
`;
