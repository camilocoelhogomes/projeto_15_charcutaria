import React, { useContext } from 'react';
import styled from 'styled-components';
import SignInput from './SignInput';
import UserContext from '../store/UserContext';
import PassWordRequirements from './PassWordRequirements';

const SignUpForm = ({ submitForm, buttonText, headerText }) => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <StyledSignUpForm onSubmit={submitForm}>
      <h2>{headerText}</h2>
      <div className="name-area">
        <SignInput
          placeholder="Nome"
          value={user.userName}
          onChange={(e) => updateUser({ input: 'userName', value: e.target.value })}
        />
        <SignInput
          placeholder="Sobrenome"
          value={user.userLastName}
          onChange={(e) => updateUser({ input: 'userLastName', value: e.target.value })}
        />
      </div>
      <SignInput
        placeholder="E-mail"
        type="email"
        value={user.userEmail}
        onChange={(e) => updateUser({ input: 'userEmail', value: e.target.value })}
      />
      <SignInput
        placeholder="Senha"
        type="password"
        value={user.userPassword}
        onChange={(e) => updateUser({ input: 'userPassword', value: e.target.value })}
      />
      <SignInput
        type="password"
        placeholder="Confirmar senha"
        value={user.userConfirmPassword}
        onChange={(e) => updateUser({ input: 'userConfirmPassword', value: e.target.value })}
      />
      <PassWordRequirements
        password={user.userPassword}
        passwordConfirm={user.userConfirmPassword}
      />
      <button type="submit" className="submit-button">
        {buttonText}
      </button>
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
  .submit-button{
    height: 52px;
    width: 272px;
    background-color: var(--c-primary);
    font-family: 'RalewaySemiBold';
    color: var(--c-light);
    font-size: 16px;
  }
`;
