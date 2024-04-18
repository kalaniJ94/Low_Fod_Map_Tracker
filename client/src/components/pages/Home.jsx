import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Home() {
    return (
        <>
        <div className="home" >
            <h1>Home</h1>
            <p>Welcome to the home page! Use the links above to navigate through the app. </p>
        </div>
        <Footer />
        </>
    )
}

export default Home;