const { AuthenticationError } = require('apollo-server-express');
const { isValidObjectId } = require('mongoose');
const User = require('../models/User');
const { signToken } = require('../utils/auth');

const updateClients = (client,  updatedClient )=> {
    console.log(client._id)
    console.log(updatedClient.clientId)
    if(client._id == updatedClient.clientId){
        return updatedClient
    }else{
        return client
    }
}

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        me: async (parent, { userId }, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');

                return userData
            }
            throw new AuthenticationError('You need to log in first!');
        },
        // user: async(parent, {userId}, context) =>{
        //     if(context.me){
        //         const userData = await User.findOne({_id:context.userId})
        //         .select('-__v -password');

        //         return userData
        //     }
        //     throw new AuthenticationError("Please Login First")

        // },


    },

    Mutation: {
        addUser: async (parent, { name, email, password, salonName }) => {
            const user = await User.create({ name, email, password, salonName });
            const token = signToken(user);

            return { token, user }
        },
        // addUser: async(parent, { name, email, password, salonName}) =>{
        //     return User.create({name, email, password, salonName});
        // },
        addClient: async (parent, { firstName, lastName, email, phone }, context) => {
            try {
                if (context.user) {
                    const updatedClient = await User.findOneAndUpdate(
                        { _id: context.user._id },
                        {
                            $addToSet: { clients: { firstName, lastName, email, phone } }
                        },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );
                    console.log(updatedClient);
                    return updatedClient;
                }
                throw new AuthenticationError('you need to login!');
            } catch (err) {
                console.log(err)
                throw new AuthenticationError('Error');
            }

        },
        deleteClient: async (parent, { clientId }, context) => {
            if (context.user) {
                const updatedClient = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { clients: { _id: clientId } } },
                    { new: true, runValidators: true }
                );
                return updatedClient
            }
            throw new AuthenticationError('you need to login!');

        },
        editClient: async (parent, { clientId, firstName, lastName, email, phone }, context) => {
            if (context.user) {
                const user = await User.findOne(
                    { _id: context.user._id}
                    
                )
                newClients = user.clients.map(client => updateClients(client, {clientId, firstName, lastName, email, phone}))
                console.log(newClients)
                const updatedClients = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$set: {clients: newClients}},
                    { new: true, runValidators: true }
                )
               console.log(updatedClients)
                return updatedClients
            }
            throw new AuthenticationError('you need to login!')
        },


        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('incorrect email or password');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('incorrect email or password');
            }

            const token = signToken(user);
            return { token, user };
        }
    }

}

module.exports = resolvers;