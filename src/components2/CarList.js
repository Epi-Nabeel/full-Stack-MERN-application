import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axiosInstance.get('/cars')
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cars:', error.response?.data || error.message);
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

export default CarList;
