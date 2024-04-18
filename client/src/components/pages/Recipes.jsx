import React, { useState } from 'react';
import Nav from './Nav';
import RecipeForm from '../RecipeForm';
import RecipeCard from '../CreatedRecipes';
import { Form, Button } from 'react-bootstrap';  

function Recipes(){
  return (
    <>
    <div>
      <RecipeForm />
<      RecipeCard />
    </div>
    </>
  )
}
export default Recipes;