import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    // Submit logic
  };

  const onCancel= ()=>{
    navigate("/");
  }


  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Mobile Number" required />
        <input type="text" placeholder="Image URL"  />
        <input type="text" placeholder="Designation" />
        <input type="text" placeholder="Company"  />
        <input type="email" placeholder="Email" required />
        <div>
        <button type="submit">Submit</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}