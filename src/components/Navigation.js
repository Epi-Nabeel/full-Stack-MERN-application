import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <Link to="/" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
            <Link to="/admin" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>Admin</Link>
            <Link to="/car-details" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>Car Details</Link>
            <Link to="/api-data" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>API Data</Link>
        </nav>
    );
};

export default Navigation;
