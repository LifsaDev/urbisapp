import { useEffect, useCallback, useState } from 'react';
import { clearSecureStorage } from './secureStorage';

const INACTIVITY_TIME_LIMIT = 30 * 60 * 1000; 
const CHECK_INTERVAL =  2 * 60 * 1000;   

const useAutoLogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const logout = useCallback(() => {
    clearSecureStorage();
    localStorage.removeItem('lat');
    setIsLoggedOut(true);   
    window.location.href = '/';   
  }, []);

  const updateActivity = useCallback(() => {
    const currentTime = new Date().getTime();
    localStorage.setItem('lat', currentTime.toString());
  }, []);

  const checkInactivity = useCallback(() => {
    if (isLoggedOut) return;  
    const lastActiveTime = parseInt(localStorage.getItem('lat'), 10);
    const currentTime = new Date().getTime();
    if (currentTime - lastActiveTime > INACTIVITY_TIME_LIMIT) {
      logout();   
    }
  }, [logout, isLoggedOut]);

  useEffect(() => {
    if (isLoggedOut) return;  

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    const debouncedUpdateActivity = debounce(updateActivity, 200);   
    
    events.forEach(event => {
      window.addEventListener(event, debouncedUpdateActivity);
    });

    const interval = setInterval(checkInactivity, CHECK_INTERVAL);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, debouncedUpdateActivity);
      });
      clearInterval(interval);
    };
  }, [isLoggedOut, checkInactivity, updateActivity]);

  return isLoggedOut;   
};

// Debounce utility function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useAutoLogout;