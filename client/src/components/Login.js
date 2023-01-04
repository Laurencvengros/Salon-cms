import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Container from 'react-bootstrap/esm/Container';



import Auth from '../utils/auth';

const Login = (props) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    try {
      const { data } = await login({
        variables: { ...userData},
      });

      Auth.login(data.login.token);
      console.log('success')
    } catch (e) {
      console.error(e);
      console.log('error loggin in')
    }


    // clear form values
    setUserData({
      email: '',
      password: '',
    });
  };

  return (
    <Container>
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header p-2" style={{backgroundColor:'#B19C8D', color:'white', borderColor:'#B19C8D'}}>Login</h4>
          <div className="card-body">
            {data ? (
              <Link to="/">back to the homepage.</Link>
            ) : (
              
              <form onSubmit={handleFormSubmit}>
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
              Don't have an account? <a href="/signup" style={{ color:'#706E51'}}> sign up here</a>
            </p>
        </div>
      </div>
    </main>
    </Container>
  );
};

export default Login;
