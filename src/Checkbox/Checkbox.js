import React, { useState } from 'react';

const Checkbox = ({ toggleTheme }) => {
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
