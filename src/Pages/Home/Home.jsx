import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
      .then(res => res.json())
      .then(data => {
        setPokemons(data)
      })
  }, [])

  return (
    <div className="App">
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <div className="pokemon">
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <div className="types">
              {pokemon.apiTypes.map((type) => (
                <img src={type.image} alt={type.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/pokemon/1">Lien vers counter</Link>
    </div>
  );
}

export default Home;
