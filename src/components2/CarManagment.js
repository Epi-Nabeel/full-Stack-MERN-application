import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import AddCarForm from './AddCarForm';
import UpdateCarForm from './UpdateCarForm';
import DeleteCarButton from './DeleteCarButton';

const CarManagement = () => {
    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    const fetchCars = () => {
        axiosInstance.get('/cars')
            .then((response) => setCars(response.data))
            .catch((error) => console.error('Error fetching cars:', error));
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div>
            <h1>Car Management</h1>
            <AddCarForm />
            {editingCar && (
                <UpdateCarForm
                    carId={editingCar._id}
                    existingData={editingCar}
                    onSuccess={() => {
                        setEditingCar(null);
                        fetchCars();
                    }}
                />
            )}
            <ul>
                {cars.map((car) => (
                    <li key={car._id}>
                        {car.Model} - {car.PriceRange} - ${car.rentalPricePerDay}/day
                        <button onClick={() => setEditingCar(car)}>Edit</button>
                        <DeleteCarButton carId={car._id} onSuccess={fetchCars} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarManagement;
