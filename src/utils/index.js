const isStorage = !!(typeof Storage !== 'undefined');

export const setLocalStorage = (value) => {
  if (isStorage) {
    localStorage.setItem('form-generator', JSON.stringify(value));
  }
};

export const getLocalStorage = () => {
  if (isStorage) {
    return JSON.parse(localStorage.getItem('form-generator'));
  }
};
