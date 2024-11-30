import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();


const carSchema = new mongoose.Schema({
    Model: { type: String, required: true },
    PriceRange: { type: String, required: true },
    rentalPricePerDay: { type: Number, required: true }
});



const Car = mongoose.model('Car', carSchema, 'CarPrice');

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        if (!cars.length) {
            return res.status(404).json({ message: 'No cars found in the database.' });
        }
        res.status(200).json(cars);
    } catch (err) {
        console.error('Error retrieving cars:', err);
        res.status(500).json({ error: 'Failed to retrieve cars' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        console.error('Error retrieving car:', err);
        res.status(500).json({ error: 'Failed to retrieve car' });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('Incoming Request Body:', req.body); // Log the incoming request body
        const newCar = new Car(req.body);
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        console.error('Validation Error:', err.message); // Log validation error
        res.status(400).json({ error: err.message });
    }
});




router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedCar) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json(updatedCar);
    } catch (err) {
        console.error('Error updating car:', err);
        res.status(400).json({ error: 'Failed to update car' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);

        if (!deletedCar) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (err) {
        console.error('Error deleting car:', err);
        res.status(500).json({ error: 'Failed to delete car' });
    }
});

export default router;
