import request from '@/rest/request';

export default {
  async getCurrentUser({ commit }) {
    try {
      const { data } = await request('/users/current');
      commit('setCurrentUser', data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteProfileContent({ commit }, { contentType, type, contentId }) {
    try {
      await request('contentType', 'delete', {
        [contentType]: contentId,
      });
      commit('removeContent', { contentType, type, contentId });
    } catch (err) {
      throw new Error(err);
    }
  },
};
