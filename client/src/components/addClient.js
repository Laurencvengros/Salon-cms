import React, { useState } from 'react';
import { ADD_CLIENT } from "../utils/mutations";
import { useMutation } from "@apollo/client"


import Auth from "../utils/auth";

const ClientForm = () => {
   const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


  const [addClient, {error}] =useMutation(ADD_CLIENT);

  const handleFormSubmit = async(_id) =>{
    // event.preventDefault();
    const newClient = { firstName, lastName, email, phone };
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    

    try{
      const data = await addClient({
        variables: {_id, newClient}
      });
      setFirstName('');
      setLastName('');
      setEmail('')
      setPhone('')
    }catch(err){
      console.error(err)
      console.log('error adding client')
    }
  }


// const AddClient = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [addClient, { error }] = useMutation(ADD_CLIENT);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newClient = { firstName, lastName, email, phone };
//     const { data } = await addClient({
//       variables: newClient
//     })

//     console.log(data);

  // };

  return (
    <div className="create">
      <h2>Add A New Client</h2>
    

      {Auth.loggedIn() ? (
            <form onSubmit={handleFormSubmit}>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <button>Add Client</button>
            </form>
        )  : (
      <p>
          You need to be logged in!
          
        </p>
    )}
    
    </div>
  );
};
export default ClientForm;
