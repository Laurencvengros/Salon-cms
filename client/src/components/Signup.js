import React, { useState } from 'react';
import Auth from '../utils/auth';
import Container from 'react-bootstrap/esm/Container';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';




const SignUp = () => {

  const [userData, setUserData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    salonName: ''
  });
  
    const[ addUser, {error, data}] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({...userData, [name]: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userData)


    try {
      const { data } =await addUser({variables: {...userData}});
      console.log(data)
      Auth.login(data.addUser.token);
    }catch(error){
      console.error(error)
    }

    setUserData({
      name: '',
      email: '',
      password: '',
      salonName: '',
    });
  };


   return (
    <Container>
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header p-2" style={{backgroundColor:'#B19C8D', color:'white', borderColor:'#B19C8D'}}>Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success!
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input form-control mb-3"
                  placeholder="Your name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input form-control mb-3"
                  placeholder="Your Salon Name"
                  name="salonName"
                  type="text"
                  value={userData.salonName}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input form-control mb-3"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input form-control mb-3"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer', backgroundColor:'#B19C8D', borderColor:'#B19C8D', color:'white' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
          <p className="forgot-password text-right" style={{paddingLeft:'10pt'}}>
              Already have an account? <a href="/"> log in here</a>
            </p>
        </div>
      </div>
    </main>
    </Container>
  );
};

export default SignUp;