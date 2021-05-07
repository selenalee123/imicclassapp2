import { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import useTheme from './useTheme';

export default function useThemeStyle() {
    const { currentTheme } = useTheme();
    const backgroundStyle: ViewStyle = useMemo(
        () => ({
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentTheme?.primaryColor,
        }),
        [currentTheme],
    );

    const buttonBackgroundColor = useMemo(
        () => ({
            backgroundColor: currentTheme?.buttonColor,
        }),
        [currentTheme],
    );

    const textColor = useMemo(
        () => ({
            color: currentTheme?.textColor,
        }),
        [currentTheme],
    );
    return { buttonBackgroundColor, textColor, backgroundStyle }

}