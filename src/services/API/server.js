import axios from 'axios';

const API = 'http://localhost:4000';

const signUpConnection = ({
  userName, userLastName, userEmail, userPassword, userConfirmPassword,
}) => axios.post(`${API}/sign-up`, {
  userName, userLastName, userEmail, userPassword, userConfirmPassword,
});

const signInConnection = ({
  userEmail, userPassword,
}) => axios.post(`${API}/sign-in`, {
  userEmail, userPassword,
});

const showProducts = (
  query, sort,
) => axios.get(`${API}/category${query}${sort}`);

const showProductData = (
  id,
) => axios.get(`${API}/product/${id}`);

export {
  signUpConnection,
  signInConnection,
  showProducts,
  showProductData,
};
