import axios from "axios";

const request = axios.create({baseURL:import.meta.env.VITE_API_URL})
request.interceptors.request.use(
  (config)=>{
    config.headers = {
      ...config.headers,
      Authorization:"Barer tokentokentoken"
    };
    return config;
  },
  (error)=>{
    return Promise.reject(error);
});

export {request}