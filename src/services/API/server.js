import axios from 'axios';

const API = 'http://localhost:4000';

const signUpConnection = ({
  userName, userLastName, userEmail, userPassword, userConfirmPassword,
}) => axios.post(`${API}/sign-up`, {
  userName, userLastName, userEmail, userPassword, userConfirmPassword,
});

const showProducts = (
  query, sort,
) => axios.get(`${API}/category${query}${sort}`);

export {
  // eslint-disable-next-line import/prefer-default-export
  signUpConnection, showProducts,
};
