import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [ state, setState ] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleFormChange = (e) => {
    setState({
      ...state, 
      [e.target.name] : e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_195kjs9", "contact_form", state, "user_QmOpOMxPzbv3nPEhopp5T");
  }


  return (
    <div className="mt-3">
      <h4 className="text-2xl font-bold">Message Us</h4>
      <p className="font-semibold">Please fill out the form below and we will quickly be in touch.</p>
      <form className="flex flex-col text-black" onSubmit={handleFormSubmit}>
        <input onChange={handleFormChange} value={state.user_name} name="user_name" className="my-2 p-2 rounded-sm focus:outline-none focus:ring" placeholder="Name"></input>
        <input onChange={handleFormChange} value={state.user_email} name="user_email" className="my-2 p-2 rounded-sm focus:outline-none focus:ring" placeholder="Your email address"></input>
        <textarea onChange={handleFormChange} value={state.message} name="message" rows="4" placeholder="Message" className="my-2 p-2 rounded-sm focus:outline-none focus:ring"></textarea>
        <button type="submit" className="px-2 py-2 my-2 bg-green-500 hover:bg-green-700 rounded-md focus:outline-none focus:ring text-white font-semibold shadow-md">SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact;