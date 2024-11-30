import React from 'react';
import axiosInstance from '../api/axiosInstance';

const DeleteCarButton = ({ carId, onSuccess }) => {
    const handleDelete = () => {
        axiosInstance.delete(`/cars/${carId}`)
            .then(() => {
                alert('Car deleted successfully!');
                onSuccess(); // Callback to refresh data
            })
            .catch((error) => {
                console.error('Error deleting car:', error.response?.data || error.message);
                alert('Failed to delete car!');
            });
    };

    return (
        <button onClick={handleDelete}>Delete Car</button>
    );
};

export default DeleteCarButton;
