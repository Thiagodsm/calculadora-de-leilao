import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { Menu } from 'lucide-react';
import { Context, useContext } from "react";
import * as Icon from 'react-feather'
import { DarkModeSwitch} from 'react-toggle-dark-mode';
import { ThemeContext } from "./Provider";
import SidebarMenu from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate =  useNavigate();
    const theme = useContext(ThemeContext);

    const onDarkModeToggle = (e: boolean) => {
        theme?.setTheme(e ? 'dark' : 'light');
    }

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/'); // Agora usando navigate em vez de useRouter
    }

  return (
        <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary dark:bg-background dark:text-white text-sm py-4 dark:border-gray-600 border-b border-gray-600">
            <nav className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <div className="sm:hidden">
                            <Sheet>
                                <SheetTrigger className='text-white mt-2'><Menu /></SheetTrigger>
                                <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                                    <SheetHeader>
                                        <SheetTitle className='text-left text-xl font-bold ml-3'>Calculajá</SheetTitle>
                                        <SheetDescription>
                                            <SidebarMenu />
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <a className="flex-none text-xl ml-4 font-semibold text-white" href="/">Calculajá</a>
                    </div>
                    <div className="flex items-center">
                        <DarkModeSwitch
                            className='mr-2 text-white sm:block'
                            checked={theme?.theme === 'dark'}
                            onChange={onDarkModeToggle}
                            size={20} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="font-medium text-white" href="#" aria-current="page">Username</a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onClick={() => logout()} className="text-red-400 py-2">
                                    <span><Icon.LogOut size={15} className="mr-2" /></span> Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </header>
    );
}
