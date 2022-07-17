import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/' exact />
          <Route element={<AboutUs/>} path='/aboutus' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
