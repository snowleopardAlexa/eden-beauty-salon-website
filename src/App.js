//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyles from './globalStyles';

function App() {
  return (
     <>
     <div className="routes">
       <GlobalStyles />
       <Navbar />
     </div>
     </>
  );
}

export default App;
