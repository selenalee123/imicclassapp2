import React, {PropsWithChildren, useMemo, useState} from 'react';

export type Theme = {
  textColor: string;
  buttonColor: string;
  primaryColor: string;
};

const defaultTheme: Theme = {
  textColor: 'white',
  buttonColor: 'green',
  primaryColor: 'white',
};

type ThemeContextType = {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: React.FC<PropsWithChildren<React.ReactNode>> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeValue = useMemo(() => ({theme, setTheme}), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};