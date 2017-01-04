
export default {
  namespace: 'readme',
  state: {},
  reducers: {
    save(state, { payload }) {
      const { repo, content } = payload;
      return {...state, [repo]: content};
    },
    'fetch/start' (state) {
      return {...state, readmeLoading: true};
    },

    'fetch/end' (state) {
      return {...state, readmeLoading: false};
    },
  },
  effects: {},
  subscriptions: {},
};
