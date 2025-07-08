import { HomeIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const baseClasses = 'flex items-center p-2 rounded-md space-x-2 dark:text-white text-gray-800 transition-all duration-300';
const activeClasses = 'bg-gray-500 bg-opacity-15';

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div
      className={`dark:bg-gray-800 bg-[#a9edcc] border-r dark:border-gray-600 border-gray-400  shadow-md fixed top-16 left-0 h-full transform transition-all duration-300 ease-in-out ${isOpen ? "w-full md:w-64" : "w-16"
        }`}
    >
      <nav className="flex flex-col space-y-4 p-2 overflow-y-auto">
        {[
          { to: '/', label: 'Home', icon: HomeIcon },
          { to: '/profile', label: 'Profile', icon: UserIcon },
          { to: '/settings', label: 'Settings', icon: Cog6ToothIcon },
        ].map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : ''}`
            }
          >
            <Icon className="h-6 min-w-6" aria-hidden="true" />
            <span
              className={`transition-all duration-300 origin-left ${isOpen ? 'opacity-100 scale-100 ml-2' : 'opacity-0 scale-0 ml-0'
                }`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
