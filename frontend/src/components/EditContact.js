import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const EditContact = () => {

  const history = useNavigate();



  const onCancel=()=>{
    history('/');
  }


  const handleSubmit = (e) => {
    // e.preventDefault();
    // const updatedContact = { name, number };
    // fetch(`http://localhost:8000/contacts/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedContact),
    // })
    //   .then(response => response.json())
    //   .then(() => {
    //     // Redirect to the contact list
    //     history.push('/');
    //   })
    //   .catch(error => console.error('Error updating contact:', error));
  };
  

  return (
    <div>
      <h2>Edit Contact</h2>
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
};

export default EditContact;
