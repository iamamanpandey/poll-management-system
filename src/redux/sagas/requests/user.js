import axios from "axios";

export const axiosCall = (methode, url, data, headers) => {
  let URL = process.env.REACT_APP_BASE_URL + url;

  switch (methode) {
    case "get":
      return axios.get(URL, { headers });
    case "post":
      return axios.post(URL, data, { headers });
    case "put":
      return axios.put(URL, data, { headers });
    case "delete":
      return axios.delete(URL, { headers });
    default:
      return axios.get(URL);
  }
};
