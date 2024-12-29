import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
      const [dark, setDark] = useState(false);
      
      const themes = {
            light: {
                  background: '#fff',
                  color: '#000'
            },
            dark: {
                  background: '#000',
                  color: '#fff'
            }
      }

      const themeInfo = {
            themes,
            dark,
            setDark
      }


      return <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
};

export default ThemeProvider;