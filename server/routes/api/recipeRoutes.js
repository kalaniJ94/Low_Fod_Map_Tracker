const router = require('express').Router();

const {
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getRecipe,
    getAllRecipes,
} = require('../../controllers/recipeControllers');

// routes

//https://localhost:3001/api/recipes/create
router.route('/:userId').post(createRecipe);