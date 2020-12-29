import MenuDropdown from "./MenuDropdown"
import HomeIcon from '@material-ui/icons/Home';
import { Link, Route } from "react-router-dom";

export function Header() {
  return (
    <div className="p-4 bg-blue-300">
      <header className="flex flex-row justify-between items-center">
        <Link to="/">
          <button className="border-2 hover:bg-blue-400 focus:outline-none focus:ring p-2 rounded-full shadow-lg bg-blue-300">
            <HomeIcon />
          </button>
        </Link>
        <nav className="hidden lg:flex">
          <Link className="no-underline text-white hover:text-snow hover:text-gray-100 cursor-pointer px-3" to="/">Home</Link>
          <Link className="no-underline text-white hover:text-snow hover:text-gray-100 cursor-pointer px-3" to="/about">About</Link>
          <Link className="no-underline text-white hover:text-snow hover:text-gray-100 cursor-pointer px-3" to="/">Blog</Link>
          <Link className="no-underline text-white hover:text-snow hover:text-gray-100 cursor-pointer px-3" to="/">Resources</Link>
        </nav>
        <div className="lg:hidden">
          <MenuDropdown />
        </div>
      </header>
    </div>
  );
}