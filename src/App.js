import React from 'react';
import ThemedSection from './ThemedSection/ThemedSection';
import Checkbox from './Checkbox/Checkbox';
import ThemeProvider from './Theme/ThemeProvider';
import CappingController from './Theme/CappingController';

const App = () => {

    return (
        <ThemeProvider>
            <CappingController>
                <ThemedSection>
                    <span>Check the box to change the theme.</span>
                    <Checkbox/>
                </ThemedSection>
            </CappingController>s
        </ThemeProvider>
    );
};

export default App;
