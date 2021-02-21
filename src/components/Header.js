import MenuDropdown from "./MenuDropdown"
import HomeIcon from '@material-ui/icons/Home';
import Script from '../assets/Icons/Logos/SmallPNGs/Script.png'
import { Link, Route } from "react-router-dom";

export function Header() {
  const StyledLink = ({to, children}) => 
  <Link className="no-underline text-white hover:font-semibold cursor-pointer px-4 text-lg uppercase text-blueGray-1" to={to}>
    {children}
  </Link>

  return (
    <div className="py-4 px-5">
      <header className="flex flex-row justify-between items-center">
        <Link to="/" className="w-1/8">
          <img className="object-cover" src={Script} />
        </Link>
        <nav className="hidden lg:flex">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/interventions">Services</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
        </nav>
        <div className="lg:hidden">
          <MenuDropdown />
        </div>
      </header>
    </div>
  );
}