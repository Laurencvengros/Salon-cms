const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        users: [User]
        me: User
        
        
    }
    type Clients {
        _id: ID!
        clientID: String!
        firstName: String!
        lastName: String!
        email: String
        phone: String
    }
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        salonName: String!
        clients: [Clients]
        events: [Event]
    }
    type Event {
        event_id: String!
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
        login(email: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!, salonName: String!): Auth
        addClient(firstName: String!, lastName: String!, email: String, phone: String): User
        deleteClient(clientId: ID!): User
        editClient( clientId: ID!, firstName: String!, lastName: String!, email: String, phone: String): User
        addEvent(title: String!, start: String!, end: String!): User
    }
    
`

module.exports = typeDefs;