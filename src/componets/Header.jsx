import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-gray-400 flex justify-between p-4'>
            <div className='flex gap-2'> 
                <Link to='/'> < img className='h-15 w-15' src="public/home1.png" alt="Logo" />
                </Link>
                <h1 className='text-black font-extrabold text-center p-4 text-xl'>MY STORE</h1>
            </div>
            <div className=' text-black font-bold text-center p-4'>
                <ul className='flex gap-4'>
                   <Link to='/'><li>Home</li></Link> 
                   <Link to='/books'> <li>Books</li></Link> 
                   <Link to ='/electronics'><li>Electronics</li></Link> 
                   <Link to ='/fashions'><li>Fasions</li></Link> 
                   <Link to = '/homeappliance'><li>HomeAppliance</li></Link> 
                </ul>
            </div>
        </div>
    );
};

export default Header;