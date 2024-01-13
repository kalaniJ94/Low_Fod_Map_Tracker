const {Schema, model, Types} = require('mongoose');
const recipeSchema = require('./recipe').schema;

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid e-mail address']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
    }
);

const User = model('User', userSchema);
module.exports = User;