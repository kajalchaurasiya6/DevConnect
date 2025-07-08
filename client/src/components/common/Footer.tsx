import { Link } from "react-router-dom"
interface SidebarProps {
    isOpen: boolean;
}
const Footer = ({ isOpen }: SidebarProps) => {
    return (
        <footer className={`dark:bg-slate-800 bg-[#9bd1b7] border-t dark:border-gray-600 border-gray-400  text-slate-200 transition-all duration-300 ease-in-out  h-16  px-3 fixed bottom-0 right-0 ${isOpen ? 'left-64' : 'left-16'}  text-xs md:text-sm  py-4`}>
            <div className="flex gap-3 justify-end dark:text-slate-100 text-gray-800 ">
                <p>© 2025 DevConnect |</p> <Link to="https://github.com/yourusername/devconnect" className="underline hover:text-white">GitHub</Link> <p>| Built with Vite + React</p>
            </div>
        </footer>)
}

export default Footer