import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './lib/ThemeContext';

const ThemeProvider:FC = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT);
    const providerValues = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
