import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (localStorage.getItem('charcutaria')) {
      const localUser = JSON.parse(localStorage.getItem('charcutaria'));
      setUser(localUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, setUser }}>
      <GlobalStyle />
      <RoutesConfig />
    </UserContext.Provider>
  );
}

export default App;
