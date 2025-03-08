import axios from 'axios';
 
const Backend_URL = "https://urbis-api-fkc7b8atdnhhhhd5.westeurope-01.azurewebsites.net/api/"//import.meta.env.VITE_URBIS_API_URL;
const Urbis_App_URL ="https://app-urbis.com/" //import.meta.env.VITE_URBIS_APP_URL;
 
const api = axios.create({
  baseURL: Backend_URL,
  headers: {'Content-Type': 'application/json',},
});
 
 
const demo_request_URL = '/demo-requests/';
 
export {
    api,
    Urbis_App_URL,
    demo_request_URL,
}