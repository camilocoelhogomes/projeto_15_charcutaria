/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { BiPhone } from 'react-icons/bi';

export default function Footer() {
  return (
    <Main>
      <Box>
        <Section>
          <h4>ATENDIMENTO</h4>
          <h5>
            <BiPhone />
            0800-123-4567
          </h5>
          <h5>Segunda a Sexta-feira das 8:00 às 18:00</h5>
          <h5>Sábado das 08:00 às 12:00</h5>
        </Section>
        <Section>
          <h4>ACEITAMOS</h4>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-256.png" alt="Cartão Visa" />
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/206_Mastercard_Credit_Card_logo_logos-256.png" alt="Cartão Mastercard" />
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/16_Amex_Credit_Card_logo_logos-256.png" alt="Cartão AmericanExpress" />
          <img src="https://cdn1.iconfinder.com/data/icons/payment-method/480/dinner_club-256.png" alt="Cartão Diners" />
        </Section>
        <Section>
          <h4>SEGURANÇA</h4>
          <img src="https://www.mbmdecor.com.br/img/ebit-diamante.png" alt="Categoria Ebit Diamante" />
          <img src="https://www.lojaprotegida.com.br/imgs/logo.png" alt="Loja protegida" />
        </Section>
      </Box>
      <Rights>
        <h5>
          DE BACON A VIDA CHARCUTARIA CNPJ 12.345.678/0001-00 CEP: 12345-678 PRESIDENTE PRUDENTE-SP
          COPYRIGHT 2012-2021 - TODOS OS DIREITOS RESERVADOS. OS PREÇOS E CONDIÇÕES DE PAGAMENTO SÃO VÁLIDOS EXCLUSIVAMENTE PARA COMPRAS REALIZADAS VIA INTERNET E PODERÃO SOFRER ALTERAÇÃO SEM AVISO PRÉVIO. EM CASO DE DIVERGÊNCIA, O PREÇO VÁLIDO É SEMPRE O DO CARRINHO DE COMPRAS.
        </h5>
      </Rights>
    </Main>
  );
}

const Main = styled.div`
  height: 230px;
  background-color: var(--c-red);
  display: flex;
  align-items: space-around;
  flex-direction: column;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
  margin-top: 40px;
  color: #fff;

  h4{
    margin-bottom: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Section = styled.div`
    margin-top: 30px;

    img{
      height: 50px;
      margin-right: 5px;
    }
`;

const Rights = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
`;
