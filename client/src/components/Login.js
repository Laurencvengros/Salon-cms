

// const Login = (props) => {
//   const [userData, setUserData] = useState({ email: '', password: '' });
//   const [login, { error, data }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(userData);
//     try {
//       const { data } = await login({
//         variables: { ...userData},
//       });

//       Auth.login(data.login.token);
//       console.log('success!')
//     } catch (e) {
//       console.error(e);
//       console.log('error logging in')
//     }


//     // clear form values
//     setUserData({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//   <React.Fragment>
//     <Container className="container">
//       <main>
//         <div className='card'>
//             <h3 className="p-2">Login</h3>
//             <div className="card-body mb-3">
//               {data ? (
//                 <Link to="/home">back to the homepage!</Link>
//               ) : (
//                 <form onSubmit={handleFormSubmit}>

//                   <div className="mb-3">
//                     <label> Email Address: </label>
//                       <input
//                         className="form-input form-control"
//                         placeholder="Your email"
//                         name="email"
//                         type="email"
//                         value={userData.email}
//                         onChange={handleInputChange}
//                       />
//                   </div>

//                   <div className="mb-3">
//                     <label> Password: </label>
//                   <input
//                     className="form-input form-control"
//                     placeholder="******"
//                     name="password"
//                     type="password"
//                     value={userData.password}
//                     onChange={handleInputChange}
//                   />
//                   </div>

//                   <div className="d-grid">
//                     <button
//                       className="btn btn-info"
//                       style={{ cursor: 'pointer' }}
//                       type="submit">
//                       Submit
//                     </button>
//                   </div>

//                 </form>
                
//               )}

//               {error && (
//                 <div className="my-3 p-3 bg-danger text-white">
//                   {error.message}
//                 </div>
//               )}
//             </div>

            
//               <p style={{ paddingLeft:'15pt'}}>
//                 Don't have an account? <a href="/signup"> sign up here</a>
//               </p>
            

//           </div>
//       </main>
//     </Container>
// </React.Fragment>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <Link to="/">back to the homepage.</Link>
            ) : (
              
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
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
          <p className="forgot-password text-right">
              Don't have an account? <a href="/signup"> sign up here</a>
            </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
