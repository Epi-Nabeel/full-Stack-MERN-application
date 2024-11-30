import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const AddCarForm = () => {
    const [formData, setFormData] = useState({
        Model: '',
        PriceRange: '',
        rentalPricePerDay: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/cars', formData)
            .then((response) => {
                alert('Car added successfully!');
                console.log('New Car:', response.data);
            })
            .catch((error) => {
                console.error('Error adding car:', error.response?.data || error.message);
                alert('Failed to add car!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Model"
                placeholder="Model"
                value={formData.Model}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="PriceRange"
                placeholder="Price Range"
                value={formData.PriceRange}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="rentalPricePerDay"
                placeholder="Rental Price Per Day"
                value={formData.rentalPricePerDay}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Add Car</button>
        </form>
    );
};

export default AddCarForm;
