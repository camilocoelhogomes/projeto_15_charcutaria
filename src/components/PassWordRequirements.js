import React from 'react';
import styled from 'styled-components';

const PassWordRequirements = ({ password, passwordConfirm }) => (
  <StyledPassWordRequidements>
    <StyledPassWordRequidement fit={/(?=.{8,})/.test(password) && password}>
      Deve conter pelo menos 8 cadacteres
    </StyledPassWordRequidement>
    <StyledPassWordRequidement fit={/(?=.*[a-z])/.test(password) && password}>
      Deve conter letras minusculas
    </StyledPassWordRequidement>
    <StyledPassWordRequidement fit={/(?=.*[A-Z])/.test(password) && password}>
      Deve conter letras maiusculas
    </StyledPassWordRequidement>
    <StyledPassWordRequidement fit={/(?=.*[0-9])/.test(password) && password}>
      Deve conter números
    </StyledPassWordRequidement>
    <StyledPassWordRequidement fit={/(?=.*[^A-Za-z0-9])/.test(password) && password}>
      Deve conter caractores especiais
    </StyledPassWordRequidement>
    <StyledPassWordRequidement fit={(passwordConfirm === password && password)}>
      Campos de senha e confirme senha devem ser iguais
    </StyledPassWordRequidement>
  </StyledPassWordRequidements>
);

export default PassWordRequirements;

const StyledPassWordRequidements = styled.ul`
    background-color: inherit;
`;
const StyledPassWordRequidement = styled.li`
    color: ${({ fit }) => (fit ? '#5ECE7B' : '#d12727')};
    font-family: 'RobotoMedium';
    font-size: 12px;
`;
