const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers ={
    Query : {
        users: async () => {
            return User.find();
        },
        me: async (parent, args, context) =>{
            if(context.user){
                const userData = await User.findOne({_id:context.user._id})
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
        addUser: async(parent, { name, email, password, salonName}) =>{
            const user = await User.create({name, email, password, salonName});
            const token = signToken(user);

            return { token, user}
        },
        // addUser: async(parent, { name, email, password, salonName}) =>{
        //     return User.create({name, email, password, salonName});
        // },
        addClient: async(parent, {userId, firstName, lastName, email, phone}, context) => {
            if(context.user){
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
            if(context.user){
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
            if(context.user){
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
            const user = await User.findOne({email});

            if(!user){
                throw new AuthenticationError('incorrect email or password');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('incorrect email or password');
            }

            const token = signToken(user);
            return{ token, user };
        }
     }
    
}

module.exports = resolvers;