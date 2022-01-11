import React, { useState } from 'react';
import { THEME_MODE, ThemeContext } from '../Theme/ThemeContext';

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(THEME_MODE.DEFAULT);
    const toggleTheme = () => {
        const newTheme = (theme === 'dark')
            ? 'light'
            : 'dark';
        setTheme(newTheme);
    };
    const setThemeLight = () => {
        setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setThemeLight }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
