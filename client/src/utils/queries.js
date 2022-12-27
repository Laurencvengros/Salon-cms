import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      name
      email
      salonName
      clients
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




