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
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        phone: {
            type: Number,
            required: true,
        },
        clientId: {
            type: String,
            reqired: true
        }

    }
);

const Clients = model('Clients', clientSchema);

module.exports = Clients