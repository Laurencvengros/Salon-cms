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


    },
    phone: {
      type: String,

    },


  }
);

// const Clients = model('Clients', clientSchema);

module.exports = clientSchema