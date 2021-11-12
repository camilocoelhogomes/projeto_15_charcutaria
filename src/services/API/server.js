import axios from 'axios';

const API = 'http://localhost:4000';

const createHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

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

const postAddress = ({
  userState,
  userCity,
  userZipCode,
  userStreetAddress,
  userNaiborhood,
  userNumber,
  userToken,
}) => axios.post(`${API}/address`,
  {
    userState,
    userCity,
    userZipCode,
    userStreetAddress,
    userNaiborhood,
    userNumber,
  },
  createHeaders(userToken));

export {
  signUpConnection,
  signInConnection,
  postAddress,
};
