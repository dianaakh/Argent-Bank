import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/error404.css';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Page404 = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="error-404-container">
                    <h2 className="error-404-title">404 - Page Not Found !</h2>
                    <p className="error-404-text">The page you are looking for does not exist.</p>
                    <NavLink to="/" className="error-404-link">Go to Home Page</NavLink>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page404;