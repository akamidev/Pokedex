import Counter from './Pages/Counter/Counter';
import Home from './Pages/Home/Home'
import Pokemon from './Pages/Pokemon/Pokemon';
import Header from './Partials/Header/Header';
import Footer from './Partials/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
