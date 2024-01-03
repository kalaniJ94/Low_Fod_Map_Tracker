const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema(
    { 
        recipeName: {
            type: String,
            required: true,
        },
        lowFodMap: {
            type: String,
            required: true,
        },
        ingredients: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Food',
            },
        ],
        instructions: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
    }
);