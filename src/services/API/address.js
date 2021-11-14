import axios from 'axios';

const API = 'https://viacep.com.br/ws';

const adressApi = ({ cep }) => axios.get(`${API}/${cep.replace(/\D/g, '')}/json/`);

export default adressApi;
