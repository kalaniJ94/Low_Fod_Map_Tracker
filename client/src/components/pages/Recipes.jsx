import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const form = ({ onSubmit }) => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newForm = e.currentTarget;
        return;
    }
    try {
        const response = await createRecipe(userFormData);
        console.log(response);
        if (!response.ok) {
            throw new Error('something went wrong!');
        }
        if (onSubmit) {
            onSubmit();
        }
    } catch (err) {
        console.error(err);
        setShowAlert(true);
    }

    //reset form data
    setFormData({
        //insert fields here
    })

}

function Recipes() {
    return (
        <>
            <div className="recipes">
                <h1>Create a Recipe</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter recipe name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Lowfodmap?</Form.Label>
                        <Form.Control type="text" placeholder="Enter ingredients" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control type="text" placeholder="Enter ingredients" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control type="text" placeholder="Enter instructions" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="Enter rating" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter category" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        </>
    )
}
export default Recipes;