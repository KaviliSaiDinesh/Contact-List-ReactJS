import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { ContactService } from "../services/ContactService";
import Spinner from "./Spinner";



export default function ViewContact()
{
    let {contactId} = useParams();
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/contacts/edit/${contactId}`);
      };

    let [state, setState] = useState({
        loading : false,
        contact : {},
        errorMessage : ''
    });

    useEffect( ()=> {
        const fetchContact = async () => {
        try{
            setState( {...state , loading : true});
            let response =  await ContactService.getContact(contactId);
            setState({
                ...state,
                loading: false,
                contact : response.data
            })
        }
        catch(error){
            setState({
                ...setState,
                errorMessage : error.errorMessage
            });

        }
    };
    fetchContact();
    }, [contactId]);
     
    let {loading, contact, errorMessage} = state;
    const onCancel= ()=>{
        navigate("/");
      }
    const handleDelete =  async (contactId) => {
        try{
            let response = await ContactService.deleteContact(contactId);
            if(response)
            {
                setState({...state, loading : true})
                let response = await ContactService.getAllContacts();
                setState({
            ...state,
            loading : false,
            contact :  response.data
            
        });
        navigate(`/`);
        }
        }catch(error)
        {
            setState({
                ...state,
                errorMessage : error.errorMessage
            })
        }
      };
    return(
        <React.Fragment>

            <div className="view-contact">
            <h2>Contact Details</h2>
                { loading ? <Spinner /> : 
                <React.Fragment>
                {Object.keys(contact).length > 0 && 
                    
                <div className="contact-card">
                {/* <img src={contact.imageUrl} alt={contact.name} className="contact-image" /> */}
                
                <h2>{contact.name}</h2>
                <p><strong>Mobile:</strong> {contact.mobile}</p>
                <p><strong>Designation:</strong> {contact.designation}</p>
                <p><strong>Company:</strong> {contact.company}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                </div>}
                </React.Fragment>}  
                  
            </div>
            <div className="button-group">
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={() =>handleDelete(contactId)}>Delete</button>
            <button className="back-button" onClick={onCancel}>Back</button>

            </div>
            
        </React.Fragment>
    )
}