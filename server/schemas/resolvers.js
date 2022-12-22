const User = require('../models/User');
const Clients = require('../models/User');

const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers ={
    Query : {
        users: async () => {
            return User.find();
        },
        user: async(parent, {userId}) =>{
            return User.findOne({_id:userId});
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id:context.user._id });
            }
            throw new AuthenticationError('You need to be logged in first!');
        },
        
    },
    
    Mutation: {
        addUser: async(parent, { name, email, password, salonName}) =>{
            return User.create({name, email, password, salonName});
        },
        addClient: async(parent, {userId, firstName, lastName, email, phone}) => {
            return User.findOneAndUpdate(
                {_id: userId},
                {
                    $addToSet: {clients: {firstName, lastName, email, phone}}
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteClient: async(parent, {userId, clientId}) => {
            return User.findOneAndUpdate(
                {_id: userId},
                { $pull: {clients:{_id:clientId}}},
                {new: true, runValidators: true}
            );
        },
        editClient: async(parent, {userId, clientId, firstName, lastName, email, phone}) => {
            return User.findOneAndUpdate(
                {_id: userId},
                { $set: {clients:{_id:clientId, firstName, lastName, email, phone}}},
                {new: true, runValidators: true}
            );
        },
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('Hm, please check your email and password.');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Hm, please check your email and password.');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
      
     }
    
}

module.exports = resolvers;