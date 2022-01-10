import React, { useContext } from 'react';
import { ThemeContext, themes } from '../theme-context';
import '../App.css';

const ThemedSection = (props) => {
    const { theme } = useContext(ThemeContext);

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
