import { createContext, useContext, useState } from "react";
export const UIContext = createContext();
export const UIProvider = ({ children }) => {
  const [ocultarMenu, setOcultarMenu] = useState(false);

  const showMenu = () => setOcultarMenu(false);
  const hideMenu = () => setOcultarMenu(true);

  const values = { hideMenu, showMenu, ocultarMenu };

  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a HomeProvider");
  }
  return context;
};
