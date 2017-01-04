import dva from 'dva';
import pick from 'lodash.pick';

const data = localStorage.getItem('github');
const initialState = data ? JSON.parse(data) : {};

const app = dva({
  initialState,
  onStateChange() {
    localStorage.setItem('github', JSON.stringify(pick(app._store.getState(), ['stars', 'user'])));
  },
});

app.router(require('./router'));

app.start('#root');
