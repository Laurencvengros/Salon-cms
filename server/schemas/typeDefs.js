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
`

module.exports = typeDefs;