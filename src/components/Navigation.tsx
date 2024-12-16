import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-12 px-5 shadow-md bg-gray-500 text-white'>
            <h3 className='font-bold'>Github Search</h3>
            <span className='space-x-4'>
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
        </nav>
    );
};

export default Navigation;