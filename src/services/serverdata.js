import { api, multipartApi, refreshToken_URL, verifyToken_URL } from './configs';
import { getAccessToken, getRefreshToken, setAccessToken, clearSecureStorage } from '../pages/auth/secureStorage';
 

const setupConfig = (url, method, data, accessToken = null) => {
  const config = {
    method: method,
    url: url,
    data: data,
    headers: {},
  };

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

const handleRequest = async (config, apiInstance) => {
  try {
    const response = await apiInstance(config);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshAccessToken();
        setAccessToken(newAccessToken);
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        const response = await apiInstance(config);
        return response;
      } catch (refreshError) {
        throw refreshError;
      }
    } else {
      throw error;
    }
  }
};

const makeApiRequest = async (url, method, data = null) => {
  const accessToken = getAccessToken();
  const config = setupConfig(url, method, data, accessToken);
  return handleRequest(config, api);
};

const makeMultipartApiRequest = async (url, method, data = null) => {
  const accessToken = getAccessToken();
  const config = setupConfig(url, method, data, accessToken);
  return handleRequest(config, multipartApi);
};

const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await api.post(refreshToken_URL, { refresh: refreshToken });
    const newAccessToken = response.data.access;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh token', error);
    throw error; 
  }
};

const verifyAccessToken = async (accessToken) => {
  try {
    const response = await makeApiRequest(verifyToken_URL, "POST", { token: accessToken });
    if (response.status === 200 && Object.keys(response.data).length === 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Token verification failed', error);
    return false; 
  }
};

const checkAndHandleToken = async () => {
  const accessToken = getAccessToken();
  if (!accessToken){
    return
  }
  const isTokenValid = await verifyAccessToken(accessToken);
  if (!isTokenValid) {
    clearSecureStorage();
    window.location.href = '/'; 
  } 
};


export { makeApiRequest, makeMultipartApiRequest, checkAndHandleToken };
