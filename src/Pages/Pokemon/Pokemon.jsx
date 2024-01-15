import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Pokemon() {
  const { pokemonId } = useParams()
  //https://pokebuildapi.fr/api/v1/pokemon/1
  useEffect(() => {
    console.log(pokemonId)
  })

  return (
    <div className="App">

    </div>
  );
}

export default Pokemon;
