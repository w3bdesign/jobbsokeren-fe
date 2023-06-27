import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

import ErrorDisplayer from './ErrorDisplayer';
import { auth } from '@/firebase.config';
import { logout } from '@/store/slices/authentication/authSlice';

interface LogOutProps {
    children: React.ReactNode;
  }
  

const Logout: React.FC<LogOutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error: Error) => {   // Specify Error type for caught error
        return <ErrorDisplayer title="Logg ut feilet" errorMessage={error.message} errorCode={500} />
      });
  };

  return (
    <div onClick={handleLogout}>
      {children}
    </div>
  );
};

export default Logout;
