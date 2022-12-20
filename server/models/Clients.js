const { Schema, model } = require('mongoose');

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
            required: true,
            
        },
        phone: {
            type: Number,
            required: true,
        },
        
    }
);

const Clients = model('Clients', clientSchema);

module.exports = Clients