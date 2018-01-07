import React from 'react';
import { Link } from 'react-router';

const Layout = ( props ) => {
    return (
        <div>
            <h2>Basic Layout</h2>
            <nav>   
                <ul>
                    <li>
                        <Link to="/" />
                    </li>
                    <li>
                        <Link to="/about" />
                    </li>
                    <li>
                        <Link to="/contact" />
                    </li>
                </ul>
                { props.children }
            </nav>      
        </div>
    )
}

export default Layout;