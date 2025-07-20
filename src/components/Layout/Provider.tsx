import { ThemeProvider } from '../ui/theme-provider';

const Providers = ({children}: {children: React.ReactNode}) =>{
    return (
        <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
            {children}
        </ThemeProvider>
    )
}

export default Providers;