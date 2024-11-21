import React, { createContext, useContext, useRef } from 'react';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const worksRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <NavContext.Provider value={{ homeRef, aboutRef, experienceRef, worksRef, techRef, contactRef }}>
      {children}
    </NavContext.Provider>
  );
};
