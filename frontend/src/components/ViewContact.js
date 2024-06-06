import React from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

export default function ViewContact()
{
    const navigate = useNavigate();
    const onCancel= ()=>{
        navigate("/");
      }
    return(
        <div>
            <h1>view component</h1>
            <button onClick={onCancel}>Back</button>
        </div>
    )
}