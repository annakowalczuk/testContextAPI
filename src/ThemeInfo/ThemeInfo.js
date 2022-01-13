import React from 'react';
import { useThemeContext } from '../Theme/ThemeContext';
import '../App.css';

const ThemeInfo = () => {
    const { theme } = useThemeContext();

    return (
        <span className="themeInfo">
            This is a {theme} theme.
        </span>
    );
};

export default ThemeInfo;
