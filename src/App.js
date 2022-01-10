import React from 'react';
import ThemedSection from './ThemedSection/ThemedSection';
import Checkbox from './Checkbox/Checkbox';
import ThemeProvider from './ThemeProvider/ThemeProvider';

const App = () => {

    return (
        <ThemeProvider>
            <ThemedSection>
                <span>Check the box to change the theme.</span>
                <Checkbox/>
            </ThemedSection>
        </ThemeProvider>
    );
};

export default App;
