export const setToken = (token: string) => {
  localStorage.setItem('app_token', token);
};

export const getToken = (): string => {
  return (
    localStorage.getItem('app_token') || sessionStorage.getItem('app_token') || ''
  );
};

export const removeToken = () => {
  localStorage.removeItem('app_token');
  sessionStorage.removeItem('app_token');
};

export const signOut = () => {
  removeToken();
  localStorage.clear();
};
