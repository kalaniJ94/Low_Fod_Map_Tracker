const { Schema, model, Types } = require('mongoose');

const foodSchema = new Schema(
    {
        foodId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            required: true,
        },
        foodName: {
            type: String,
            required: true,
        },
        lowFodMap: {
            type: Boolean,
            required: true,
        },
        Amount: {
            type: String,
            required: true,
        },
    },
);