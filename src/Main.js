import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Items from './pages/Items';
import Users from './pages/Users';
import Summary from './pages/Summary';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/items' element={<Items />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/summary' element={<Summary />} />
        </Routes>
    );
}

export default Main;