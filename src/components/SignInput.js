import styled from 'styled-components';

const SignInput = styled.input`
background-color: inherit;
border: none;
border-bottom: 1px solid var(--c-dark-variant);
flex-grow: 1;
color: var(--c-text);
font-size: 18px;
font-family: 'RalewayRegular';
padding-bottom: 7px;
::placeholder{
    color: var(--c-text);
    font-size: 18px;
    font-family: 'RalewayRegular';
}
`;

export default SignInput;
