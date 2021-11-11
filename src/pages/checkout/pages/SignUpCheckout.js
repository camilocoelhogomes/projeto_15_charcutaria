import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../../components/SignUpForm';
import { signUpConnection } from '../../../services/API/server';
import UserContext from '../../../store/UserContext';
import LogInButton from '../../../components/LogInButton';

const SignUpCheckout = () => {
  const { user } = useContext(UserContext);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const passwordPatter = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (
      !passwordPatter.test(user.userPassword)
      && user.userPassword !== user.userConfirmPassword) return;
    signUpConnection({ ...user })
      .then(() => navigate('/checkout/shipping'))
      .catch((err) => { if (err.response.status === 409) setEmailError(true); });
  };

  return (
    <StyledSignUpCheckout>
      <LogInButton
        onClick={() => navigate('/checkout/sign-in')}
      >
        ENTRE NA SUA CONTA

      </LogInButton>
      <p>Ou preencha os dados a baixo</p>
      <SignUpForm
        submitForm={onSubmit}
        buttonText="ENTREGA"
        headerText="1. Cadastro"
        emailError={emailError}
        setEmailError={setEmailError}
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
