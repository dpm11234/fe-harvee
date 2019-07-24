import axios from "axios";

const apiUrl = 'http://localhost:8000/api/';

export default axios.create({
  baseURL: apiUrl,
  responseType: "json",
});
