import axios from 'axios';
 
 
const isDevelopment = import.meta.env.MODE === 'development'
const Backend_URL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_DEV : import.meta.env.VITE_API_BASE_URL_PROD
const Urbis_App_URL =  isDevelopment ? import.meta.env.VITE_URBIS_APP_URL_DEV : import.meta.env.VITE_URBIS_APP_URL_PROD




const api = axios.create({
  baseURL: Backend_URL,
  headers: {'Content-Type': 'application/json',},
});
 
 
const demo_request_URL = '/DemoRequest/';
 

export {
    api,
    Urbis_App_URL,
    demo_request_URL,
     
}