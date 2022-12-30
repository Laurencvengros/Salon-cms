
// const SignUp = () => {

//   const [userData, setUserData] = useState({ 
//     name: '', 
//     email: '', 
//     password: '', 
//     salonName: ''
//   });
  
//     const[ addUser, {error, data}] = useMutation(ADD_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setUserData({...userData, [name]: value});
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(userData)


//     try {
//       const { data } =await addUser({variables: {...userData}});
//       console.log(data)
//       Auth.login(data.addUser.token);
//     }catch(error){
//       console.error(error)
//     }

//     setUserData({
//       name: '',
//       email: '',
//       password: '',
//       salonName: '',
//     });
//   };


//    return (
//     <React.Fragment>
//       <Container className="container">
//         <main>
//           <div className="card">
//             <h3 className="p-2">Sign Up</h3>
//             <div className="card-body mb-3">
//               {data ? (
//                 <p>
//                   Success!
//                 </p>
//               ) : (
//                 <form onSubmit={handleFormSubmit}>

//                   <div className="mb-3">
//                     <input
//                       className="form-input form-control"
//                       placeholder="Your name"
//                       name="name"
//                       type="text"
//                       value={userData.name}
//                       onChange={handleInputChange}
//                     />
//                   </div>

//                   <div className="mb-3">
//                   <input
//                     className="form-input form-control"
//                     placeholder="Your Salon Name"
//                     name="salonName"
//                     type="text"
//                     value={userData.salonName}
//                     onChange={handleInputChange}
//                   />
//                   </div>

//                   <div className="mb-3">
//                   <input
//                     className="form-input form-control"
//                     placeholder="Your email"
//                     name="email"
//                     type="email"
//                     value={userData.email}
//                     onChange={handleInputChange}
//                   />
//                   </div>

//                   <div className="mb-3">
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
//                   <button
//                     className="btn btn-info"
//                     style={{ cursor: 'pointer' }}
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                   </div>
//                 </form>
//               )}

//               {error && (
//                 <div className="my-3 p-3 bg-danger text-white">
//                   {error.message}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success!
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Salon Name"
                  name="salonName"
                  type="text"
                  value={userData.salonName}
                  onChange={handleInputChange}
                />
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
        </div>
      </div>
    </main>
  );
};

export default SignUp;