const { Schema, model } = require('mongoose');

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
        clientName: {
            type: Schema.Types.ObjectId,
            ref: 'Clients'
        },
    },
);

const Events =model('Events', eventSchema);

module.exports = Events;