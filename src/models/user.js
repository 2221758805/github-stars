
export default {
  namespace: 'user',
  state: {
    login: false,
  },
  reducers: {
    'login/start' (state) {
      return {...state, loginLoading: true};
    },

    'login/end' (state) {
      return {...state, loginLoading: false};
    },

    'login/error' (state, action) {
      return {...state, loginErrorMsg: action.payload};
    },

    'login/success' (state, action) {
      return {...state, ...action.payload, login: true, loginErrorMsg: '' };
    },
  },
  effects: {},
  subscriptions: {},
};
