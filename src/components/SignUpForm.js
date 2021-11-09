import React, { useState } from 'react';
import styled from 'styled-components';
import SignInput from './SignInput';

const SignUpForm = ({ submitForm }) => {
  const [user, setUser] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
  });

  const onInputChange = ({ input, value }) => {
    const newUser = { ...user };
    newUser[input] = value;
    setUser(newUser);
  };

  return (
    <StyledSignUpForm onSubmit={submitForm}>
      <div className="name-area">
        <SignInput
          placeholder="Nome"
          value={user.userName}
          onChange={(e) => onInputChange({ input: 'userName', value: e.target.value })}
        />
        <SignInput
          placeholder="Sobrenome"
          value={user.userLastName}
          onChange={(e) => onInputChange({ input: 'userLastName', value: e.target.value })}
        />
      </div>
      <SignInput
        placeholder="E-mail"
        value={user.userEmail}
        onChange={(e) => onInputChange({ input: 'userEmail', value: e.target.value })}
      />
      <SignInput
        placeholder="Senha"
        value={user.userPassword}
        onChange={(e) => onInputChange({ input: 'userPassword', value: e.target.value })}
      />
      <SignInput
        placeholder="Confirmar senha"
        value={user.userConfirmPassword}
        onChange={(e) => onInputChange({ input: 'userConfirmPassword', value: e.target.value })}
      />
    </StyledSignUpForm>
  );
};

export default SignUpForm;

const StyledSignUpForm = styled.form`

    display: flex;
    flex-direction: column;
    gap: 40px;

  .name-area{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }
`;
