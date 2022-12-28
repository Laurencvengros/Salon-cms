import { gql } from '@apollo/client';

export const GET_ME = gql`
  query users {
    me {
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

// export const GET_CLIENTS = gql`
//   query clients {
//     client {
//       _id
//       firstName
//       lastName
//       email
//       phone
//     }
//   }
// `




