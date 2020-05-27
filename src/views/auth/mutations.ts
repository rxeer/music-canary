import { LoginResponse } from '@/@types'

export default {
  setTokens(_state: any, { token, refreshToken }: LoginResponse) {
    localStorage.setItem('app_token', token);
    localStorage.setItem('app_refresh_token', refreshToken);
  },
};
