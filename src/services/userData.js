import axios from 'axios';

export const userData = axios.create({
  baseURL: "https://my-json-server.typicode.com/PHnrq/fake-api/"
})