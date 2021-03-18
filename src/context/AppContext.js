import { createContext } from "react";

const AppContext = createContext({
  appTheme: "light",
  setTheme: () => {},
});

export default AppContext;
