import axios from 'axios';
import { cache } from '../helpers/promise';

const API = process.env.VUE_APP_API;
const URI = process.env.VUE_APP_BOOK_INFO;

const fn = args => axios.get(`${API}${URI}`, { params: args });

export default cache(fn);
