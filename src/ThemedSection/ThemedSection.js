import React, {useContext} from 'react';
import { ThemeContext, themes } from '../theme-context';
import '../App.css';

const ThemedSection = (props) => {

    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <section style={{backgroundColor: themes[theme].background, color: themes[theme].foreground}} className="Section">
                    {props.children}
                </section>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedSection;
