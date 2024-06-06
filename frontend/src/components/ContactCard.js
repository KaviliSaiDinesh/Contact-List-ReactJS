import React, {useState} from "react"
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


export default function ContactCard(props) {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate("/contacts/edit/id");
      };
    
      const handleDelete = () => {
        // Implement delete logic here
        // Example: props.onDelete(props.id);
      };

    return (
        <div className="contact-card">
            <div className="contact-card-header">
            <img src={props.img} alt={`${props.name}`} />
            <FontAwesomeIcon
            icon={faEllipsisV}
            className="three-dots-icon"
            onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
            <div className="options-dropdown">
                <p onClick={handleEdit}>Edit</p>
                <p onClick={handleDelete}>Delete</p>
            </div>
            )}
            </div>
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
    )
}
