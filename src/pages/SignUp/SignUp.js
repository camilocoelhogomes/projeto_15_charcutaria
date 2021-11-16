import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import { signUpConnection } from '../../services/API/server';
import UserContext from '../../store/UserContext';
import LogInButton from '../../components/LogInButton';
import Header from '../../components/Header';

const SignUp = () => {
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
      .then(() => navigate('/sign-in'))
      .catch((err) => { if (err.response.status === 409) setEmailError(true); });
  };

  return (
    <>
      <Header />
      <StyledSignUp>
        <LogInButton
          onClick={() => navigate('/sign-in')}
        >
          ENTRE NA SUA CONTA
        </LogInButton>
        <p>Ou preencha os dados a baixo</p>
        <SignUpForm
          submitForm={onSubmit}
          buttonText="CADASTRAR"
          headerText="Cadastro"
          emailError={emailError}
          setEmailError={setEmailError}
        />
      </StyledSignUp>
    </>
  );
};

export default SignUp;

const StyledSignUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;
