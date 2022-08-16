import React from 'react';
import styled from 'styled-components';

interface IFormErrorProps {
  errorMessage: string;
}

export const FormErorr: React.FC<IFormErrorProps> = ({ errorMessage }) => {
  return <ErrorSpan>{errorMessage}</ErrorSpan>;
};

const ErrorSpan = styled.span`
  font-size: medium;
  color: red;
`;
