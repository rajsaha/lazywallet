import {createContext} from 'react';

const ThemeContext = createContext({
    appTheme: 'light',
    setTheme: () => {}
});

export default ThemeContext;