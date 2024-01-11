const connection = require('../config/connection');
const Recipe = require('../models/recipe');
const User = require('../models/user');
const fs = require('fs');
const path = require('path');

// Test files 

const testUser = [{

    username: 'test',
    email: 'test@gmail.com',
    password: 'test12345',
    recipes: [
        {
            recipeName: 'test',
            lowFodMap: true,
            ingredients: [
                {
                    ingredientName: 'test',
                },
            ],
            instructions: 'test',
            category: 'test',
            rating: 5,
        },
        
    ],
}
];

const testRecipes = [
{
    recipeName: 'Peanut Dressing',
    lowFodMap: true,
    ingredients: [
        {
        ingredientName: 'Peanut butter',
    },
    {
        ingredientName: 'Lime'
    },
    {
        ingredientName: 'Tamari'
    },
    {
        ingredientName: ' Fish Sauce '
    },
    {
        ingredientName: ' Chilli Flake'
    },
    {
        ingredientName: ' Sesame Oil '
    },
    ],
    instructions: 'Measure all ingredients except oil, and mix together in blender. Drizzle oil while blender is running to emulsify. Store in airtight container in fridge for up to 2 weeks.',
    category: 'Dressing',
    rating: 5,
},
];                           


// Connect to database
connection.once('open', async () => {
    console.log('connected to database, seeding started.');
    try {
        await User.deleteMany({});
        console.log('users deleted');
       for (const seedUser of testUser) {
        const newUsers = new User(seedUser);
        await newUsers.save();
       }
       console.log('users seeded');
         await Recipe.deleteMany({});
        console.log('recipes deleted');
        for (const seedRecipe of testRecipes) {
            const newRecipe = new Recipe(seedRecipe);
            await newRecipe.save();
        }
        console.log('recipes seeded');
    } catch (error) {
        console.error(error, 'seed failed');
    } finally {
        process.exit(0);
    }
});