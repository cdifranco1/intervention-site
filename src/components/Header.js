import MenuDropdown from "./MenuDropdown";
import HomeIcon from '@material-ui/icons/Home';
// import { ServicesDropdown } from "./MenuDropdown";
import ServicesDropdown from "./DropdownV2";
import Script from '../assets/Icons/Logos/SmallPNGs/Script.png'
import { Link, Route } from "react-router-dom";

export const StyledLink = ({to, children}) => 
  <Link className="no-underline hover:font-semibold cursor-pointer px-4 text-lg uppercase text-blueGray-1" to={to}>
    {children}
  </Link>

export function Header() {

  return (
    <div className="py-4 px-5">
      <header className="flex flex-row justify-between items-center">
        <Link to="/" className="w-2/6 md:w-1/8">
          <img className="object-cover" src={Script} />
        </Link>
        <nav className="hidden lg:flex">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <ServicesDropdown />
          <StyledLink to="/blog">Blog</StyledLink>
          <StyledLink to="/resources">Resources</StyledLink>
        </nav>
        <div className="lg:hidden">
          <MenuDropdown />
        </div>
      </header>
    </div>
  );
}