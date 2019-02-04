import axios from 'axios';

const API = process.env.VUE_APP_API;
const URI = process.env.VUE_APP_BOOK_INFO;

const toKey = args => Object.values(args).join('_');
const fn = args => axios.get(`${API}${URI}`, { params: args });

export default (() => {
  const storage = {};

  return args => {
    const key = toKey(args);
    return (storage[key]) ? storage[key] : storage[key] = fn(args);
  };
})();
