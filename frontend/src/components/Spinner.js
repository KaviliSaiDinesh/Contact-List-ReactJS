import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Spinner()
{
    return(
        <React.Fragment>
            <div>
            <img className="spinner" src="/spinner.gif" alt= "loading"/>
            </div>
            

        </React.Fragment>
    )
}