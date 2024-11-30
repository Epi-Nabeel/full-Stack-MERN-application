import React, { useState } from 'react';

const AdminPage = () => {
    const [cars, setCars] = useState([
        { id: 1, name: 'Toyota Corolla', price: '$50/day' },
        { id: 2, name: 'Honda Civic', price: '$60/day' },
    ]);

    const addCar = () => {
        const newCar = { id: cars.length + 1, name: 'New Car', price: '$70/day' };
        setCars([...cars, newCar]);
    };

    const editCar = (id) => {
        const updatedCars = cars.map(car =>
            car.id === id ? { ...car, name: 'Updated Car Name | done in code' } : car
        );
        setCars(updatedCars);
    };

    const deleteCar = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Panel</h1>
            <p>Manage car listings:</p>
            <button onClick={addCar} style={{ marginRight: '10px', padding: '10px 15px' }}>Add Car</button>
            {cars.map(car => (
                <div key={car.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <strong>{car.name}</strong> - {car.price}
                    <button onClick={() => editCar(car.id)} style={{ marginLeft: '10px', padding: '5px 10px' }}>Edit</button>
                    <button onClick={() => deleteCar(car.id)} style={{ marginLeft: '10px', padding: '5px 10px' }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
