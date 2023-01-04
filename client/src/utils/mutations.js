import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation addClient($firstName: String!, $lastName: String!, $email: String, $phone: String) {
    addClient(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
      _id
      name 
      email
      salonName
      clients {
        _id
        firstName
        lastName
        email
        phone
      }

    }
  }
`;

export const EDIT_CLIENT = gql`
mutation editClient( $clientId: ID!, $firstName: String!, $lastName: String!, $email: String, $phone: String) {
  editClient( clientId: $clientId, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
    _id
    name 
    email
    salonName
    clients {
      _id
      firstName
      lastName
      email
      phone
    }

  }
}
`

export const DELETE_CLIENT = gql`
mutation deleteClient( $clientId: ID!) {
  deleteClient( clientId: $clientId) {
    _id
    name
    email
    salonName
    clients {
      _id
      firstName
      lastName
      email
      phone
    }
  }
}
`

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $salonName: String!){
    addUser(name: $name, email: $email, password: $password, salonName: $salonName){
      token
      user{
          _id
          name
          email
          salonName
        }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
          _id
          name
          email
          salonName
        }
    }
  }
`


