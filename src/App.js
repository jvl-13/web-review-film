import './App.css';
import Navbar from './components/header/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import Favorite from './components/pages/Favorite';
import Footer from './components/footer/Footer';
import DetailFilm from './components/pages/DetailFilm';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailfilm' element={<DetailFilm />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
