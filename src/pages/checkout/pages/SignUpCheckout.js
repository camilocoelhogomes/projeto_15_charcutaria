import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../../../components/SignUpForm';
import LogInButton from '../components/LogInButton';

const SignUpCheckout = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledSignUpCheckout>
      <LogInButton>ENTRE NA SUA CONTA</LogInButton>
      <p>Ou preencha os dados a baixo</p>
      <h2>1.Detalhes</h2>
      <SignUpForm
        submitForm={onSubmit}
        buttonText="ENTREGA"
      />
    </StyledSignUpCheckout>
  );
};

export default SignUpCheckout;

const StyledSignUpCheckout = styled.div`
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
