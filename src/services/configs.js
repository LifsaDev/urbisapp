import axios from 'axios';
 
const Backend_URL = "https://urbis-api-fkc7b8atdnhhhhd5.westeurope-01.azurewebsites.net/api/"
const Urbis_App_URL = "https://www.urbisapp.com/";
 
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