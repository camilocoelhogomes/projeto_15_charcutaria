import React, { useContext } from 'react';
import styled from 'styled-components';
import SignInput from './SignInput';
import UserContext from '../store/UserContext';

const SignInForm = ({
  submitForm, buttonText, headerText, error, setError,
}) => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <StyledSignInForm onSubmit={submitForm}>
      {
        headerText
          ? <h2>{headerText}</h2>
          : <></>
      }

      <SignInput
        placeholder="E-mail"
        type="email"
        value={user.userEmail}
        onChange={(e) => { updateUser({ input: 'userEmail', value: e.target.value }); }}
        required
      />
      <div className="error-area">
        <SignInput
          placeholder="Senha"
          type="password"
          value={user.userPassword}
          onChange={(e) => { setError(false); updateUser({ input: 'userPassword', value: e.target.value }); }}
          required
        />
        <div className="error-alert">
          <p>{error ? 'Usuário ou senha Incorretos' : ''}</p>
        </div>
      </div>
      <button type="submit" className="submit-button">
        {buttonText}
      </button>
    </StyledSignInForm>
  );
};

export default SignInForm;

const StyledSignInForm = styled.form`

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
  .error-area{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .error-alert{
    height: 12px;
    p{
    color: var(--c-danger);
    font-family: 'RobotoMedium';
    font-size: 12px;
  }
  }
`;
