import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUpConnection } from '../../services/API/server';

const SignUp = () => {
  const [user, setUser] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
  });

  const navigate = useNavigate();

  const inputHandler = ({ input, value }) => {
    const newUser = { ...user };
    newUser[input] = value;
    setUser(newUser);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUpConnection({ ...user })
      .then(() => navigate('/sign-in'));
  };

  return (
    <StyledSignUp>
      <div className="banner" />
      <div className="main-area">
        <form className="input-data" onSubmit={submitHandler}>
          <h1>Bem vindo à charcutaria!</h1>
          <input
            value={user.userName}
            onChange={(e) => inputHandler({ input: 'userName', value: e.target.value })}
            placeholder="Nome"
          />
          <input
            value={user.userLastName}
            onChange={(e) => inputHandler({ input: 'userLastName', value: e.target.value })}
            placeholder="Sobrenome"
          />
          <input
            value={user.userEmail}
            onChange={(e) => inputHandler({ input: 'userEmail', value: e.target.value })}
            placeholder="E-mail"
            type="email"
          />
          <input
            value={user.userPassword}
            onChange={(e) => inputHandler({ input: 'userPassword', value: e.target.value })}
            placeholder="Senha"
            type="password"
          />
          <input
            value={user.userConfirmPassword}
            onChange={(e) => inputHandler({ input: 'userConfirmPassword', value: e.target.value })}
            placeholder="Confirme a Senha"
            type="password"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;

const StyledSignUp = styled.div`
display:flex;
flex-direction: row;
.banner{
  height: 100vh;
  width:40%;
  background-color: crimson;
}
.main-area{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.input-data{
  display: flex;
  flex-direction: column;
  gap:8px;
  background-color: #ffffff;
  width:600px;
  padding:16px;
  border-radius: 8px;
}
`;
