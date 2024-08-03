
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Pages/Blog';
import Home from './Pages/Home'
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

