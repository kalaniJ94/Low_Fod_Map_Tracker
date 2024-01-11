const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema(
    { 
        recipeName: {
            type: String,
            required: true,
        },
        lowFodMap: {
            type: Boolean,
            required: true,
        },
        ingredients: [
            {
                type: String,
                required: true,
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