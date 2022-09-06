import axios from "axios";

const DTApi = axios.create({
  baseURL: "http://api.deliverytogether.com",
});

export default DTApi;
