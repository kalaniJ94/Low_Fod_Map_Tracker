import React, { useState } from 'react';
import Nav from './Nav';
import RecipeForm from '../RecipeForm';
import { Form, Button } from 'react-bootstrap';  

function Recipes(){
  return (
    <>
    <div>
      <Nav />
      <RecipeForm />
    </div>
    </>
  )
}
export default Recipes;