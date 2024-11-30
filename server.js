import { uri } from './atlas_url.js';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import carsRoutes from './routes/cars.js'

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/api/cars', carsRoutes);

//MongoDB Connection (shell)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Car Rental System Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
