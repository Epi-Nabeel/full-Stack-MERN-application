import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const UpdateCarForm = ({ carId, existingData, onSuccess }) => {
    const [formData, setFormData] = useState(existingData);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.put(`/cars/${carId}`, formData)
            .then((response) => {
                alert('Car updated successfully!');
                console.log('Updated Car:', response.data);
                onSuccess(); // Callback to refresh data
            })
            .catch((error) => {
                console.error('Error updating car:', error.response?.data || error.message);
                alert('Failed to update car!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Model"
                value={formData.Model}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="PriceRange"
                value={formData.PriceRange}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="rentalPricePerDay"
                value={formData.rentalPricePerDay}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Update Car</button>
        </form>
    );
};

export default UpdateCarForm;
