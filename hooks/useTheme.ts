import { useCallback, useContext } from 'react';
import { ThemeContext, Theme, defaultTheme } from '../contexts/ThemeProvider';

export const BlackTheme: Theme = {
    buttonColor: 'gray',
    primaryColor: 'black',
    textColor: '#fff',
};

export default function useThem() {
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.theme;
    const setDefaultTheme = useCallback(
        () => themeContext?.setTheme?.(defaultTheme),
        [themeContext],
    );
    const setBlackTheme = useCallback(
        () => themeContext?.setTheme?.(BlackTheme),[themeContext],)
        return {themeContext, currentTheme,setDefaultTheme,setBlackTheme};
}