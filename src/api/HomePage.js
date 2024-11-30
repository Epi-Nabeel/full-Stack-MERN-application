import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance.js';

const HomePage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axiosInstance.get('/cars')
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cars:', error);
            });
    }, []);

    return (
        <div>
            <h1>Available Cars</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car._id}>
                        {car.Model} - {car.PriceRange} - ${car.rentalPricePerDay}/day
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
