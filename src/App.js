import { Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicesPage/Services";
import Products from "./pages/ProductsPage/Products";
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
        </Routes>
       <Footer />
     </div>
    </>
  );
}

export default App;
