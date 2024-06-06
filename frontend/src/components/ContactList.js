import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList()
{
    return(
        <div>
            <h1>List component</h1>
            <div className='contacts'>
        <ContactCard 
            img = "/logo.png"
            name = "Sai Dinesh"
            phone = "6304720562"
            email = "kavilisaidinesh@gmail.com"
        />
        <ContactCard 
            img = "/logo.png"
            name = "Sai Dinesh"
            phone = "6304720562"
            email = "kavilisaidinesh@gmail.com"
        />
        </div>
        </div>
    )
}