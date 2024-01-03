const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema(
    {
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
        recipes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Recipe'
            }
        ]
    }
);

const User = model('User', userSchema);
module.exports = User;