import axios from "axios";
import moment from "moment";
const baseURL = "https://api.covid19api.com/";
const toDay = new Date();
const getReport = {
   byCountryWithDay: (country) => {
      return axios.get(
         `${baseURL}dayone/country/${country}?from=2021-01-01T00:00:00&to=${moment(
            toDay
         ).format("YYYY-MM-DD")}T00:00:00`
      );
   },
   byCountryToDay: () => {
      return axios.get(`${baseURL}summary`);
   },
};

export default getReport;
