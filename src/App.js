//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, InfoSection } from './components';
import GlobalStyles from './globalStyles';

function App() {
  return (
     <>
     <div className="routes">
       <GlobalStyles />
       <Navbar />
       <InfoSection />
     </div>
     </>
  );
}

export default App;
