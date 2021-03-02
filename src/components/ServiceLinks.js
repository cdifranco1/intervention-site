import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";


const SERVICES = [
  {
    name: "Assessment & Placement",
    path: "/assessment-and-placement"
  },
  {
    name: "Intervention",
    path: "/interventions"
  },
  {
    name: "Sober Coaching",
    path: "/sober-coaching"
  },
]

const ServiceLink = (props) => {
  return (
    <Link className="w-3/5 md:w-1/4 relative rounded-full bg-blueGray-300 hover:bg-blueGray-400 mb-5" to={props.path}>
      <ServiceIcon />
      <h2 className="text-white absolute w-full text-center text-xl font-bold uppercase px-2" style={{top: "43%"}}>{props.name}</h2>
    </Link>
  )
}


const ServiceLinks = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-evenly mb-7 md:py-1/12">
      {SERVICES.map((el, i) => 
        <ServiceLink key={`${el}+${i}`} path={`/services${el.path}`} name={el.name} />  
        )}
    </div>
  )
}

export default ServiceLinks;