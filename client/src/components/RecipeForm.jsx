import {useState} from 'react';
import { Form, Button, Alert, Col, Container, Row } from 'react-bootstrap';
import { createRecipe } from '../utils/API';
import CreatedRecipes from './CreatedRecipes';

const RecipeForm = () => {
    const [userFormData, setUserFormData ] =  useState({ recipeName: '', lowFodMap: '', ingredients: '', instructions: '', category: '', rating: ''});
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!userFormData.recipeName || !userFormData.lowFodMap || !userFormData.ingredients || !userFormData.instructions) {
            return;}
    
    try {
        const response = await createRecipe(userFormData);
        if (!response.ok) {
            throw new Error('something went wrong!');
        }
        if (onSubmit) {
            onSubmit();
        }
    } catch (error) {
        console.error(error);
        setShowAlert(true);
    }
    setUserFormData({
        recipeName: '',
        lowFodMap: '',
        ingredients: '',
        instructions: '',
        category: '',
        rating: ''
    });

    return(
        <>
        <div className='recipe-form scrollable-container' style={{ maxWidth: '400px', margin: 'auto'}}>
            <h2>Create a Recipe</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type='text' name='recipeName' value={userFormData.recipeName} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Low FodMap</Form.Label>
                    <Form.Control type='text' name='lowFodMap' value={userFormData.lowFodMap} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type='text' name='ingredients' value={userFormData.ingredients} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control type='text' name='instructions' value={userFormData.instructions} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' name='category' value={userFormData.category} onChange={handleInputChange}  />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type='text' name='rating' value={userFormData.rating} onChange={handleInputChange}  />
                </Form.Group>
                <Button disabled variant='primary' type='submit'>
                    Create
                </Button>
                </Form>
                {showAlert ? <Alert variant='danger' onClose={() => setShowAlert(false)} dismissible>
                    Something went wrong with your submission. Please try again.
                </Alert> : null}
        </div>

            <Row>
                <h2>Created Recipes</h2>
            </Row>
        <Container>
            <Row>
                <Col>
                <CreatedRecipes recipes={recipes} />
                </Col>
            </Row>
        </Container>
        </>
    )
};

};

export default RecipeForm;