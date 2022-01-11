import React, { useEffect } from 'react';
import '../App.css';
import { useThemeContext } from './ThemeContext';

const CappingController = (props) => {
    const delay = 30000;
    const { toggleTheme, setThemeLight } = useThemeContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setThemeLight();
            console.log('Theme set to light by capping controller.')
        }, delay);
        return () => clearTimeout(timer);
    }, [toggleTheme, setThemeLight]);

    return (
        <div>
            <span className="cappingInfo">After half minute, the application will go to the light theme.</span>
            {props.children}
        </div>
    );
};

export default CappingController;
