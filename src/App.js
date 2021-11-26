import React, { useState } from 'react';
import { THEME_MODE, ThemeContext, themes } from './theme-context';
import ThemedSection from './ThemedSection/ThemedSection';
import Checkbox from './Checkbox/Checkbox';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState(THEME_MODE.DEFAULT);
    const toggleTheme = () => {
        const newTheme = (theme === 'dark')
            ? 'light'
            : 'dark';
        setTheme(newTheme);
    }
    return (
        <ThemeContext.Provider value={theme}>
            <ThemedSection>
                <span>Section with Theme Consumer</span>
                <Checkbox toggleTheme={toggleTheme}/>
            </ThemedSection>
            <section className="Section">Section without Theme Consumer</section>
        </ThemeContext.Provider>
    );
}

export default App;
