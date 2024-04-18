import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import IngredientForm from '../ingredientForm';

function Ingredients() {
    return (
            <>
        <div className="ingredients">
            <h1>Ingredients</h1>
            <p>Use this page to keep track of basic Ingredients, including info about their LFM status and amount!</p>
        </div>

            <IngredientForm />
        </>
    )
}

export default Ingredients;