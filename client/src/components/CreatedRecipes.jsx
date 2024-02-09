import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

//import images

function RecipeCard({ recipe, name, description, image}) {

    const expandCard = () => {
        console.log('clicked');
    }

  return (
    <Card>
      <Card.Body>
        <Card.Title onClick={expandCard}>{recipe.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
