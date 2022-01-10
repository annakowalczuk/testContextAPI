import React, { useState } from 'react';
import { THEME_MODE, ThemeContext } from '../theme-context';

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(THEME_MODE.DEFAULT);
    const toggleTheme = () => {
        const newTheme = (theme === 'dark')
            ? 'light'
            : 'dark';
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
