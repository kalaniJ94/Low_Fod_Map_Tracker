const router = require('express').Router();

const {
    addFood,
    deleteFood,
    updateFood
} = require('../../controllers/foodControllers');

//routes
//http://localhost:3001/api/food
router.route('/').post(addFood);
//http://localhost:3001/api/food/:foodId
router.route('/:foodId').delete(deleteFood);
//http://localhost:3001/api/food/:foodId
router.route('/:foodId').put(updateFood);

