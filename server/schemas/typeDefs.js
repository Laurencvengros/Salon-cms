const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        me: User
    }
    type Clients {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: Number
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
        start: Date!
        end: Date!
        client: [Clients]
    }
    type Auth {
        token: ID!
        user: User
      }
`

modules.exports = typeDefs;