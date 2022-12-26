const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Clients = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            return User.findOne({ _id: context.user._id })
        }
    },

    Mutation: {
        addUser: async (parent, { name, email, password, salonName }) => {
            return User.create({ name, email, password, salonName });
        },
        addClient: async (parent, { userId, firstName, lastName, email, phone }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { clients: { firstName, lastName, email, phone } }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteClient: async (parent, { userId, clientId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { clients: { _id: clientId } } },
                { new: true, runValidators: true }
            );
        },
        editClient: async (parent, { userId, clientId, firstName, lastName, email, phone }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $set: { clients: { _id: clientId, firstName, lastName, email, phone } } },
                { new: true, runValidators: true }
            );
        },
    }

}

module.exports = resolvers;