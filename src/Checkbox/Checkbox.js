import React, { useState } from 'react';
import { useThemeContext } from '../Theme/ThemeContext';

const Checkbox = () => {
    const { toggleTheme } = useThemeContext();
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        toggleTheme();
        console.log('theme toggled')
    };

    return (
        <label>
            <input type="checkbox"
                   checked={checked}
                   onChange={handleChange}/>
            checkbox
        </label>
    );
};

export default Checkbox;
