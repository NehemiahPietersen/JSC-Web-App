import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Blogs from './components/pages/Blog';
import Contact from './components/pages/Contact';
import './App.css';

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
