import { Link } from "react-router-dom";
import LightHouseIcon from "../assets/Icons/Logos/SmallPNGs/LighthouseLightBlue.png";
import ServiceIcon from "./ServiceIcon";

const SERVICES = [
  {
    name: "Assessment & Placement",
    path: "/assesment-placement"
  },
  {
    name: "Intervention",
    path: "/intervention"
  },
  {
    name: "Sober Coaching",
    path: "/sober-coaching"
  },
]

const ServiceLink = (props) => {
  return (
    <Link className="w-1/4 relative rounded-full bg-blueGray-300 hover:bg-blueGray-400" to={props.path}>
      <ServiceIcon />
      <h2 className="text-white absolute w-full text-center text-xl font-bold uppercase" style={{top: "47%"}}>{props.name}</h2>
    </Link>
  )
}


const ServiceLinks = () => {
  return (
    <div className="flex flex-row justify-evenly py-1/12">
      {SERVICES.map(el => 
        <ServiceLink path={el.path} name={el.name} />  
        )}
    </div>
  )
}

export default ServiceLinks;