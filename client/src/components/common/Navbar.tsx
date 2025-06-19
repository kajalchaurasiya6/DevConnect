import { useTheme } from "../../context/ThemeContext";
import { Bars3Icon, MoonIcon, PowerIcon, SunIcon, UserCircleIcon } from "@heroicons/react/24/outline";

type NavbarProps = {
   isOpen: boolean;
   toggleSidebar:()=>void;
}
const Navbar = ({ toggleSidebar }: NavbarProps) => {
   const { theme, toggleTheme } = useTheme();
   return (
      <nav className={`w-full h-16   fixed top-0 left-0 right-0 dark:bg-gray-800 bg-slate-100 bg-opacity-10 flex items-center justify-between px-4 border-b-[0.001rem] dark:border-gray-100 border-gray-300`}>
          <div className="flex gap-4  w-64 items-center h-16">
                <button onClick={toggleSidebar} className="relative  group text-[#3c3b3b] dark:text-white">
                    <Bars3Icon className="h-6 w-6" />
                </button>
                <h2 className={`text-lg font-bold font-serif text-[#3c3b3b] dark:text-white transition-opacity duration-300`}>
                    Dev Connect
                </h2>

            </div>
         <div className="flex items-center gap-4">
            <button onClick={toggleTheme} title="Theme Toggle" aria-label="Theme Toggle">
                {theme == 'dark' ? (
            <SunIcon className="h-7 w-7 text-yellow-300" />
          ) : (
            <MoonIcon  aria-label="Theme Toggle" className="h-7 w-7 text-slate-800" />
          )}
            </button>
            {/* <SunIcon className="h-7 w-7 text-slate-200" /> */}
            <button>
               <UserCircleIcon title="User Profile" aria-label="User Profile" className="h-8 w-8 text-slate-800 dark:text-slate-100" />
            </button>
            <button>
               <PowerIcon title="Logout" aria-label="Logout" className="h-7 w-7 text-slate-800 dark:text-slate-100" />
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
