import request from '@/rest/request';

export default {
  async getVisitors({ commit }) {
    try {
      const { data } = await request('/get_visitors');
      commit('setVisitors', data);
    } catch (err) {
      throw new Error(err);
    }
  },
};
