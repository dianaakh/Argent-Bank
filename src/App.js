import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import Error404 from './pages/Page404';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/user-account' element={<UserAccount />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;
