const router = require('express').Router();
const {model} = require('mongoose');

const {
    createUser,
    loginUser,
    deleteUser, 
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth');

// routes
//https://localhost:3001/api/users/login
router.route('/login').post(loginUser);
//https://localhost:3001/api/users/create
router.route('/create').post(createUser);
//https://localhost:3001/api/users/:id
router.route('/:id').delete(deleteUser);

module.exports = router;