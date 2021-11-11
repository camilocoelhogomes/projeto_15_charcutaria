import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../../store/UserContext';
import SignInput from '../../../components/SignInput';
import { cpfMask, cepMask } from '../../../services/mask/mask';
import adressApi from '../../../services/API/address';

const Shipping = () => {
  const { user, updateUser } = useContext(UserContext);
  const [newCpf, setNewCpf] = useState();
  const [address, setAddress] = useState({
    cep: '',
  });

  const updateAddress = ({ input, value }) => {
    const newAddress = { ...address };
    newAddress[input] = value;
    if (value.length === 9) {
      adressApi({ cep: value }).then((res) => {
        setAddress(res.data);
      });
    }
    setAddress(newAddress);
  };

  return (
    <StyledShipping>
      <h2>2. Entrega</h2>
      <div className="two-inputs-area">
        <SignInput
          placeholder="Nome"
          value={user.userName}
          onChange={(e) => updateUser({ input: 'userName', value: e.target.value })}
          required
          disabled={!!user.userName}
        />
        <SignInput
          placeholder="Sobrenome"
          value={user.userLastName}
          onChange={(e) => updateUser({ input: 'userLastName', value: e.target.value })}
          required
          disabled={!!user.userLastName}
        />
      </div>
      <SignInput
        placeholder="E-mail"
        type="email"
        value={user.userEmail}
        onChange={(e) => { updateUser({ input: 'userEmail', value: e.target.value }); }}
        required
        disabled={!!user.userEmail}
      />
      <SignInput
        placeholder="cpf"
        type="text"
        value={user.userCpf ? user.userCpf : newCpf}
        onChange={(e) => { setNewCpf(cpfMask(e.target.value)); }}
        required
        maxLength="14"
        disabled={!!user.userCpf}
      />
      <div className="two-inputs-area">
        <SignInput
          placeholder="cep"
          type="text"
          value={address.cep}
          onChange={(e) => updateAddress({ input: 'cep', value: cepMask(e.target.value) })}
          required
          maxLength="9"
        />
        <SignInput
          placeholder="cep"
          type="text"
          value="Brasil"
          required
          maxLength="9"
          disabled
        />
      </div>
      <SignInput
        placeholder="Rua"
        type="text"
        value={(address.street || address.street === '') ? address.street : `${address.logradouro} ${address.complemento}`}
        onChange={(e) => updateAddress({ input: 'street', value: e.target.value })}
        required
      />
      <div className="two-inputs-area">
        <SignInput
          placeholder="Número"
          type="text"
          value={address.number ? address.number : ''}
          onChange={(e) => updateAddress({ input: 'number', value: e.target.value.replace(/\D/g, '') })}
          required
        />
        <SignInput
          placeholder="Bairro"
          type="text"
          value={address.bairro ? address.bairro : ''}
          onChange={(e) => updateAddress({ input: 'bairro', value: e.target.value })}
          required
        />
      </div>
      <div className="two-inputs-area">
        <SignInput
          placeholder="Cidade"
          type="text"
          value={address.localidade ? address.localidade : ''}
          required
          disabled
        />
        <SignInput
          placeholder="Estado"
          type="text"
          value={address.uf ? address.uf : ''}
          required
          disabled
        />
      </div>
    </StyledShipping>
  );
};

export default Shipping;

const StyledShipping = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .two-inputs-area{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }
`;
