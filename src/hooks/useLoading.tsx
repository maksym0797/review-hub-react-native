import {useState} from 'react';

export const useLoading = (loading = true) => {
  const [isLoading, setIsLoading] = useState(loading);
  const startLoading = () => {
    setIsLoading(true);
  };
  const endLoading = () => {
    setIsLoading(false);
  };

  return [isLoading, startLoading, endLoading];
};
