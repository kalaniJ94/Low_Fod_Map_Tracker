const Food = require('../models/foodModels');
const { authMiddleware } = require('../utils/auth');

module.exports = {
    async addFood(req,res) {
        try{
            authMiddleware(req,res, async () => {
                const newFood = await Food.create(req.body);
                if (!newFood) {
                    return res.status(404).json({ message: 'No food found with this id!' });
                }
                return res.status(200).json(newFood);
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteFood(req,res) {
        try {
            authMiddleware(req,res, async () => {
                const deleteFood = await Food.findOneAndDelete({ _id: req.params.foodId });
                if (!deleteFood) {
                    return res.status(404).json({ message: 'No food found with this id!' });
                }
                return res.status(200).json(deleteFood);
            })
        } catch {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateFood(req,res) {
        try {
            authMiddleware(req,res, async () => {const updateFood = await Food.findOneAndUpdate({ _id:req.params.foodId});
                if (!updateFood) {
                    return res.status(404).json({ message: 'No food found with this id!' });
                }
                return res.status(200).json(updateFood);
            })
        } catch (error) {
            console.log(err);
            res.status(500).json(err);
        };
    }   
};  