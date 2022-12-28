import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddClient from "./AddClient";
import { Link } from 'react-router-dom'

import { useQuery } from '@apollo/client';
import {GET_ME} from '../utils/queries'

 


const Clients = () => {

  const { loading, data } = useQuery(GET_ME, {
    fetchPolicy: "no-cache"
  });

  const userData = data?.me || [];



  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>{userData.name}</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {userData.map((me) => {
              return (
                <li key={me._id}>
                  <Link to={{ pathname: `/matchup/${me._id}` }}>
                    
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        
        <Link to="/AddClient">
          <button className="btn btn-lg btn-danger">Add Client!</button>
        </Link>
      </div>
    </div>
  );

}

export default Clients;
