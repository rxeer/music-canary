import { LoginDto, RegisterDto } from '@/@types';
import request from '@/rest/request';
export default {
  async signUp({ commit }: any, registerData: RegisterDto) {
    try {
      const { data } = await request('/users/register', 'post', registerData);
      commit('setTokens', data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async signIn({ commit }: any, loginData: LoginDto) {
    try {
      const { data } = await request('/users/login', 'post', loginData);
      commit('setTokens', data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async startResetPassword(_state: any, email: string) {
    try {
      await request('/users/password/reset', 'post', { email });
    } catch (err) {
      throw new Error(err);
    }
  },

  async getCountryList({ commit }: any) {
    try {
      const { data } = await request('/countries');
      commit('setCountries', data);
    } catch (err) {
      throw new Error(err);
    }
  },
};
