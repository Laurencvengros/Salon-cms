const { Schema } = require('mongoose');

const clientSchema = new Schema(
    {
        firstName: {
          type: String,
          required: true,
          trim: true
        },
        lastName: {
          type: String,
          required: true,
          trim: true
        },
        email: {
            type: String,
            unique: true,
            
        },
        phone: {
            type: Number,
            
        },
        
    }
);

// const Clients = model('Clients', clientSchema);

module.exports = clientSchema