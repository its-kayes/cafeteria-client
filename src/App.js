import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import Menu from './components/menu/Menu';
import { Navbar } from './Navbar/Navbar';
import PerProduct from './components/perProduct/PerProduct';

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
      </Routes>
    </div>
  );
}

export default App;
