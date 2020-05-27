import { LoginDto } from '@/@types'
import request from '@/rest/request';
export default {
  async signUp({ commit }, registerData) {
    try {
      const { data } = await request('/users/register', 'post', registerData);
      commit('setTokens', data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async signIn({ commit }, loginData: LoginDto) {
    try {
      const { data } = await request('/users/login', 'post', loginData);
      commit('setTokens', data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async startResetPassword(_state, email: string) {
    try {
      await request('/users/password/reset', 'post', { email });
    } catch (err) {
      throw new Error(err);
    }
  },
};
