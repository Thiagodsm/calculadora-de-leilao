
import { ThemeProvider } from '../components/ui/theme-provider';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

export type ThemeProps = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);

const Providers = ({ children }: {children : React.ReactNode}) => {
    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const themeLocalStorage = localStorage.getItem('theme');
        if(themeLocalStorage){
            setTheme(themeLocalStorage);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            <ThemeProvider defaultTheme={'light'}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default Providers;