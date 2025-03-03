import axios from 'axios';

const isDevelopment = import.meta.env.MODE === 'development'
//variables
const Backend_URL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_DEV : import.meta.env.VITE_API_BASE_URL_PROD
const Urbis_App_URL = "https://www.urbisapp.com/"  //isDevelopment ? import.meta.env.VITE_URBIS_SITE_URL_DEV : import.meta.env.VITE_URBIS_SITE_URL_PROD
 
const api = axios.create({
  baseURL: "https://urbis-api-fkc7b8atdnhhhhd5.westeurope-01.azurewebsites.net/api/",
  headers: {'Content-Type': 'application/json',},
});
 
 
const demo_request_URL = '/demo-requests/';
 
export {
    api,
    Urbis_App_URL,
    demo_request_URL,
     
}