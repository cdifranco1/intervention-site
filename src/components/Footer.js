import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Contact from './Contact';



const Footer = () => {
  return (
    <div className="p-2 bg-blue-300 text-white">
      <div>
        <h3 className="px-4 py-2 text-3xl text-center uppercase font-bold lg:text-left md:text-left">Get in Touch</h3>
        <div className="md:flex md:flex-row md:justify-evenly md:items-center">
          <div className="flex flex-col my-2 items-center md:flex md:flex-col lg:w-1/2 lg:flex lg:flex-row lg:justify-evenly">
            <div className="flex flex-col items-center my-3">
              <PhoneIcon fontSize="large" />
              <p className="text-lg font-bold uppercase">Phone</p>
              <a className="no-underline" href="tel:847-894-4971">(847) 894-4971</a>        
            </div>
            <div className="flex flex-col items-center my-2">
              <MailOutlineIcon fontSize="large" />
              <p className="text-lg font-bold uppercase">Email</p>
              <a className="no-underline" href="mailto:tylerfahey3@gmail.com?subject=Intervention Information Request">tylerfahey3@gmail.com</a>        
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Footer;