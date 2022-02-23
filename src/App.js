import { Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicesPage/Services";
import Products from "./pages/ProductsPage/Products";
import Contact from "./pages/ContactPage/Contact";
import { Navbar, Footer } from './components';
import GlobalStyles from './globalStyles';

function App() {
  return (
     <>
     <div className="app">
       <GlobalStyles />
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <Footer />
     </div>
    </>
  );
}

export default App;
