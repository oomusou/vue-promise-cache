import axios from 'axios';

const API = process.env.VUE_APP_API;
const URI = process.env.VUE_APP_BOOK_INFO;

export default args => axios.get(`${API}${URI}`, { params: args });
