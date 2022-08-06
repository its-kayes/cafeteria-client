import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import Menu from './components/menu/Menu';
import { Navbar } from './Navbar/Navbar';
import PerProduct from './components/perProduct/PerProduct';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/foods/:id' element={<PerProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
