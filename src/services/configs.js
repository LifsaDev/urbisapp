import axios from 'axios';
 
const Backend_URL = import.meta.env.VITE_API_BASE_URL
const Urbis_App_URL = import.meta.env.VITE_URBIS_APP_URL

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