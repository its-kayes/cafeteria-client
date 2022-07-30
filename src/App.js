import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
