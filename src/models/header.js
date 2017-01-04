
export default {
  namespace: 'header',
  state: {},
  reducers: {
    'search/save' (state, action) {
      return {...state, keyword: action.payload};
    },
  },
  effects: {},
  subscriptions: {},
};
