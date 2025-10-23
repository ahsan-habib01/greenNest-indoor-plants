import React, { use, useRef } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  const hasShownToast = useRef(false);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    if (!hasShownToast.current) {
      toast.info('Please log in to continue 🌿', {
        position: 'top-right',
        autoClose: 2000,
      });
      hasShownToast.current = true;
    }

    return <Navigate to={'/auth/login'} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
