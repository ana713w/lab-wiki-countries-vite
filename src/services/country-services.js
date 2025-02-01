import axios from "axios";

const http = axios.create({
  baseURL: "https://ih-countries-api.herokuapp.com/countries"
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const listCountries = () => http.get(`/`);

const getCountry = (id) => http.get(`/${id}`);

export {
  listCountries,
  getCountry
};