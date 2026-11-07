import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// --- Components / Pages ---

// 1. Home Page
function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Discover amazing items at the best prices!</p>
    </div>
  );
}

// 2. About Page
function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Us</h2>
      <p>We provide high-quality products to make your life easier and better.</p>
    </div>
  );
}

// 3. Items Page (Saare products dikhayega)
function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Items</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(item => (
          <div key={item._id} style={{ border: '1px solid #ccc', padding: '15px', width: '200px', borderRadius: '5px' }}>
            <img src={item.image || 'https://via.placeholder.com/150'} alt={item.title} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <p style={{ fontSize: '12px', color: '#666' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Contact Us Page
function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>Email: support@ecommerce.com | Phone: +91 9876543210</p>
    </div>
  );
}

// 5. Admin Page (Add & Delete Items)
function Admin() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data bhej rahe hain:", { title, price, description, image });

    try {
      const res = await axios.post('http://localhost:5000/api/products', { 
        title, 
        price: Number(price), 
        description, 
        image 
      });
      console.log("Server response:", res.data);
      alert('Product Added Successfully!');
      setTitle(''); setPrice(''); setDescription(''); setImage('');
      fetchProducts();
    } catch (err) {
      // Yahan hum exact error print kar rahe hain jo server ya network se aaya hai
      console.error("Full Error Object:", err);
      if (err.response) {
        console.error("Server Error Data:", err.response.data);
        alert(`Failed: ${err.response.data.error || 'Server error'}`);
      } else if (err.request) {
        console.error("No response received:", err.request);
        alert('Failed: Backend server se connection nahi ho pa raha hai! (Server band ho sakta hai)');
      } else {
        console.error("Error message:", err.message);
        alert(`Failed: ${err.message}`);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel - Manage Items</h2>

      {/* Add Item Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', marginBottom: '30px' }}>
        <input type="text" placeholder="Product Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <button type="submit" style={{ background: 'green', color: 'white', padding: '8px', border: 'none' }}>Add Item</button>
      </form>

      {/* Delete Items List */}
      <h3>Existing Items (Click delete to remove)</h3>
      <ul>
        {products.map(item => (
          <li key={item._id} style={{ marginBottom: '10px' }}>
            {item.title} - ₹{item.price} &nbsp;
            <button onClick={() => handleDelete(item._id)} style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Main App Component with Navbar ---
export default function App() {
  return (
    <Router>
      <nav style={{ background: '#333', padding: '15px', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/items" style={{ color: 'white', textDecoration: 'none' }}>Items</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
        <Link to="/admin" style={{ color: '#ffcc00', textDecoration: 'none', fontWeight: 'bold' }}>Admin (Add/Delete)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}