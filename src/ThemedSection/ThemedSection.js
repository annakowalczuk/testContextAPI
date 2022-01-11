import React from 'react';
import { themes, useThemeContext } from '../Theme/ThemeContext';
import '../App.css';

const ThemedSection = (props) => {
    const { theme } = useThemeContext();

    return (
        <section style={{
            backgroundColor: themes[theme].background,
            color: themes[theme].foreground,
        }} className="Section">
            {props.children}
        </section>
    );
};

export default ThemedSection;
