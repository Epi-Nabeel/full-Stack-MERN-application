import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();

    const cars = [
        { id: '1', name: 'Toyota Corolla', price: '$50/day', description: 'Reliable and fuel-efficient.' },
        { id: '2', name: 'Honda Civic', price: '$60/day', description: 'Smooth ride with advanced features.' },
        { id: '3', name: 'Ford Mustang', price: '$120/day', description: 'Powerful sports car for enthusiasts.' },
    ];

    const car = cars.find(car => car.id === id);

    if (!car) {
        return <p>Car not found! make sure you have the id on the url something like this <a href="http://localhost:3000/car-details/1"><strong>http://localhost:3000/car-details/1</strong></a>  |  here the car details is fro the car with id 1. As of now only id 1,2 and 3 are available</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Car Details</h1>
            <h2>{car.name}</h2>
            <p><strong>Price:</strong> {car.price}</p>
            <p><strong>Description:</strong> {car.description}</p>
        </div>
    );
};

export default CarDetails;
