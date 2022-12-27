import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation addClient($userId: ID!, $firstName: String!, $lastName: String!, $email: String, $phone: Int) {
    addClient(userID: $userID, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
      _id
      firstName
      lastName
      email
      phone 
    }
  }
`;


