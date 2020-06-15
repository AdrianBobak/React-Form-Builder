import { setLocalStorage } from '../utils';

const middleware = (store) => (next) => (action) => {
  const result = next(action);
  const newStore = store.getState();
  setLocalStorage(newStore);
  return result;
};

export default middleware;
