import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cryptic-ravine-29648.herokuapp.com/todos',
});

export { axiosInstance };
