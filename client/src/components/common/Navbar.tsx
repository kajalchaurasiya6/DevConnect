import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Bars3Icon, MoonIcon, PowerIcon, SunIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/context/AuthContext";

type NavbarProps = {
   isOpen: boolean;
   toggleSidebar: () => void;
}
const Navbar = ({ toggleSidebar }: NavbarProps) => {
   const { theme, toggleTheme } = useTheme();
   const { logout } = useAuth();
   const navigate = useNavigate();
   const handleLogout = () => {
      logout();
      navigate('/login');
   }
   return (
      <nav className={`w-full h-16   fixed top-0 left-0 right-0 dark:bg-gray-800 bg-[#9bd1b7] shadow-sm  flex items-center justify-between px-4 border-b-[0.001rem] dark:border-gray-600 border-gray-400`}>
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
                  <MoonIcon aria-label="Theme Toggle" className="h-7 w-7 text-slate-800" />
               )}
            </button>
            <button>
               <UserCircleIcon title="User Profile" aria-label="User Profile" className="h-8 w-8 text-slate-800 dark:text-slate-100" />
            </button>
            <button onClick={handleLogout}>
               <PowerIcon title="Logout" aria-label="Logout" className="h-7 w-7 text-slate-800 dark:text-slate-100" />
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
