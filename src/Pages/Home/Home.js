import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const Home = () => {
    return (
        <div className='background'>
            <div className="container  home">
                <h1>Happy Burger</h1>
                <Link className='button' to={'/builder'}>Order now!!</Link>
            </div>
            
        </div>
    );
};

export default Home;