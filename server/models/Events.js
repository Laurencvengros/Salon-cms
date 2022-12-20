const { Schema, model } = require('mongoose');

const clientSchema = require('./Clients');

const eventSchema = new Schema(
    {
        event_id: {
            type: Number,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
        client:  [clientSchema]
        
    },
);

const Events =model('Events', eventSchema);

module.exports = Events;