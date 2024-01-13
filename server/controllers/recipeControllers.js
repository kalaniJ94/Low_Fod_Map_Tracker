const Recipe = require('../models/recipe');
const User = require('../models/user');
const { authMiddleware } = require('../utils/auth');
const auth = require('../utils/auth');

module.exports = {
    async createRecipe(req,res) {
        try { 
            // authMiddleware
            (req,res, async () => {
                // find a user and update the user's recipes array
                const userRecipes = await Recipe.findOneAndUpdate
                (
                    { _id: req.params.userId },
                    { $push: { recipes: req.body } },
                    { new: true }
                );
                if (!userRecipes) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
            })
           return res.status(200).json({ message: 'Recipe created!' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteRecipe(req,res) {
        try {
            // authMiddleware
            (req,res, async () => {
                // find a user and update the user's recipes array
                const userRecipes = await Recipe.findOneAndUpdate
                (
                    { _id: req.params.userId },
                    { $pull: { recipes: { _id: req.params.recipeId } } },
                    { new: true }
                );
                if (!userRecipes) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
            })
            return res.status(200).json({ message: 'Recipe deleted!' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateRecipe(req,res) {
        try {
            // authMiddleware
            (req,res, async () => {
                // find a user and updates one recipe in a users recipes array
                const userRecipes = await Recipe.findOneAndUpdate
                (
                    { $set: { recipes: req.body } },
                    { new: true }
                );
                if (!userRecipes) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
            })
           return res.status(200).json({ message: 'Recipe updated!' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getRecipe(req,res) {
        try {
            authMiddleware(req,res, async () => {
                const userRecipes = await Recipe.findOne
                (
                    { recipes: { _id: req.params.recipeId } },
                );
                if (!userRecipes) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                 return res.status(200).json({userRecipes, message: 'Recipe found!' });
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }, async getAllRecipes(req,res) {
        try {
            authMiddleware(req,res, async () => {
                const userRecipes = await Recipe.find({});
                if (!userRecipes) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                return res.status(200).json({userRecipes, message: 'Recipe found!' });
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

};