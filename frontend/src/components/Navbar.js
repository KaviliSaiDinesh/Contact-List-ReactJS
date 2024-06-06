import React from "react";
import {  useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";



export default function Navbar(){
    const navigate = useNavigate();

    const handleAddContactClick = () => {
        navigate("/contacts/add");
    }

    return (
        <nav>
            <h2 className="contacts-title">Contacts</h2>
            <SearchBar />
            <button className="add-button" onClick={handleAddContactClick}> 
            <i className="fas fa-user-plus"></i>New Contact</button>
        </nav>
    )
}