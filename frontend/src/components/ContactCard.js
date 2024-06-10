import React, {useState} from "react"
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from "../services/ContactService";


export default function ContactCard(props) {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/contacts/edit/${props.id}`);
      };
    
      const handleDelete =  async (contactId) => {
        try{
            let response = await ContactService.deleteContact(contactId);
            if(response)
                navigate('/');

        }catch(error)
        {
            console.log(error);
            

        }
        

      };

    return (
        <div className="contact-card-list" >
            <div className="contact-card-header">
            {/* <img src={props.img} alt={`${props.name}`} /> */}
            <FontAwesomeIcon
            icon={faEllipsisV}
            className="three-dots-icon"
            onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
            <div className="options-dropdown">
                <p onClick={handleEdit}>Edit</p>
                <p onClick={() =>handleDelete(props.id)}>Delete</p>
            </div>
            )}
            </div>
            <div className="contact-card-details" onClick={()=> {navigate(`/contacts/view/${props.id}`)}}>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="/telephone.png" alt="telephone-icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="/mail.png" alt="mail-icon" />
                <p>{props.email}</p>
            </div>
            </div>
        </div>
    )
}
