import axios from "axios";

const baseURL = "https://api.covid19api.com/";

const getCountries = () => axios.get(`${baseURL}countries`);

export default getCountries;
