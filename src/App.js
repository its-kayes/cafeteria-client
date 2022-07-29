import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home> </Home>} />
        {/* <Route path="about" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
