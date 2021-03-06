import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../../store/UserContext';
import SignInput from '../../../components/SignInput';
import { cpfMask, cepMask } from '../../../services/mask/mask';
import adressApi from '../../../services/API/address';
import { postAddress } from '../../../services/API/server';
import UserAddress from '../components/UserAddres';

const Shipping = () => {
  const { user, updateUser } = useContext(UserContext);
  const [newCpf, setNewCpf] = useState();
  const [address, setAddress] = useState({
    cep: '',
  });
  const [cepError, setCepError] = useState(false);
  const [formAddress, setFormAddress] = useState({
    cep: '',
  });
  const updateAddress = ({ input, value }) => {
    const newFormAddress = { ...formAddress };
    newFormAddress[input] = value;
    setCepError(false);
    if (value.length === 9) {
      adressApi({ cep: value })
        .then((res) => {
          if (res.data.erro) {
            setCepError(true);
          }
          const apiAddress = res.data;
          setFormAddress(
            {
              ...apiAddress,
              street: (apiAddress.logradouro + apiAddress.complemento),
            },
          );
        });
    }
    setFormAddress(newFormAddress);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await postAddress({
        userState: formAddress.uf,
        userCity: formAddress.localidade,
        userZipCode: formAddress.cep.replace(/\D/g, ''),
        userStreetAddress: formAddress.street,
        userNaiborhood: formAddress.bairro,
        userNumber: Number(formAddress.number),
        userToken: user.userSessionToken,
      });
    } catch (error) {
      setCepError(true);
    }
  };
  return (
    <>
      <StyledShipping onSubmit={submitHandler}>
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
        <p>Escolha entre seus endere??os ou adicione um novo</p>
        <div className="address-list">
          {
        user.userAddress && user.userAddress.length
          ? user.userAddress[0].map((remoteAddress, index) => (
            <UserAddress
              key={remoteAddress.id}
              userAddress={remoteAddress}
              addressNumber={index}
              setAddress={setAddress}
              address={address}
            />
          ))
          : <></>
      }
        </div>
        <h3>Adicionar Endere??o</h3>
        <div className="two-inputs-area">
          <div className="error-area">
            <SignInput
              placeholder="cep"
              type="text"
              value={formAddress.cep}
              onChange={(e) => updateAddress({ input: 'cep', value: cepMask(e.target.value) })}
              required
              maxLength="9"
            />
            <div className="error-alert">
              <p>{cepError ? 'CEP inexistente' : ''}</p>
            </div>
          </div>
          <div className="error-area">
            <SignInput
              placeholder="Pa??s"
              type="text"
              value="Brasil"
              required
              maxLength="9"
              disabled
            />
            <div className="error-alert" />
          </div>
        </div>
        <SignInput
          placeholder="Rua"
          type="text"
          value={(formAddress.street) ? formAddress.street : ''}
          onChange={(e) => updateAddress({ input: 'street', value: e.target.value })}
          required
        />
        <div className="two-inputs-area">
          <SignInput
            placeholder="N??mero"
            type="text"
            value={formAddress.number ? formAddress.number : ''}
            onChange={(e) => updateAddress({ input: 'number', value: e.target.value.replace(/\D/g, '') })}
            required
          />
          <SignInput
            placeholder="Bairro"
            type="text"
            value={formAddress.bairro ? formAddress.bairro : ''}
            onChange={(e) => updateAddress({ input: 'bairro', value: e.target.value })}
            required
          />
        </div>
        <div className="two-inputs-area">
          <SignInput
            placeholder="Cidade"
            type="text"
            value={formAddress.localidade ? formAddress.localidade : ''}
            required
            disabled
          />
          <SignInput
            placeholder="Estado"
            type="text"
            value={formAddress.uf ? formAddress.uf : ''}
            required
            disabled
          />
        </div>
        <button type="submit" className="submit-button">
          CONFERIR PEDIDO
        </button>
      </StyledShipping>
    </>
  );
};

export default Shipping;

const StyledShipping = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .address-list{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

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
  .error-alert{
    height: 12px;
    p{
    color: var(--c-danger);
    font-family: 'RobotoMedium';
    font-size: 12px;
  }
}
`;
