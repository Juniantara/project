const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Product routes
app.use('/api/products', productRoutes);

// User routes
const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes);

// Base route
app.get('/', (req, res) => {
   res.send('Welcome to the E-commerce API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   console.log(`Access API at http://localhost:${PORT}/api`);
});
