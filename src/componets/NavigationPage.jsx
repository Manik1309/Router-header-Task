import React from 'react';
import Data from './Productdata'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Books from '../pages/Books';
import HomeAppliance from '../pages/HomeAppliance';
import Electronic from '../pages/Electronic';
import Fashions from '../pages/Fashions';

const NavigationPage = () => {
    return (
        <div>
         <Routes>
            <Route path='/' element={<Home products={Data} />} />
            <Route path='/books' element={<Books products={Data} />} />
            <Route path='/fashions' element={<Fashions products={Data} />} />
            <Route path='/homeappliance' element={<HomeAppliance products={Data} />} />
            <Route path='/electronics' element={<Electronic products={Data} />} />
         </Routes>
        </div>
    );
};

export default NavigationPage;