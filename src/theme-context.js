import React from 'react';
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const THEME_MODE = {
    DEFAULT: 'dark',
    DARK: 'dark',
    LIGHT: 'light'
}

export const ThemeContext = React.createContext(
    THEME_MODE.DARK // default value
);
