import React, { useContext } from 'react';

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
    LIGHT: 'light',
};

export const ThemeContext = React.createContext({
    theme: THEME_MODE.DARK, // default value
    toggleTheme: () => {
    },
    setThemeLight: () => {
    },
});

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider')
    }
    return context
}
