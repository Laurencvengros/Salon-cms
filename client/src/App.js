import React from 'react';
import Navigation from "./components/Navigation";
import Calendar from "./components/Calendar";
import Clients from "./components/Clients";
import AllClients from "./components/AllClients"
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login"
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import EditClient from './components/EditClient';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      user: {
        fields: {
          clients: {
            // Equivalent to options.mergeObjects(existing, incoming).
            merge: true,
            keyFields: ["_id"],
          },
        },
      },
    },
  })
});

 


function App() {
  const [formIsOpen, setFormOpen] = useState(false);
  function openClientForm(props) {
    setFormOpen(true);
  }
  function closeClientForm() {
    setFormOpen(false);
  }



  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/clients" element={<Clients openClientForm={openClientForm} formIsOpen={formIsOpen} closeClientForm={closeClientForm} />} />
            <Route exact path="/allclients" element={<AllClients />} />
            <Route exact path="/editclient" element={<EditClient />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={"not found"}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
