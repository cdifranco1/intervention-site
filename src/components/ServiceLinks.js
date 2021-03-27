import { useRef } from "react";
import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";
import { SERVICES } from "../constants/content";

const ServiceLink = (props) => {
  const containerRef = useRef(null);
  const h2Ref = useRef(null);

  const handleMouseEnter = () => {
    containerRef.current.style.backgroundColor = "rgba(203, 213, 225)";
    h2Ref.current.style.fontWeight = 700;
  }

  const handleMouseLeave = () => {
    containerRef.current.style.backgroundColor = "rgba(226, 232, 240)";
    h2Ref.current.style.fontWeight = 600;
  }

  return (
    <Link className="w-3/5 md:w-1/5 relative rounded-full bg-blueGray-200 mb-5" to={props.path}>
      <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="rounded-full">
        <ServiceIcon shadowType="md" />
        <h2 ref={h2Ref} className="text-blueGray-1 absolute w-full text-center text-xl font-semibold uppercase px-2" style={{top: "44%"}}>{props.name}</h2>
      </div>
    </Link>
  )
}


const ServiceLinks = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-evenly mb-12 mt-7">
      {SERVICES.map((el, i) => 
        <ServiceLink key={`${el}+${i}`} path={`${el.route}`} name={el.serviceName} />  
        )}
    </div>
  )
}

export default ServiceLinks;