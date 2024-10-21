import CryptoJS from 'crypto-js';

const SECRET_KEY = 'fNnSsOyXxegu1nFAcsq9q6TUO9ffU3Jy';  




const encrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};




export const setAccessToken = (token) => {
  const encrypted = encrypt(token);
  localStorage.setItem('eat', encrypted);
};

export const setRefreshToken = (token) => {
  const encrypted = encrypt(token);
  localStorage.setItem('ert', encrypted);
};

export const setUsername = (username) => {
  const encrypted = encrypt(username);
  localStorage.setItem('eu', encrypted);
};

export const setPermission = (permission) => {
  const encrypted = encrypt(permission);
  localStorage.setItem('upm', encrypted);
};

export const setManagerPhone = (phone) => {
  const encrypted = encrypt(phone);
  localStorage.setItem('mp', encrypted);
};

export const setManagerEmail = (email) => {
  const encrypted = encrypt(email);
  localStorage.setItem('me', encrypted);
};

export const setCommunityproject = (projectName) => {
  const encrypted = encrypt(projectName);
  localStorage.setItem('cp', encrypted);
};

 
export const getAccessToken = () => {
  const encrypted = localStorage.getItem('eat');
  return encrypted ? decrypt(encrypted) : null;
};

export const getRefreshToken = () => {
  const encrypted = localStorage.getItem('ert');
  return encrypted ? decrypt(encrypted) : null;
};

export const getUsername = () => {
  const encrypted = localStorage.getItem('eu');
  return encrypted ? decrypt(encrypted) : null;
};

export const getPermission = () => {
  const encrypted = localStorage.getItem('upm');
  return encrypted ? decrypt(encrypted) : null;
};


export const getManagerPhone = () => {
  const encrypted = localStorage.getItem('mp');
  return encrypted ? decrypt(encrypted) : null;
};

export const getManagerEmail = () => {
  const encrypted = localStorage.getItem('me');
  return encrypted ? decrypt(encrypted) : null;
};

export const getCommunityproject = () => {
  const encrypted = localStorage.getItem('cp');
  return encrypted ? decrypt(encrypted) : null;
};


export const clearSecureStorage = () => {
  localStorage.removeItem('eat');
  localStorage.removeItem('ert');
  localStorage.removeItem('eu');
  localStorage.removeItem('upm');
  localStorage.removeItem('mp');
  localStorage.removeItem('me');
  localStorage.removeItem('lat');
  localStorage.removeItem('cp');
};