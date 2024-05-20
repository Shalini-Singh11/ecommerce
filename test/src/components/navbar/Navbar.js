import React from 'react';
import { Container } from 'react-bootstrap';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Container>
                <NavLink className="navbar-brand fw-bold" to="/products">STORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products" activeClassName="active">All Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/electronics" activeClassName="active">Electronics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jewelry" activeClassName="active">Jewelry</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/mens" activeClassName="active">Men's Clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/womens" activeClassName="active">Women's Clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart" activeClassName="active">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn p-0" onClick={handleLogout}><Link className="nav-link">Logout</Link></button>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
