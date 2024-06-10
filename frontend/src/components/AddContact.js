import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ContactService } from "../services/ContactService";

export default function AddContact() {
  const navigate = useNavigate();

  let [state, setState] = useState({
    loading : false,
    contact : {
      name : '',
      mobile : '',
      designation : '',
      company : '',
      email : ''
    },
    errorMessage : ''

  });

  const upateInput = (event) =>{
    setState({
      ...state,
      contact :{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    })
  };
  let {loading, contact, errorMessage} = state;
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    if (!validateEmail(contact.email)) {
      setState({
        ...state,
        errorMessage: 'Invalid email address'
      });
      return;
    }

    if (!validateMobile(contact.mobile)) {
      setState({
        ...state,
        errorMessage: 'Mobile number must be 10 digits'
      });
      return;
    }
    try
    {
        let response = await ContactService.createContact(state.contact);
        if(response)
          {
            navigate(`/`, {replace : true});
          }

    }catch(error){
        setState({
          ...state,
          errorMessage : error
        });
        navigate('/contacts/add', {replace : false});

    }
    
  };

  const onCancel= ()=>{
    navigate("/");
  }


  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name = "name" value = {contact.name} onChange={upateInput} placeholder="Name" required />
        <input type="text" name = "mobile" value = {contact.mobile} onChange={upateInput} placeholder="Mobile Number" required />
        {/* <input type="text" name = "name" value = {contact.name} onChange={upateInput} placeholder="Image URL"  /> */}
        <input type="text" name = "designation" value = {contact.designation} onChange={upateInput} placeholder="Designation" />
        <input type="text" name = "company" value = {contact.company} onChange={upateInput} placeholder="Company"  />
        <input type="email" name = "email" value = {contact.email} onChange={upateInput} placeholder="Email" required />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div>
        <button type="submit">Submit</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}