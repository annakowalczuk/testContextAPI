import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme-context';

const Checkbox = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        toggleTheme();
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
