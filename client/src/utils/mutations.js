import { gql } from '@apollo/client';

export const ADD_USER = gql
`
mutation addUser($name: String!, $email: String!, $password: String!, salonName: String!) {
    addUser(name: $name, email: $email, password: $password, salonName: $saloneName) {
        token
        profile {
            _id
            name
        }
    }
}
`;

export const LOGIN_USER = gql
`
mutation login($email: String!, $password: String!) {
    login(email: $email, $password: $password) {
        token
        profile {
            _id
            name
        }
    }
}
`;

