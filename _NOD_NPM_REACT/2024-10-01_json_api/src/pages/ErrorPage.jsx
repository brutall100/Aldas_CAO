import React from 'react';
import { NavLink } from 'react-router-dom'; 

const ErrorPage = () => {
    return (
        <div>
            <h1>Error Page</h1>
            <NavLink to="/">Go to Home Page</NavLink>     
        </div>
    );
}

export default ErrorPage;
