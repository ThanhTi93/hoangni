import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Product from '../pages/Product';
function ClientRouters(props) {
     const routers = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/category',
            element: <Category />
        },
        {
            path: "/product/:id",
            element: <Product />
        }
     ]
    return (
        <div>
            <Routes>
                {routers.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    );
}

export default ClientRouters;