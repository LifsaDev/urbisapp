import React, { createContext, useContext, useState } from 'react';

const FlashContext = createContext();

export const useFlash = () => useContext(FlashContext);

export const FlashProvider = ({ children }) => {
  const [flash, setFlash] = useState(false);

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 1000);  
  };

  return (
    <FlashContext.Provider value={{ flash, triggerFlash }}>
      {children}
    </FlashContext.Provider>
  );
};
