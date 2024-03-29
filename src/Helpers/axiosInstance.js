import axios from "axios";

const BASE_URL = 'http://localhost:5001/api/v1' ;

const axiosInstace = axios.create();

axiosInstace.defaults.baseURL = BASE_URL ;
axiosInstace.defaults.withCredentials = true ;

export default axiosInstace ;