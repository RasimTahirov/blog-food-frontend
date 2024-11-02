import { useEffect, useState } from 'react';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';

import { resetError } from '../../../redux/authSlice';

const useErrorHandler = (error: null | string) => {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setShowError(true);

      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return showError;
};

export default useErrorHandler;
