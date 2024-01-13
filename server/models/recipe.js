const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema(
    { 
        recipeId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            required: true,
        },
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
                ingredientName: {
                    type: String,
                },
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

const Recipe = model('Recipe', recipeSchema);
module.exports = Recipe;