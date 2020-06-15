export const addChildren = (type = null, key = null) => {
  const newItemID = Math.random().toString(36).substr(2, 9);
  const newItem = {
    type,
    key: newItemID,
    content: {
      condition: null,
      value: null,
      question: null,
      type: 'text',
    },
    children: [],
  };

  return {
    type: 'ADD_ITEM',
    payload: { newItem, key },
  };
};

export const removeItem = (key) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { key },
  };
};

export const updateItem = (value, key) => {
  return {
    type: 'UPDATE_ITEM',
    payload: { value, key },
  };
};