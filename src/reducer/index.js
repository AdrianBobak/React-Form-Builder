import { getLocalStorage } from '../utils';

const initialState = getLocalStorage() || {
  formData: [],
};

const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== 'object' || inObject === null) {
    return inObject;
  }

  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};

const searchItem = (items, payload, fn) => {
  items.forEach((item) => {
    if (item.key === payload.key) {
      fn(item, payload, items);
    } else if (item.children.length) searchItem(item.children, payload, fn);
  });
};

const addChildren = (el, payload) => {
  el.children.push(payload.newItem);
};

const removeChildren = (el, payload, items) => {
  const index = items.indexOf(el);
  if (index > -1) items.splice(index, 1);
};

const updateItem = (el, payload) => {
  el.content = payload.value;
};

const rootReducer = (state = initialState, action) => {
  const newState = deepCopyFunction(state);
  switch (action.type) {
    case 'ADD_ITEM':
      if (action.payload.key) {
        searchItem(newState.formData, action.payload, addChildren);
      } else {
        newState.formData.push(action.payload.newItem);
      }
      return newState;
    case 'REMOVE_ITEM':
      searchItem(newState.formData, action.payload, removeChildren);
      return newState;
    case 'UPDATE_ITEM':
      searchItem(newState.formData, action.payload, updateItem);
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
