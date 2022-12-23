const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Clients = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers ={
    Query : {
        users: async () => {
            return User.find();
        },
        user: async(parent, {userId}, context) =>{
            if(context.me){
                const userData = await User.findOne({_id:context.userId})
                .select('-__v -password');

                return userData
            }
            throw new AuthenticationError("Please Login First")
            
        },
        
    },
    
    Mutation: {
        addUser: async(parent, { name, email, password, salonName}) =>{
            const me = await User.create({name, email, password, salonName});
            const token = signToken(me);

            return { token, me}
        },
        addClient: async(parent, {userId, firstName, lastName, email, phone}, context) => {
            if(context.me){
                const updatedClient = await User.findOneAndUpdate(
                    {_id: userId},
                    {
                        $addToSet: {clients: {firstName, lastName, email, phone}}
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
                return updatedClient;
            }
            throw new AuthenticationError('you need to login!');
         
        },
        deleteClient: async(parent, {userId, clientId}, context) => {
            if(context.me){
                const updatedClient = await User.findOneAndUpdate(
                    {_id: userId},
                    { $pull: {clients:{_id:clientId}}},
                    {new: true, runValidators: true}
                );
                return updatedClient
            }
            throw new AuthenticationError('you need to login!');
            
        },
        editClient: async(parent, {userId, clientId, firstName, lastName, email, phone}, context) => {
            if(context.me){
               const updatedClient = await User.findOneAndUpdate(
                    {_id: userId},
                    { $set: {clients:{_id:clientId, firstName, lastName, email, phone}}},
                    {new: true, runValidators: true}
                );
                return updatedClient
            }
            throw new AuthenticationError('you need to login!')
        },
        login: async (parent, {email, password}) =>{
            const me = await User.findOne({email});

            if(!me){
                throw new AuthenticationError('incorrect email or password');
            }

            const correctPw = await me.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('incorrect email or password');
            }

            const token = signToken(me);
            return{ token, me };
        }
     }
    
}

module.exports = resolvers;