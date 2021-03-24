import emailjs from 'emailjs-com';
import { useState } from 'react';

const INITIAL_STATE = {
  user_name: "",
  user_email: "",
  message: ""
};

const Contact = () => {
  const [ state, setState ] = useState(INITIAL_STATE);

  const handleFormChange = (e) => {
    setState({
      ...state, 
      [e.target.name] : e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_195kjs9", "contact_form", state, "user_QmOpOMxPzbv3nPEhopp5T");

    setState(INITIAL_STATE);
  }


  return (
    <div className="mt-3 md:w-1/2 p-4 bg-white">
      <h4 className="text-2xl font-semibold uppercase text-blueGray-2 text-center tracking-wider">Message Us</h4>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input onChange={handleFormChange} value={state.user_name} name="user_name" className="font-semibold my-2 p-2 rounded-sm focus:outline-none focus:ring border border-blueGray-2 shadow-inner text-blueGray-1" placeholder="NAME"></input>
        <input onChange={handleFormChange} value={state.user_email} name="user_email" className="font-semibold my-2 p-2 rounded-sm focus:outline-none focus:ring border border-blueGray-2 shadow-inner text-blueGray-1" placeholder="EMAIL"></input>
        <textarea onChange={handleFormChange} value={state.message} name="message" rows="4" placeholder="MESSAGE" className="font-semibold my-2 p-2 rounded-sm focus:outline-none focus:ring border border-blueGray-2 shadow-inner text-blueGray-1"></textarea>
        <button type="submit" className="px-2 py-2 my-2 bg-blueGray-400 hover:bg-blueGray-600 rounded-md focus:outline-none focus:ring text-white font-semibold shadow-md uppercase border">SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact;