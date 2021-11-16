import React from 'react';
import styled from 'styled-components';
import SignInput from '../../../components/SignInput';

const DataArea = ({ inputLabel, inputValue }) => (
  <div className="error-area">
    <div className="label">
      <p>{inputLabel}</p>
    </div>
    <SignInput
      placeholder="cep"
      type="text"
      value={inputValue}
      required
      maxLength="9"
      disabled
    />
  </div>
);

const UserAddress = ({
  userAddress, addressNumber, setAddress, address,
}) => {
  // eslint-disable-next-line no-unused-vars
  const {
    id,
    city,
    neighborhood,
    number,
    state,
    street,
    zip_code: zipCode,
  } = userAddress;

  const onPress = () => {
    setAddress(userAddress);
  };

  return (
    <StyledUserAddress onClick={onPress} isAddress={address.id && id === address.id}>
      <h4>
        Endereço
        {' '}
        {addressNumber + 1}
      </h4>
      <div className="two-inputs-area">
        <DataArea inputLabel="CEP:" inputValue={zipCode} />
        <DataArea inputLabel="País:" inputValue="Brasil" />
      </div>
      <DataArea inputLabel="Rua:" inputValue={street} />
      <div className="two-inputs-area">
        <DataArea inputLabel="Número:" inputValue={number} />
        <DataArea inputLabel="Bairro:" inputValue={neighborhood} />
      </div>
      <div className="two-inputs-area">
        <DataArea inputLabel="Cidade:" inputValue={city} />
        <DataArea inputLabel="Estato:" inputValue={state} />
      </div>
    </StyledUserAddress>
  );
};

export default UserAddress;

const StyledUserAddress = styled.div`
display: flex;
  flex-direction: column;
  gap: 8px;
  border: ${({ isAddress }) => (isAddress ? '2px solid green' : '2px solid white')};
  padding: 8px;
  box-sizing: border-box;
  
  .two-inputs-area{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }
  .error-area{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .submit-button{
    height: 52px;
    width: 272px;
    background-color: var(--c-primary);
    font-family: 'RalewaySemiBold';
    color: var(--c-light);
    font-size: 16px;
  }
  .label{
    height: 12px;
    p{
    color: var(--c-dark);
    font-family: 'RobotoMedium';
    font-size: 12px;
  }
}
`;
