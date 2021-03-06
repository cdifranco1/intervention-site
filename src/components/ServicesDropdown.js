import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants/content";
// import ROUTES from "../constants/routes.json";

const ServiceLink = ({onClick, path, children}) => {
  return (
    <li onClick={onClick}>
      <Link className="hover:bg-blueGray-100 py-1 px-2 block text-blueGray-1 w-full" to={path}>{children}</Link>
    </li>
  )
};

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const anchorEl = useRef(null);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => setIsOpen(!isOpen), 1);

    window.addEventListener('click', handleClickAway);
  };

  return (
    <>
      <span ref={anchorEl} className="no-underline hover:font-semibold cursor-pointer px-4 text-lg uppercase text-blueGray-1" onClick={handleClick}>Services</span>
      <Popper anchorEl={anchorEl} isOpen={isOpen} />
    </>
  );
};


export const Popper = (props) => {

  const handleClick = (e) => {
    if (props.context === "mobile"){
      props.handleClose(e);
    }
  }

  const getPos = (el) => {
    const position = el.current.getBoundingClientRect()
    if (props.context === "mobile"){
      return ({
        top: `${position.top + 100}px`,
        left: `${position.left - 225}px`
      })
    }

    return {
      top: `${position.top + 35}px`,
      left: `${position.left - 50}px`
    }
  }

  return (
    <>
    {props.isOpen && (
      <div className="bg-white rounded-md shadow-2xl w-48 sm: overflow-hidden py-3" style={{zIndex: 2000, position: "absolute", top: getPos(props.anchorEl).top, left: getPos(props.anchorEl).left, boxShadow: "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"}}>
        <ul>
          {SERVICES.map(el => 
            <ServiceLink onClick={handleClick} path={`${el.route}`}>{el.serviceName}</ServiceLink>  
            )}
        </ul>
      </div>
    )}
    </>
  )
}

export default ServicesDropdown;