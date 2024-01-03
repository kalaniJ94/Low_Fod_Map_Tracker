const { Schema, model, Types } = require('mongoose');

const foodSchema = new Schema(
    {
        foodName: {
            type: String,
            required: true,
        },
        lowFodMap: {
            type: String,
            required: true,
        }
    },
);