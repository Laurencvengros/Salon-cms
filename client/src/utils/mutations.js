import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation addClient($userId: ID!, $firstName: String!, $lastName: String!, $email: String, $phone: Int) {
    addClient(userId: $userId, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
      _id
      name
      email
      salonName
      clients{
          _id
          firstName
          lastName
          email
          phone
      }
    }
  }
`;

export const ADD_USER =gql`
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


