const User = require('../models/User');

const resolvers ={
    Query : {
        user: async () => {
            return User.find();
        },
        
    },
    Mutation: {
        addUser: async(parent, { name, email, password, salonName}) =>{
            return User.create({name, email, password, salonName});
        }
    }
}

module.exports = resolvers;