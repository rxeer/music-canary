import { Store } from 'vuex';

export default {
  setCurrentUser(state: any, payload: any) {
    state.content = payload;
  },

  addContent(state: any, { type, data }: any) {
    state.assets = { ...state.assets, [type]: data };
  },

  removeContent(state: any, { type, contentId }: any) {
    const assets = { ...state.assets };
    const assetContent = assets[type];

    const newAssetContent = assetContent.filter(
      (item: any) => item.id !== contentId
    );
    assets[type] = newAssetContent;
    state.assets = assets;
  },
};
