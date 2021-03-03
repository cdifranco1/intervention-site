import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Contact from './Contact';



const ContactSection = () => {
  return (
    <div className="py-10 px-5 bg-primary-blue text-white">
      <div className="flex flex-col md:flex-row justify-around">
        
        <div className="flex flex-col md:justify-evenly md:items-center">
          <h3 className="py-2 px-4 inline border-b self-start border-white text-3xl text-center uppercase font-bold tracking-wide">Get in Touch</h3>
          <div className="flex flex-col my-2 w-full">
            <div className="flex items-center my-2">
              <div className="rounded-full bg-white p-2">
                <EmailIcon fontSize="large" style={{ color: "#444a60" }} />
              </div>
              <a className="no-underline uppercase px-2 ml-2" href="mailto:lighthouserecoveryllc@gmail.com?subject=Intervention Information Request">Lighthouserecoveryllc@gmail.com</a>
            </div>
            <div className="flex items-center my-3">
              <div className="rounded-full bg-white p-2">
                <PhoneIcon fontSize="large" style={{ color: "#444a60" }} />
              </div>
              <a className="no-underline uppercase px-2 ml-2" href="tel:847-894-4971">(847) 894-4971</a>        
            </div>
          </div>
        </div>

        <Contact />

      </div>
    </div>
  )
}

export default ContactSection;