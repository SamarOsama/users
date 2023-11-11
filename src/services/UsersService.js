import axios from 'axios';
import urls from './urls';



export const getUsers = () => axios.get(urls.GetUsers_url)
