import { createContext } from "react";

export const MyContext = createContext({
  isLogged: false,
  userName: "N/A",
});
