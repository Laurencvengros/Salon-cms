const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        me: User
        client: Clients
        event: Event
    }
    type Clients {
        _id: ID!
        firstName: String!
        lastName: String!
<<<<<<< HEAD
        email: String!
=======
        email: String
>>>>>>> main
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
    type Mutation {
        addUser(name: String!, email: String!, password: String!, salonName: String!): User
<<<<<<< HEAD
    }
=======
        addClient(firstName: String!, lastName: String!, email: String, phone: Int): User
        
    }
    
>>>>>>> main
`

module.exports = typeDefs;