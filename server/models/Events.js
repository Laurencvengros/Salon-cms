const { Schema} = require('mongoose');



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
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
        
        
    },
);



module.exports = eventSchema;