import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../../components/SignInForm';
import { signInConnection } from '../../../services/API/server';
import UserContext from '../../../store/UserContext';
import LogInButton from '../../../components/LogInButton';

const SignInCheckout = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const passwordPatter = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (
      !passwordPatter.test(user.userPassword)
      && user.userPassword !== user.userConfirmPassword) return;
    signInConnection({ ...user })
      .then(() => navigate('/checkout/shipping'))
      .catch(() => { setError(true); });
  };

  return (
    <StyledSignInCheckout>
      <LogInButton
        onClick={() => navigate('/checkout/sign-up')}
      >
        CRIE UMA CONTA
      </LogInButton>
      <p>Já tem uma conta? Entre!</p>
      <SignInForm
        headerText="1. Entrar"
        buttonText="ENTREGA"
        error={error}
        setError={setError}
        submitForm={onSubmit}
      />
    </StyledSignInCheckout>
  );
};

export default SignInCheckout;

const StyledSignInCheckout = styled.div`
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
