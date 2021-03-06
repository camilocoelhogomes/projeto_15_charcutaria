/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../fonts/Raleway/Raleway-Medium.ttf';
import RalewaySemiBold from '../fonts/Raleway/Raleway-SemiBold.ttf';
import RobotoMedium from '../fonts/Roboto/Roboto-Medium.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'RalewayRegular';
    src: url(${RalewayRegular}) format('truetype');
}

@font-face {
    font-family: 'RalewaySemiBold';
    src: url(${RalewaySemiBold}) format('truetype');
}

@font-face {
    font-family: 'RobotoMedium';
    src: url(${RobotoMedium}) format('truetype');
}

:root{
    --c-dark: #1D1F22;
    --c-light: #F1F2F3;
    --c-dark-variant: #43464E;
    --c-text: #1D1F22;
    --c-primary: #5ECE7B;
    --c-danger: #d12727;
    --c-success: #5ECE7B;
    --c-red: #b30b0b;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'RelewayBold';
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
select{
    font-family: 'RalewayRegular';
    font-size: 15px;
    border: none;
    color: #545454;
}
h1{
    font-family: 'RalewaySemiBold';
    font-size: 28px;
    margin-bottom: 25px;
}
h2{
    font-family: 'RalewayRegular';
    font-size: 20px;
    line-height: 31px;
    color: #1D1F22;

}
h3{
    font-family: 'RalewaySemiBold';
    font-size: 18px;
    line-height: 31px;
    color: #1D1F22;
}
h4{
    font-family: 'RalewaySemiBold';
    font-size: 20px;
}
h5{
    font-family: 'RalewaySemiBold';
    font-size: 14px;
}
p{
    color: var(--c-dark-variant);
    font-size: 14px;
    font-family: 'RobotoMedium';
}

input:focus, textarea:focus, select:focus{
        outline: none;
    }

*{
    box-sizing: border-box;
}
button{
  cursor: pointer;
  background-color: inherit;
  border: none;
  font-family: 'RalewaySemiBold';
}
`;

export default GlobalStyle;
