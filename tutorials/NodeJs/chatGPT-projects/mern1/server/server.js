const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
// localhost ki jagah 127.0.0.1 use karne se connection error solve ho jata hai
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected successfully'))
  .catch((err) => console.log('DB Connection Error:', err));

// Product Schema & Model
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
});

const Product = mongoose.model('Product', productSchema);

// API Routes

// 1. Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Database Fetch Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 2. Add a new product (Admin) - Ye route pehle miss ho gaya tha
app.post('/api/products', async (req, res) => {
  try {
    const { title, price, description, image } = req.body;
    const newProduct = new Product({ title, price, description, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', newProduct });
  } catch (err) {
    console.error("Database Save Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 3. Delete a product (Admin)
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error("Database Delete Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});