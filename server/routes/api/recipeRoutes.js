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
router.route('/').post(createRecipe);
//https://localhost:3001/api/recipes/delete
router.route('/:recipeId').delete(deleteRecipe);
//https://localhost:3001/api/recipes/update
router.route('/recipeId').put(updateRecipe);
//https://localhost:3001/api/recipes/getRecipe
router.route('/:recipeId').get(getRecipe);
//https://localhost:3001/api/recipes/getAllRecipes
router.route('/').get(getAllRecipes);

module.exports = router;