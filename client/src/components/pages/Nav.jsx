import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Nav({ activePage, setActivePage }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
        <header className="nav" >
            <ul className="nav-tabs">
                <li className="nav-item">
                    <a href='/home' className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('home')}>Home</a>
                </li>
                <li className="nav-items">
                    <a href ='/recipes' className={activePage === 'recipes' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('recipes')}>Recipes</a>
                </li>
                <li className='Ingredients'>
                    <a href='/ingredients' className={activePage === 'ingredients' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('ingredients')}>Ingredients</a>
                </li>
            </ul>
        </header>
                </Row>
        </Container>
    )
}

export default Nav;