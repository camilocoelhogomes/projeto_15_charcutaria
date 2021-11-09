import React, { useState } from 'react';
import GlobalStyle from './assets/css/GlobalStyle';
import RoutesConfig from './routes/RoutesConfig';
import UserContext from './store/UserContext';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    token: '',
  });

  const updateUser = ({ input, value }) => {
    const newUser = { ...user };
    newUser[input] = value;
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <GlobalStyle />
      <RoutesConfig />
    </UserContext.Provider>
  );
}

export default App;
