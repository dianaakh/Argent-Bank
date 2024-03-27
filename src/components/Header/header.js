import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';
import './header.css';
import { fetchUserProfile } from '../../redux/actions/profile.action';
import { logoutUser } from '../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const userProfile = useSelector((state) => state.profile.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token]);

  return (
    <nav className='main-nav'>
      <NavLink to='/' className='main-nav-logo'>
        <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>

      {token ? (
        <div className='navbar_loginSuccess'>
          <NavLink to='/user-account' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            {userProfile.userName}
          </NavLink>
          <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink to='/login' className='main-nav-item'>
          <i className='fa fa-user-circle'></i>
          Sign In
        </NavLink>
      )}
    </nav>
  );
};


export default Header;