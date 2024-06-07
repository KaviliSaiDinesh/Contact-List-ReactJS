import React, { useEffect, useState, useContext } from "react";
import ContactCard from "./ContactCard";
import { ContactService } from "../services/ContactService";
import { SearchContext } from "../SearchContext";
import Spinner from "./Spinner";


export default function ContactList()
{
    const { searchText } = useContext(SearchContext);
    let [state, setState] = useState({
        loading : false,
        contacts : [],
        errorMessage : ''
    });
    useEffect( ()=> {
        const fetchContacts = async () => {
        try{
            setState({...state, loading: true});
            let response = await ContactService.getAllContacts();
            setState({
                ...state,
                loading:false,
                contacts:response.data
            });
        }catch(error)
        {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
            
        }
    };
    fetchContacts();
    },[]);

    


    let {loading, contacts, errorMessage} = state;

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchText.toLowerCase())
      );
    return(
        <div>
            {
                loading ? <Spinner /> : 
                <React.Fragment>
                        <div className = 'contacts'>
                        {
                            filteredContacts.length > 0 &&
                            filteredContacts.map(contact => {
                                return (
                                    
                                    <ContactCard 
                                        // img = {contact.imgurl}
                                        id = {contact.id}
                                        name = {contact.name}
                                        phone = {contact.mobile}
                                        email = {contact.email}
                                    /> 
                                )
                            })
                        }
                        </div>

                </React.Fragment>
            }
            
        </div>
    )
}