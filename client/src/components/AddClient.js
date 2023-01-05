import { useState } from "react";
import { ADD_CLIENT } from "../utils/mutations";
import { useMutation } from "@apollo/client"

import Auth from '../utils/auth'



const AddClient = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [addClient, { error }] = useMutation(ADD_CLIENT);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newClient = { firstName, lastName, email, phone };
        const { data } = await addClient({
            variables: newClient
        })

        console.log(data);
        props.setClients(data.addClient.clients);
        props.onCancel()
    };

    return (
        <div className="create">
            <h2>Add A New Client</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone:</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                
                <button style={{marginRight: '100px'}}>Add Client</button>
            </form>
        </div>
    );
};
export default AddClient;
