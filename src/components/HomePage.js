import React from 'react';

const HomePage = () => {
    const cars = [
        { id: 1, name: 'Toyota Corolla', price: '$50/day' },
        { id: 2, name: 'Honda Civic', price: '$60/day' },
        { id: 3, name: 'Ford Mustang', price: '$120/day' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to Car Rentals</h1>
            <p>Browse our collection of cars available for rent:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {cars.map(car => (
                    <li key={car.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <strong>{car.name}</strong> - {car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
