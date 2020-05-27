export default {
  setCurrentUser(state, payload) {
    state.content = payload;
  },
  addContent(state, { type, data }) {
    state.assets = { ...state.assets, [type]: data };
  },
  removeContent(state, { type, contentId }) {
    const assets = { ...state.assets };
    const assetContent = assets[type];

    const newAssetContent = assetContent.filter(
      (item) => item.id !== contentId
    );
    assets[type] = newAssetContent;
    state.assets = assets;
  },
};
