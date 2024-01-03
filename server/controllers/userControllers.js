//imports
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = 'test_secret';

//imported tokens?

module.exports = {
    //create User
    async createUser(req,res) {
        try {
            const { username, email, password } = req.body;
            if(!username || !email || !password) {
                return res.status(400).json({msg: 'Please enter all fields'});
            }
            const userExists = await User.findOne({email});
            if(userExists) {
                return res.status(400).json({msg: 'User already exists'});
            }
            //hash
            const cryptPassword = await bcrypt.hash(password, 10);
            //create user
            const user = await User.create({ username, email, password: cryptPassword });
            console.log("user created");
            //return User
            res.status(200).json({user});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Server error'});
        }
    },
    //login User via jwt
    async loginUser(req,res) {
        try {
            const { email, password } = req.body;
            if(!email || !password) {
                return res.status(400).json({msg: 'Please enter all fields'});
            }
            const user = await User.findOne({email});
            if(!user) {
                return res.status(400).json({msg: 'User does not exist'});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({msg: 'Invalid credentials'});
            }
            const token = jwt.sign({id: user._id}, secret, {expiresIn: 3600});
            res.status(200).json({token, user});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Server error'});
        }
    },
    //delete User
    async deleteUser(req,res) {
        try {
            const user = await User.findOneAndRemove({_id: req.params.id});
            if (!user) {
                return res.status(404).json({msg: 'User not found'});
            }
            res.status(200).json({msg: 'User deleted'});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Server error'});
        }
    }
}