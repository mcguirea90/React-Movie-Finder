
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <>
    <Router>  
      <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:search' element={<Movies/>} />
          <Route path='/:search/:imdbID' element={<MovieInfo/>} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;