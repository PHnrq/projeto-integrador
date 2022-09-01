import axios from 'axios';

export const localidadeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
})