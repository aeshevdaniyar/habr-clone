import { useContext } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;
