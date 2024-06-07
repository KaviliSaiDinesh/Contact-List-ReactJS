import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ContactService } from '../services/ContactService';
import Spinner from './Spinner';
const EditContact = () => {

  const navigate = useNavigate();

  let {contactId} = useParams();

  let [state, setState] = useState({
    loading : false,
    contact : {
      name : "",
      mobile : "",
      designation : "",
      company : "",
      email : ""
    },
    errorMessage : ''
  })
  useEffect( ()=>{
    const fetchContact =  async () => {
    try{
      setState({ ...state, loading:true});
      let response = await ContactService.getContact(contactId);
      setState({
        ...state,
        loading : false,
        contact : response.data
      })

    }
    catch(error)
    {
      setState({
        ...state,
        errorMessage : error.errorMessage
      })

    }
  };
  fetchContact();

}, [contactId]);
let {loading, contact, errorMessage} = state;



  const onCancel=()=>{
    navigate('/');
  }

  const upateInput = (event) =>{
    setState({
      ...state,
      contact :{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    })
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try
    {
        let response = await ContactService.updateContact(state.contact, contactId);
        if(response)
          {
            navigate(`/`, {replace : true});
          }

    }catch(error){
        setState({
          ...state,
          errorMessage : error
        });
        navigate(`/contacts/edit/${contactId}`, {replace : false});

    }

  };
  

  return (

    <React.Fragment>
        {loading ? <Spinner /> :
            <div>
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name= "name" value={contact.name} onChange={upateInput}/>
              <input type="text" name ="mobile" value={contact.mobile} onChange={upateInput}/>
              {/* <input type="text" placeholder="Image URL"  /> */}
              <input type="text" name="designation" value={contact.designation} onChange={upateInput}/>
              <input type="text" name="company" value={contact.company} onChange={upateInput} />
              <input type="email" name="email" value={contact.email} onChange={upateInput}/>
              <div>
              <button type="submit">Update</button>
              <button onClick={onCancel}>Cancel</button>
              </div>
            </form>
          </div>

        }

    </React.Fragment>

  );
};

export default EditContact;
