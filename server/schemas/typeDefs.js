const { gql } = require('apollo-server-express');

// type Query{
//     users: [User]
//     user(userId: ID!): User

// }

const typeDefs = gql`

    type Clients {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String
        phone: Int
    }
    type User {
        _id: ID!
        name: String!
        email: String!
        salonName: String!
        clients: [Clients]
    }
    type Event {
        event_id: ID!
        title: String!
        start: Int
        end: Int
        client: [Clients]
    }
    type Auth {
        token: ID!
        user: User                                                   
      }
    type Query {
        me: (userId: ID!): User
        
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!, salonName: String!): User
        addClient(userId: ID!, firstName: String!, lastName: String!, email: String, phone: Int): User
        deleteClient(userId: ID!, clientId: ID!): User
        editClient(userId: ID!, clientId: ID!, firstName: String!, lastName: String!, email: String, phone: Int): User
    }
    
`

module.exports = typeDefs;