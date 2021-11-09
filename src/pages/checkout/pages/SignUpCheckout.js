import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../../components/SignUpForm';
import { signUpConnection } from '../../../services/API/server';
import UserContext from '../../../store/UserContext';
import LogInButton from '../components/LogInButton';

const SignUpCheckout = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    signUpConnection({ ...user })
      .then(() => navigate('/checkout/shipping'));
  };

  return (
    <StyledSignUpCheckout>
      <LogInButton>ENTRE NA SUA CONTA</LogInButton>
      <p>Ou preencha os dados a baixo</p>
      <SignUpForm
        submitForm={onSubmit}
        buttonText="ENTREGA"
        headerText="1. Cadastro"
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
