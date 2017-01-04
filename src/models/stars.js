
export default {
  namespace: 'stars',
  state: {
    data: [],
    syncAllFinished: false,
  },
  reducers: {
    'sync/empty' (state, action) {
      return {...state, data: [], syncAllFinished: false};
    },

    'sync/save' (state, action) {
      return {...state, data: action.payload, syncAllFinished: true};
    },

    'sync/firstpage' (state, action) {
      return {...state, data: action.payload};
    },

    'select/save' (state, action) {
      return {...state, selectedStarId: action.payload};
    },

    'sync/start' (state, action) {
      return {...state, syncLoading: true, syncStatus: action.payload};
    },

    'sync/end' (state) {
      return {...state, syncLoading: false, syncStatus: ''};
    },

    'sync/progress' (state, action) {
      const { next, last } = action.payload;
      return {...state, syncStatus: `sync page ${next} of ${last}`};
    },

    'unstar/start' (state) {
      return {...state, unstarLoading: true};
    },

    'unstar/end' (state, action) {
      const data = state.data.filter(item => item.id !== state.selectedStarId);
      return {...state, data, selectedStarId: null, unstarLoading: false};
    },
  },
  effects: {},
  subscriptions: {},
};
