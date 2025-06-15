import { Bars3Icon, MoonIcon, PowerIcon, UserCircleIcon } from "@heroicons/react/24/outline";

type NavbarProps = {
   isOpen: boolean;
   toggleSidebar:()=>void;
}
const Navbar = ({ toggleSidebar }: NavbarProps) => {
   return (
      <nav className={`w-full h-16   fixed top-0 left-0 right-0 bg-[#2f2f2f] flex items-center justify-between px-4 border-b-[0.001rem] border-gray-100`}>
          <div className="flex gap-4  w-64 items-center h-16">
                <button onClick={toggleSidebar} className="relative  group text-white">
                    <Bars3Icon className="h-5 w-5" />
                </button>
                <h2 className={`text-lg font-bold font-serif text-[#f5f5f5] transition-opacity duration-300`}>
                    Dev Connect
                </h2>

            </div>
         <div className="flex items-center gap-4">
            <MoonIcon title="Theme Toggle" className="h-7 w-7 text-slate-200" />
            {/* <SunIcon className="h-7 w-7 text-slate-200" /> */}
            <button>
               <UserCircleIcon title="User Profile" className="h-8 w-8 text-slate-200" />
            </button>
            <button>
               <PowerIcon title="Logout" className="h-7 w-7 text-slate-200" />
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
