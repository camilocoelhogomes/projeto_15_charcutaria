import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogInButton from '../../components/LogInButton';
import SignInForm from '../../components/SignInForm';
import UserContext from '../../store/UserContext';
import { signInConnection } from '../../services/API/server';

const SignIn = () => {
  const { updateUser, user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    updateUser({ input: 'userPassword', value: '' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const passwordPatter = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (!passwordPatter.test(user.userPassword)) {
      setError(true);
      return null;
    }
    signInConnection({ ...user })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('charcutaria', JSON.stringify(res.data));
        navigate('/');
      })
      .catch(() => setError(true));
    return true;
  };
  return (
    <StyledSignIn>
      <LogInButton
        onClick={() => navigate('/sign-up')}
      >
        CRIAR UMA CONTA
      </LogInButton>
      <p>Já tem uma conta? Entre!</p>
      <SignInForm
        buttonText="ENTRAR"
        error={error}
        setError={setError}
        submitForm={onSubmit}
      />
    </StyledSignIn>
  );
};

export default SignIn;

const StyledSignIn = styled.div`
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
