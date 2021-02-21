import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Contact from './Contact';



const Footer = () => {
  return (
    <div className="py-10 px-5 bg-primary-blue text-white">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col md:justify-evenly md:items-center">
          <h3 className="py-2 inline border-b self-center border-white text-3xl text-center uppercase font-bold tracking-wide">Get in Touch</h3>
          <div className="flex flex-col my-2 w-full">
            <div className="flex items-center my-3">
              <PhoneIcon fontSize="large" />
              {/* <p className="text-lg font-bold uppercase">Phone</p> */}
              <a className="no-underline uppercase px-2" href="tel:847-894-4971">(847) 894-4971</a>        
            </div>
            <div className="flex items-center my-2">
              <MailOutlineIcon fontSize="large" />
              {/* <p className="text-lg font-bold uppercase">Email</p> */}
              <a className="no-underline uppercase px-2" href="mailto:tylerfahey3@gmail.com?subject=Intervention Information Request">tylerfahey3@gmail.com</a>        
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default Footer;