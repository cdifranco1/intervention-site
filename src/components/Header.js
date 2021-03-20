import MenuDropdown from "./MenuDropdown";
import ServicesDropdown from "./ServicesDropdown";
import Script from '../assets/Icons/Logos/SmallPNGs/Main.png'
import { Link } from "react-router-dom";

export const StyledLink = ({to, children}) => 
  <Link className="no-underline hover:font-semibold cursor-pointer px-4 text-lg uppercase text-blueGray-1" to={to}>
    {children}
  </Link>

export function Header() {
  return (
    <div className="py-4 px-5">
      <header className="flex flex-row justify-between items-center">
        <div className="w-4/5 flex flex-row items-center">
          <Link to="/" className="w-2/5 md:w-1/5">
            <img className="object-cover" src={Script} />
          </Link>
          <div className="ml-2">
            <a className="no-underline uppercase px-2 text-blueGray-1 hover:font-semibold md:text-lg" href="tel:847-894-4971">(847) 894-4971</a>
          </div>
        </div>
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

// This is dead code right now
// If make this live, need to add into the header and separate other nav possibilities
// const MobileStyledLink = ({to, children}) =>
//   <Link to={to} className="py-8">{children}</Link>

// const MobileServicesDropdown = ({}) => {
//   return (
//     <div className="px-10">
//       <MobileStyledLink>Interventions</MobileStyledLink>
//       <MobileStyledLink>Sober Coaching</MobileStyledLink>
//       <MobileStyledLink>Assessment and Placement</MobileStyledLink>
//     </div>
//   )
// }

// export function MobileNav() {
//   return (
//     <div>
//       <nav className="hidden lg:flex">
//         <MobileStyledLink to="/">Home</MobileStyledLink>
//         <MobileStyledLink to="/about">About</MobileStyledLink>
//         <MobileServicesDropdown />
//         <MobileStyledLink to="/blog">Blog</MobileStyledLink>
//         <MobileStyledLink to="/resources">Resources</MobileStyledLink>
//       </nav>
//     </div>
//   )
// }