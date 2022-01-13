import React from 'react';
import ThemedSection from './ThemedSection/ThemedSection';
import Checkbox from './Checkbox/Checkbox';
import ThemeProvider from './Theme/ThemeProvider';
import CappingController from './Theme/CappingController';
import ThemeInfo from './ThemeInfo/ThemeInfo';

const App = () => {

    return (
        <ThemeProvider>
            <CappingController>
                <ThemedSection>
                    <Checkbox/>
                    <ThemeInfo/>
                </ThemedSection>
            </CappingController>
        </ThemeProvider>
    );
};

export default App;
